import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddMenPants from './AddMenPant';
import  useFetch  from  '../../hooks/UseFetch';
export default function MenPants(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error, setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/men_pants/'
    const {request, appendData, data: {MenPants} = {} , errorStatus} = useFetch(url, {
        method: 'GET' ,
        headers:{
            'Content-Type' : 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'), 
        },
    });
    useEffect(() => {
        request();
    },[])
    //useEffect(() => {
        //console.log(request,appendData,MenShirts,errorStatus)
    //})
    
   
    function newMenPants(name,waist_size,img_url,color,price,quantity){
        appendData({name: name, waist_size:waist_size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Men Pants:</h1>
        
        {MenPants
            ? MenPants.map((MenPant) => {
                return (
                    <ul>
                    <div key={MenPant.id}>
                        <strong>Name: </strong>
                        <Link to={"/MenBottoms/" + MenPant.id}>
                            <button > 
                            {MenPant.name}
                            </button>
                        </Link>
                    </div>
                    <div key={MenPant.size}>
                        <strong>Waist Size: </strong>{MenPant.waist_size}
                     </div>
                     <div key={MenPant.price}>
                        <strong>Price: </strong> {MenPant.price}
                     </div>
                     <div key={MenPant.color}>
                        <strong>Color: </strong>{MenPant.color}
                     </div>
                     <div key={MenPant.quantity}>
                        <strong>Quantity: </strong>{MenPant.quantity}
                     </div>
                     <div key={MenPant.img_url}>
                        <img src={MenPant.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menpant/" + MenPant.id + "/"
                            fetch(url, {method: 'POST' ,headers:{
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }})
                            .then((response) => {
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login', {
                                        state: {
                                            previousUrl: location.pathname
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                                return response.json();
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                     >Add to Cart</button>
                     </ul>
                    
                    )
        }): null}
        
        <AddMenPants
        newMenPants={newMenPants} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}