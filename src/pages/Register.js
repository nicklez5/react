import {useState,useEffect,useContext} from 'react'
import {baseUrl} from '../shared'
import { useNavigate,useLocation } from "react-router-dom"
import { LoginContext } from '../App';

export default function Register(){
    const [loggedIn, setLoggedIn] = useContext(LoginContext);
    const [email,setEmail] = useState()
    const [name, setName] = useState()
    const [password,setPassword] = useState()
    const [password2,setPassword2] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        localStorage.clear()
        setLoggedIn(false)
    })
    function register(e){
        e.preventDefault()
        const url = baseUrl + 'api/register/'
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password2: password2
            })
        })
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data)=>{
            localStorage.setItem('access',data.access)
            localStorage.setItem('refresh',data.refresh)
            setLoggedIn(true)
            navigate(location?.state?.previousUrl ? location.state.previousUrl : '/menshirts')
        })
    }
    return (
        <form
        className="m-2 w-full max-w-sm"
        id="MenShirts"
        onSubmit={register}>
        <div className="md:flex md:items-center mb-6">
            <div className="md:1/4 px-4">
                <label for="name">Name:</label>
            </div>
        <div className="md:w-3/4">
            <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            type="text"
            value={name}
            onChange={(e)=> {
                setName(e.target.value)
            }}
            />
        </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:1/4 px-4">
                <label for="email">Email:</label>
            </div>
        <div className="md:w-3/4">
            <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="email"
            value={email}
            onChange={(e)=> {
                setEmail(e.target.value)
            }}
            />
        </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4 px-4">
                <label for="password">Password:</label>
            </div>
            <div className="md:w-3/4">
                    <input
                    id="password"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    />
                </div>
                    
            </div>
            <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4 px-4">
                <label for="password2">Password:</label>
            </div>
            <div className="md:w-3/4">
                    <input
                    id="password2"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="password"
                    value={password2}
                    onChange={(e) => {
                        setPassword2(e.target.value)
                    }}
                    />
                </div>
                    
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Register</button>
        </form>
        
        
        
        
    )
}