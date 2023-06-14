import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddWomenJacket from './AddWomenJacket';
import  useFetch  from  '../../hooks/UseFetch';
export default function WomenJackets(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/women_jackets/'
    const {request, appendData, data: {WomenJackets} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newWomenJacket(name,size,img_url,color,price,quantity){
        appendData({name: name, size:size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Women Jackets:</h1>
        
        {WomenJackets
            ? WomenJackets.map((WomenJacket) => {
                return (
                    <ul>
                    <div key={WomenJacket.id}>
                        <strong>Name: </strong>
                        <Link to={"/WomenJackets/" + WomenJacket.id}>
                            <button> 
                            {WomenJacket.name}
                            </button>
                        </Link>
                    </div>
                    <div key={WomenJacket.size}>
                        <strong>Size: </strong>{WomenJacket.size}
                     </div>
                     <div key={WomenJacket.price}>
                        <strong>Price: </strong> {WomenJacket.price}
                     </div>
                     <div key={WomenJacket.color}>
                        <strong>Color: </strong>{WomenJacket.color}
                     </div>
                     <div key={WomenJacket.quantity}>
                        <strong>Quantity: </strong>{WomenJacket.quantity}
                     </div>
                     <div key={WomenJacket.img_url}>
                        <img src={WomenJacket.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenjacket/" + WomenJacket.id + "/"
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
        
        <AddWomenJacket 
        newWomenJacket={newWomenJacket} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}