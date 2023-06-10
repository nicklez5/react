import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import  useFetch  from  '../../hooks/UseFetch';
import AddNecklace from './AddNecklace';
export default function Necklaces(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/necklaces/'
    const {request, appendData, data: {Necklaces} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newNecklace(name,img_url,price,quantity){
        appendData({name: name,img_url:img_url,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Necklaces:</h1>
        
        {Necklaces
            ? Necklaces.map((Necklace) => {
                return (
                    <ul>
                    <div key={Necklace.id}>
                        <strong>Name: </strong>
                        <Link to={"/Necklaces/" + Necklace.id}>
                            <button> 
                            {Necklace.name}
                            </button>
                        </Link>
                    </div>
                     <div key={Necklace.price}>
                        <strong>Price: </strong> {Necklace.price}
                     </div>
                     <div key={Necklace.quantity}>
                        <strong>Quantity: </strong>{Necklace.quantity}
                     </div>
                     <div key={Necklace.img_url}>
                        <img src={Necklace.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                     </ul>
                    
                    )
        }): null}
        
        <AddNecklace 
        newNecklace={newNecklace} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}