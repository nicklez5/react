import {useEffect, useState,useContext} from 'react'
import { Link,useNavigate, useLocation, json } from 'react-router-dom';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';
import AddMenJogger from './AddMenJogger';
import  useFetch  from  '../../hooks/UseFetch';
export default function MenJoggers(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    //const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    const [error,setError] = useState()
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const url = baseUrl + 'api/men_joggers/'
    const {request, appendData, data: {MenJoggers} = {} , errorStatus} = useFetch(url, {
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
    
   
    function newMenJogger(name,waist_size,img_url,color,price,quantity){
        appendData({name: name, waist_size:waist_size,img_url:img_url,color:color,price:price,quantity:quantity})
        if(!errorStatus){
            toggleShow()
        }
    }
    
    return (   
    <>
        
        <h1>Here are our Men Joggers:</h1>
        
        {MenJoggers
            ? MenJoggers.map((MenJogger) => {
                return (
                    <ul>
                    <div key={MenJogger.id}>
                        <strong>Name: </strong>
                        <Link to={"/MenJoggers/" + MenJogger.id}>
                            <button> 
                            {MenJogger.name}
                            </button>
                        </Link>
                    </div>
                    <div key={MenJogger.waist_size}>
                        <strong>Size: </strong>{MenJogger.waist_size}
                     </div>
                     <div key={MenJogger.price}>
                        <strong>Price: </strong> {MenJogger.price}
                     </div>
                     <div key={MenJogger.color}>
                        <strong>Color: </strong>{MenJogger.color}
                     </div>
                     <div key={MenJogger.quantity}>
                        <strong>Quantity: </strong>{MenJogger.quantity}
                     </div>
                     <div key={MenJogger.img_url}>
                        <img src={MenJogger.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menjogger/" + MenJogger.id + "/"
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
        
        <AddMenJogger
        newMenJogger={newMenJogger} 
        show={show} 
        toggleShow={toggleShow}
        
        />
    </>
    
   
   );
}