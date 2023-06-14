import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddMenJacket from './AddMenJacket';
import  useFetch  from  '../../hooks/UseFetch';
export default function MenJackets(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/men_jackets/'
    const {request, appendData, data: {MenJackets} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newMenJacket(name,size,img_url,color,price,quantity){
        appendData({name: name, size:size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Men Jackets:</h1>
        
        {MenJackets
            ? MenJackets.map((MenJacket) => {
                return (
                    <ul>
                    <div key={MenJacket.id}>
                        <strong>Name: </strong>
                        <Link to={"/MenJackets/" + MenJacket.id}>
                            <button> 
                            {MenJacket.name}
                            </button>
                        </Link>
                    </div>
                    <div key={MenJacket.size}>
                        <strong>Size: </strong>{MenJacket.size}
                     </div>
                     <div key={MenJacket.price}>
                        <strong>Price: </strong> {MenJacket.price}
                     </div>
                     <div key={MenJacket.color}>
                        <strong>Color: </strong>{MenJacket.color}
                     </div>
                     <div key={MenJacket.quantity}>
                        <strong>Quantity: </strong>{MenJacket.quantity}
                     </div>
                     <div key={MenJacket.img_url}>
                        <img src={MenJacket.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menjacket/" + MenJacket.id + "/"
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
        
        <AddMenJacket 
        newMenJacket={newMenJacket} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}