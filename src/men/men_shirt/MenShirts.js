import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import  AddMenShirt  from './AddMenShirt'
import  useFetch  from  '../../hooks/UseFetch';
export default function MenShirts(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/men_shirts/'
    const {request, appendData, data: {MenShirts} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newMenShirt(name,size,img_url,color,price,quantity){
        appendData({name: name, size:size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Men Shirts:</h1>
        
        {MenShirts
            ? MenShirts.map((MenShirt) => {
                return (
                    <ul>
                    <div key={MenShirt.id}>
                    <strong>Name: </strong>
                        <Link to={"/MenShirts/" + MenShirt.id}>
                            <button > 
                            {MenShirt.name}
                            </button>
                        </Link>
                    </div>
                    <div key={MenShirt.size}>
                        <strong>Size: </strong>{MenShirt.size}
                     </div>
                     <div key={MenShirt.price}>
                        <strong>Price: </strong> {MenShirt.price}
                     </div>
                     <div key={MenShirt.color}>
                        <strong>Color: </strong>{MenShirt.color}
                     </div>
                     <div key={MenShirt.quantity}>
                        <strong>Quantity: </strong> {MenShirt.quantity}
                     </div>
                     <div key={MenShirt.img_url}>
                        <img src={MenShirt.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menshirt/" + MenShirt.id + "/"
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
        
        <AddMenShirt 
        newMenShirt={newMenShirt} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}