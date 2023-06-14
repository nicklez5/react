import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import WomenPant from './WomenPant';
import AddWomenPants from './AddWomenPants';
import  useFetch  from  '../../hooks/UseFetch';
export default function WomenPants(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/women_pants/'
    const {request, appendData, data: {WomenPants} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newWomenPants(name,size,img_url,color,price,quantity){
        appendData({name: name, size:size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    function AddToCart(name){
        console.log(name)
    }
    return (   
    <>
        
        <h1>Here are our clothes:</h1>
        
        {WomenPants
            ? WomenPants.map((WomenPant) => {
                return (
                    <ul>
                    <div key={WomenPant.id}>
                        <strong>Name: </strong>
                        <Link to={"/WomenPants/" + WomenPant.id}>
                            <button> 
                            {WomenPant.name}
                            </button>
                        </Link>
                    </div>
                    <div key={WomenPant.waist_size}>
                        <strong>Waist Size: </strong>{WomenPant.waist_size}
                     </div>
                     <div key={WomenPant.price}>
                        <strong>Price: </strong> {WomenPant.price}
                     </div>
                     <div key={WomenPant.color}>
                        <strong>Color: </strong>{WomenPant.color}
                     </div>
                     <div key={WomenPant.quantity}>
                        <strong>Quantity: </strong>{WomenPant.quantity}
                     </div>
                     <div key={WomenPant.img_url}>
                        <img src={WomenPant.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenpant/" + WomenPant.id + "/"
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
        
        <AddWomenPants
        newWomenPants={newWomenPants} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}