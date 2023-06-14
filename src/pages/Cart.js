import {useState,useEffect,useContext} from 'react'
import {Link,useNavigate,useLocation,json ,useParams} from 'react-router-dom'
import {baseUrl} from '../shared'
import NotFound from '../components/NotFound'
import { LoginContext } from '../App'
import useFetch from '../hooks/UseFetch'
export default function Cart(){
    const [loggedIn,setLoggedIn] = useContext(LoginContext)
    const [show,setShow] = useState(false)
    function toggleShow(){
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const [WomenShirts,setWomenShirts] = useState();
    const [WomenPants,setWomenPants] = useState();
    const [WomenJackets,setWomenJackets] = useState();
    const [WomenJoggers,setWomenJoggers] = useState();

    const [Necklaces,setNecklaces] = useState()
    const [Earrings,setEarrings] = useState()
    const [Glasses,setGlasses] = useState()

    const [MenShirts,setMenShirts] = useState()
    const [MenPants,setMenPants] = useState()
    const [MenJoggers,setMenJoggers] = useState()
    const [MenJackets,setMenJackets] = useState()
    const [error,setError] = useState()
    function grab_womenshirts(){    
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/women_shirts/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setWomenShirts(data.WomenShirts)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_womenpants(){
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/women_pants/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setWomenPants(data.WomenPants)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_womenjackets(){
        
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/women_jackets/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setWomenJackets(data.WomenJackets)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_womenjoggers(){
        
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/women_joggers/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setWomenJoggers(data.WomenJoggers)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_necklaces(){
        
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/necklaces/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setNecklaces(data.Necklaces)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_glasses(){
        
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/glasses/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setGlasses(data.Glasses)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_earrings(){
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/earrings/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setEarrings(data.Earrings)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_menshirts(){
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/men_shirts/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setMenShirts(data.MenShirts)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_menpants(){
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/men_pants/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setMenPants(data.MenPants)
        }).catch((e) => {
            console.log("Error: ", e)
        })
    }
    function grab_menjoggers(){
        
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/men_joggers/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setMenJoggers(data.MenJoggers)
        }).catch((e) => {
            console.log("Error: ",e)
        })
    }
    function grab_menjackets(){
        
        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/men_jackets/'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access')
            } 
        }).then((response) =>{
            return response.json()
        }).then((data) => {
            setMenJackets(data.MenJackets)
        }).catch((e) => {
            console.log("Error: ", e)
        })
    }
    useEffect(()=>{
        grab_womenshirts()
        grab_womenpants()
        grab_womenjackets()
        grab_womenjoggers()
        grab_necklaces()
        grab_glasses()
        grab_earrings()
        grab_menshirts()
        grab_menpants()
        grab_menjoggers()
        grab_menjackets()
        
        
    },[])
    return (
        <>
        {MenJackets 
            ? MenJackets.map((MenJacket) => {
                return (
                    <ul>
                        <div key={MenJacket.id}>
                            <strong>Name: </strong>{MenJacket.name}
                        </div>
                        <div key={MenJacket.size}>
                            <strong>Size: </strong>{MenJacket.size}
                        </div>
                        <div key={MenJacket.price}>
                            <strong>Price: </strong>{MenJacket.price}
                        </div>
                        <div key={MenJacket.color}>
                            <strong>Color: </strong>{MenJacket.color}
                        </div>
                       
                        <div key={MenJacket.img_url}>
                            <img src={MenJacket.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                                onClick={(e)=> {
                                    const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menjacket/" + MenJacket.id + "/"
                                    fetch(url, {method: 'DELETE',headers:{
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
                                    }).catch((e) => {
                                        setError(e.message)
                                    })
                                }}>Remove from Cart</button>
                    </ul>
                )
        }): null}
        {MenShirts 
            ? MenShirts.map((MenShirt) => {
                return (
                    <ul>
                        <div key={MenShirt.id}>
                            <strong>Name: </strong>{MenShirt.name}
                        </div>
                        <div key={MenShirt.size}>
                            <strong>Size: </strong>{MenShirt.size}
                        </div>
                        <div key={MenShirt.price}>
                            <strong>Price: </strong>{MenShirt.price}
                        </div>
                        <div key={MenShirt.color}>
                            <strong>Color: </strong>{MenShirt.color}
                        </div>
                        <div key={MenShirt.img_url}>
                            <img src={MenShirt.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                            onClick={(e) => {
                                const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menshirt/" + MenShirt.id + "/"
                                fetch(url, {method: 'DELETE', headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer ' + localStorage.getItem('access')
                                }})
                                .then((response) => {
                                    if(response.status === 401){
                                        setLoggedIn(false)
                                        navigate('/login', {
                                            state: {
                                                previousUrl: location.pathname,
                                            }
                                        })
                                    }
                                    if(!response.ok){
                                        throw new Error('Something went wrong');
                                    }
                                    window.location.reload()
                                }).catch((e) => {
                                    setError(e.message)
                                });
                            }}
                        >Remove from Cart</button>
                    </ul>
                )
        }): null}
        {MenJoggers 
            ? MenJoggers.map((MenJogger) => {
                return (
                    <ul>
                        <div key={MenJogger.id}>
                            <strong>Name: </strong>{MenJogger.name}
                        </div>
                        <div key={MenJogger.waist_size}>
                            <strong>Size: </strong>{MenJogger.waist_size}
                        </div>
                        <div key={MenJogger.price}>
                            <strong>Price: </strong>{MenJogger.price}
                        </div>
                        <div key={MenJogger.color}>
                            <strong>Color: </strong>{MenJogger.color}
                        </div>
                        <div key={MenJogger.img_url}>
                            <img src={MenJogger.img_url} height="100" width="200"></img>
                        </div>
                        <button 
                        className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menjogger/" + MenJogger.id + "/"
                            fetch(url, {method: 'DELETE', headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }}).then((response) =>{
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login', {
                                        state: {
                                            previousUrl : location.pathname,
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                        >Remove from Cart</button>
                    </ul>
                )
            }): null}
        {MenPants 
            ? MenPants.map((MenPant) => {
                return (
                    <ul>
                        <div key={MenPant.id}>
                            <strong>Name: </strong>{MenPant.name}
                        </div>
                        <div key={MenPant.size}>
                            <strong>Waist Size: </strong>{MenPant.waist_size}
                        </div>
                        <div key={MenPant.price}>
                            <strong>Price: </strong> {MenPant.price}
                        </div>
                        <div key={MenPant.color}>
                            <strong>Color: </strong>{MenPant.color}
                        </div>
                        <div key={MenPant.img_url}>
                            <img src={MenPant.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_menpant/" + MenPant.id + "/"
                        fetch(url, {method: 'DELETE', headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + localStorage.getItem('access')
                        }})
                        .then((response) => {
                            if(response.status === 401){
                                setLoggedIn(false)
                                navigate('/login',{
                                    state: {
                                        previousUrl: location.pathname
                                    }
                                })
                            }
                            if(!response.ok){
                                throw new Error('Something went wrong')
                            }
                            window.location.reload()
                        }).catch((e) => {
                            setError(e.message)
                        })
                        }}
                        >Remove from Cart</button>
                    </ul>
                )
            }): null}
        {WomenJackets
            ? WomenJackets.map((WomenJacket) => {
                return (
                    <ul>
                        <div key={WomenJacket.id}>
                            <strong>Name: </strong>{WomenJacket.name}
                        </div>
                        <div key={WomenJacket.size}>
                            <strong>Size: </strong>{WomenJacket.size}
                        </div>
                        <div key={WomenJacket.price}>
                            <strong>Price: </strong>{WomenJacket.price}
                        </div>
                        <div key={WomenJacket.color}>
                            <strong>Color: </strong>{WomenJacket.color}
                        </div>
                        <div key={WomenJacket.img_url}>
                            <img src={WomenJacket.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                            onClick={(e) => {
                                const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenjacket/" + WomenJacket.id + "/"
                                fetch(url, {method: 'DELETE' ,headers: {
                                    'Content-Type' : 'application/json',
                                    Authorization: 'Bearer ' + localStorage.getItem('access')
                                }})
                                .then((response) => {
                                    if(response.status === 401){
                                        setLoggedIn(false)
                                        navigate('/login',{
                                            state: {
                                                previousUrl : location.pathname
                                            }
                                        })
                                    }
                                    if(!response.ok){
                                        throw new Error('Something went wrong')
                                    }
                                    window.location.reload()
                                }).catch((e) => {
                                    setError(e.message)
                                })
                            }}
                        >Remove from Cart</button>

                    </ul>
                )
            }) : null}
        {WomenJoggers 
            ? WomenJoggers.map((WomenJogger) => {
                return (
                    <ul>
                        <div key={WomenJogger.id}>
                            <strong>Name: </strong>{WomenJogger.name}
                        </div>
                        <div key={WomenJogger.waist_size}>
                            <strong>Size: </strong>{WomenJogger.waist_size}
                        </div>
                        <div key={WomenJogger.price}>
                            <strong>Price: </strong>{WomenJogger.price}
                        </div>
                        <div key={WomenJogger.color}>
                            <strong>Color: </strong>{WomenJogger.color}
                        </div>
                        <div key={WomenJogger.img_url}>
                            <img src={WomenJogger.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenjogger/" + WomenJogger.id + "/"
                            fetch(url,{method: 'DELETE', headers:{
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }})
                            .then((response) => {
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login',{
                                        state: {
                                            previousUrl: location.pathname
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                        >Remove from Cart</button>

                    </ul>
                )
            }): null}
        {WomenPants 
            ? WomenPants.map((WomenPant) => {
                return (
                    <ul>
                        <div key={WomenPant.id}>
                            <strong>Name: </strong>{WomenPant.name}
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
                        <div key={WomenPant.img_url}>
                            <img src={WomenPant.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + "/_womenpant/" + WomenPant.id + "/"
                            fetch(url, {method: 'DELETE' ,headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }})
                            .then((response) => {
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login', {
                                        state: {
                                            previousUrl : location.pathname
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                        >Remove from Cart</button>
                    </ul>
                )
            }): null}
        {WomenShirts 
        ? WomenShirts.map((WomenShirt) => {
            return (
                <ul>
                    <div key={WomenShirt.id}>
                        <strong>Name: </strong>{WomenShirt.name}
                    </div>
                    <div key={WomenShirt.waist_size}>
                        <strong>Size: </strong>{WomenShirt.size}
                    </div>
                    <div key={WomenShirt.price}>
                        <strong>Price: </strong> {WomenShirt.price}
                     </div>
                     <div key={WomenShirt.color}>
                        <strong>Color: </strong>{WomenShirt.color}
                     </div>
                     <div key={WomenShirt.img_url}>
                        <img src={WomenShirt.img_url} height="100" width="200"></img>
                     </div>
                     <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                     onClick={(e) => {
                        const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/_womenshirt/' + WomenShirt.id + '/'
                        fetch(url, {method: 'DELETE' , headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + localStorage.getItem('access')
                        }})
                        .then((response) => {
                            if(response.status === 401){
                                setLoggedIn(false)
                                navigate('/login', {
                                    state: {
                                        previousUrl : location.pathname
                                    }
                                })
                            }
                            if(!response.ok){
                                throw new Error('Something went wrong')
                            }
                            window.location.reload()
                        }).catch((e) => {
                            setError(e.message)
                        })
                    }}
                     >Remove from Cart</button>

                </ul>
            )
        }): null}
        {Earrings 
            ? Earrings.map((Earring)=> {
                return (
                    <ul>
                        <div key={Earring.id}>
                            <strong>Name: </strong>{Earring.name}
                        </div>
                        <div key={Earring.price}>
                            <strong>Price: </strong>{Earring.price}
                        </div>
                        <div key={Earring.img_url}>
                            <img src={Earring.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e)=> {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/_earring/' + Earring.id + '/'
                            fetch(url, {method: 'DELETE', headers:{
                                'Content-Type' : 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }})
                            .then((response) => {
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login',{
                                        state: {
                                            previousUrl: location.pathname
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                        >Remove from Cart</button>
                    </ul>
                )
        }) : null }
        {Glasses
            ?  Glasses.map((Glass) => {
                return (
                    <ul>
                        <div key={Glass.id}>
                            <strong>Name: </strong>{Glass.name}
                        </div>
                        <div key={Glass.price}>
                            <strong>Price: </strong>{Glass.price}
                        </div>
                        <div key={Glass.img_url}>
                            <img src={Glass.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/_glass/' + Glass.id + '/'
                            fetch(url, {method: 'DELETE', headers:{
                                'Content-Type' : 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }})
                            .then((response) => {
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login',{
                                        state: {
                                            previousUrl: location.pathname
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                        >Remove from Cart</button>

                    </ul>
                )
        }):null}
        {Necklaces 
            ? Necklaces.map((Necklace)=>{
                return (
                    <ul>
                        <div key={Necklace.id}>
                            <strong>Name: </strong>{Necklace.name}
                        </div>
                        <div key={Necklace.price}>
                            <strong>Price: </strong>{Necklace.price}
                        </div>
                        <div key={Necklace.img_url}>
                            <img src={Necklace.img_url} height="100" width="200"></img>
                        </div>
                        <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e)=>{
                            const url = baseUrl + 'api/carts/' + localStorage.getItem('id') + '/_necklace/' + Necklace.id + '/'
                            fetch(url, {method: 'DELETE', headers:{
                                'Content-Type' : 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('access')
                            }})
                            .then((response) => {
                                if(response.status === 401){
                                    setLoggedIn(false)
                                    navigate('/login',{
                                        state: {
                                            previousUrl: location.pathname
                                        }
                                    })
                                }
                                if(!response.ok){
                                    throw new Error('Something went wrong')
                                }
                                window.location.reload()
                            }).catch((e) => {
                                setError(e.message)
                            })
                        }}
                        >Remove from Cart</button>
                    </ul>
                )
            }):null}
        </>
    )
}