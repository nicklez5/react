import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddGlasses from './AddGlasses';
import  useFetch  from  '../../hooks/UseFetch';
export default function Glasses(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/glasses/'
    const {request, appendData, data: {Glasses} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newGlasses(name,img_url,price,quantity){
        appendData({name: name,img_url:img_url,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Glasses:</h1>
        
        {Glasses
            ? Glasses.map((Glass) => {
                return (
                    <ul>
                    <div key={Glass.id}>
                        <strong>Name: </strong>
                        <Link to={"/Glasses/" + Glass.id}>
                            <button > 
                            {Glass.name}
                            </button>
                        </Link>
                    </div>
                     <div key={Glass.price}>
                        <strong>Price: </strong> {Glass.price}
                     </div>
                     <div key={Glass.quantity}>
                        <strong>Quantity: </strong>{Glass.quantity}
                     </div>
                     <div key={Glass.img_url}>
                        <img src={Glass.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_glass/" + Glass.id + "/"
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
        
        <AddGlasses 
        newGlasses={newGlasses} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}