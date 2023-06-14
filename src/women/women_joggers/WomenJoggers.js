import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddWomenJogger from './AddWomenJogger';
import  useFetch  from  '../../hooks/UseFetch';
export default function WomenJoggers(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/women_joggers/'
    const {request, appendData, data: {WomenJoggers} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newWomenJogger(name,size,img_url,color,price,quantity){
        appendData({name: name, size:size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our clothes:</h1>
        
        {WomenJoggers
            ? WomenJoggers.map((WomenJogger) => {
                return (
                    <ul>
                    <div key={WomenJogger.id}>
                        <strong>Name: </strong>
                        <Link to={"/WomenJoggers/" + WomenJogger.id}>
                            <button> 
                            {WomenJogger.name}
                            </button>
                        </Link>
                    </div>
                    <div key={WomenJogger.waist_size}>
                        <strong>Size: </strong>{WomenJogger.waist_size}
                     </div>
                     <div key={WomenJogger.price}>
                        <strong>Price: </strong> {WomenJogger.price}
                     </div>
                     <div key={WomenJogger.color}>
                        <strong>Color: </strong>{WomenJogger.color}
                     </div>
                     <div key={WomenJogger.quantity}>
                        <strong>Quantity: </strong> {WomenJogger.quantity}
                     </div>
                     <div key={WomenJogger.img_url}>
                        <img src={WomenJogger.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenjogger/" + WomenJogger.id + "/"
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
        
        <AddWomenJogger
        newWomenJogger={newWomenJogger} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}