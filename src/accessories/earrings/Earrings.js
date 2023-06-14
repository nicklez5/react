import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddEarring from './AddEarring';
import  useFetch  from  '../../hooks/UseFetch';
export default function Earrings(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/earrings/'
    const {request, appendData, data: {Earrings} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newEarring(name,img_url,price,quantity){
        appendData({name: name,img_url:img_url,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our earrings:</h1>
        
        {Earrings
            ? Earrings.map((Earring) => {
                return (
                    <ul>
                    <div key={Earring.id}>
                        <strong>Name: </strong>
                        <Link to={"/Earrings/" + Earring.id}>
                            <button> 
                            {Earring.name}
                            </button>
                        </Link>
                    </div>
                     <div key={Earring.price}>
                        <strong>Price: </strong> {Earring.price}
                     </div>
                     <div key={Earring.quantity}>
                        <strong>Quantity: </strong> {Earring.quantity}
                     </div>
                     <div key={Earring.img_url}>
                        <img src={Earring.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_earring/" + Earring.id + "/"
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
        
        <AddEarring 
        newEarring={newEarring} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}