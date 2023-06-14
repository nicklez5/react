import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddWomenShirt from './AddWomenShirt';
import  useFetch  from  '../../hooks/UseFetch';
export default function WomenShirts(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/women_shirts/'
    const {request, appendData, data: {WomenShirts} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newWomenShirt(name,size,img_url,color,price,quantity){
        appendData({name: name, size:size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our clothes:</h1>
        
        {WomenShirts
            ? WomenShirts.map((WomenShirt) => {
                return (
                    <ul>
                    <div key={WomenShirt.id}>
                        <strong>Name: </strong>
                        <Link to={"/WomenShirts/" + WomenShirt.id}>
                            <button > 
                            {WomenShirt.name}
                            </button>
                        </Link>
                    </div>
                    <div key={WomenShirt.size}>
                        <strong>Size: </strong>{WomenShirt.size}
                     </div>
                     <div key={WomenShirt.price}>
                        <strong>Price: </strong> {WomenShirt.price}
                     </div>
                     <div key={WomenShirt.color}>
                        <strong>Color: </strong>{WomenShirt.color}
                     </div>
                     <div key={WomenShirt.quantity}>
                        <strong>Quantity: </strong> {WomenShirt.quantity}
                     </div>
                     <div key={WomenShirt.img_url}>
                        <img src={WomenShirt.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenshirt/" + WomenShirt.id + "/"
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
        
        <AddWomenShirt 
        newWomenShirt={newWomenShirt} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}