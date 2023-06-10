import { useParams, Link, useNavigate,useLocation } from "react-router-dom"
import { useEffect, useState, useContext} from "react";
import NotFound from "../../components/NotFound";
import { baseUrl } from "../../shared";
import { LoginContext } from "../../App";
export default function Necklace(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext)
    const { id } = useParams("");
    const [Necklace,setNecklace] = useState()
    const [notFound,setNotFound] = useState()
    const[tempNecklace,setTempNecklace] = useState();
    const [changed, setChanged ] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(()=>{
        if(!Necklace) return;
        if(!tempNecklace) return;
        
        let equal = true
        if(Necklace.name !== tempNecklace.name) equal = false;
        if(Necklace.img_url !== tempNecklace.img_url) equal = false
        if(Necklace.price !== tempNecklace.price) equal = false
        if(Necklace.quantity !== tempNecklace.quantity) equal = false
        if(equal)setChanged(false);

    })
    useEffect(() => {
        
        const url = baseUrl + 'api/necklaces/' + id + '/' 
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            }
        })
        .then((response) => {
            if(response.status === 404){
                setNotFound(true);
            }else if (response.status === 401){
                setLoggedIn(false)
                navigate('/login',{
                    state: {
                        previousUrl: location.pathname,
                    }
                })
            }

            if(!response.ok)
                throw new Error("Something went wrong, try again later")
            return response.json()
        })
        .then((data) => {
              
            setNecklace(data.Necklace)
            setTempNecklace(data.Necklace)
            setError(undefined)
        }).catch((e) => {
            setError(e.message)
        })
    },[])
    function deleteCustomer(){
        
    }
    
    function updateNecklace(e){
        e.preventDefault();
        const url = baseUrl + 'api/necklaces/' + id + '/';
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
                Authorization: 'Bearer ' + localStorage.getItem('access'),

            },
            body: JSON.stringify(tempNecklace)
        }).then((response) => {
            if (response.status === 401){
                setLoggedIn(false)
                navigate('/login',{
                    state: {
                        previousUrl: location.pathname,
                    }
                })
            }
            if(!response.ok){
                throw new Error('something went wrong')
            }
                return response.json()
        }).then((data) =>
        {
            setNecklace(data.Necklace)
            setChanged(false)
            
            setError(undefined)
        }).catch((e) =>{
            
            setError(e.message)
        })
    }
    return (
        <div>
        {notFound ? <p>The customer with id {id} was not found</p> : null}
        {Necklace ? (
            <div className='p-3'>
            <form id="Necklaces" className="w-full max-w-sm" onSubmit={updateNecklace}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label for="name" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >Image:</label>
                    </div>
                </div>
            <div className="md:w-2/3">
                <img src={Necklace.img_url} height="100" width="200" className="md:flex md:items-center mb-6"></img>
                <br></br>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label for="name" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >Name:</label>
                </div>
            <div className="md:w-2/3">
                <input 
                id = "name"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                type="text" 
                value={tempNecklace.name}
                onChange={(e) => {
                    setChanged(true)
                    setTempNecklace({...tempNecklace,
                        name: e.target.value,
                    })
                    
                }}  />
            </div>
            </div>
            
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label for="price" className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Price:</label>
                </div>
                <div className="md:w-2/3">
                    <input 
                    id="price"
                    className = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="number"
                    value={tempNecklace.price}
                    onChange={(e) => {
                    setChanged(true)
                    
                    setTempNecklace({...tempNecklace,
                        price: e.target.value,
                    })
                    
                }}/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label for="img_url" className="block text-gray-500 font-bond md:text-right mb-1 md:mb-0 pr-4">Img url:</label>
                </div>
            <div className="md:w-2/3">
            <input 
            id="img_url"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text" 
            value={tempNecklace.img_url} 
            onChange={(e) => {
                setChanged(true)
                setTempNecklace({...tempNecklace,
                    img_url: e.target.value,
                })
                
            }}/>
            </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label for="quantity" className="block text-gray-500 font-bond md:text-right mb-1 md:mb-0 pr-4">Quantity:</label>
                </div>
            <div className="md:w-2/3">
            <input 
            id="quantity"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number" 
            value={tempNecklace.quantity} 
            onChange={(e) => {
                setChanged(true)
                setTempNecklace({...tempNecklace,
                    quantity: e.target.value,
                })
                
            }}/>
            </div>
            </div>
            </form>
            { changed ? 
            ( 
            <div className="mb-2">
            <button className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 mr-2 rounded" onClick={(e) => {
                setTempNecklace({...Necklace})
                setChanged(false)
            }}>Cancel</button> 
            <button 
                form="Necklaces" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
            </div>
        ) : null}
        <button 
            className = "bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
            const url = baseUrl + 'api/necklaces/' + id + "/"
            fetch(url, {method: 'DELETE', headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            }})
            .then((response) => {
                if(response.status === 401){
                    setLoggedIn(false)
                    navigate('/login',{
                        state: {
                            previousUrl: location.pathname,
                        }
                    })
                }
                if(!response.ok){
                    throw new Error('Something went wrong');
                }
                navigate('/Necklaces')
            }).catch((e) => {
                setError(e.message)
            });
            
        }}>
            Delete
        </button>
        </div>
        
        ) : null}
        {error ? <p>{error}</p> : null}
        <br></br>
        <Link to="/Necklaces"><button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">← Go back</button></Link>
        
        </div>
        
    )
}