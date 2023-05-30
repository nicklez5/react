import {useState} from 'react'
import {baseUrl} from '../shared'
import { useNavigate } from "react-router-dom"
export default function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();
    function login(e){
        e.preventDefault()
        const url = baseUrl + 'api/token/'
        fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((data)=>{
            localStorage.setItem('access',data.access)
            localStorage.setItem('refresh',data.refresh)
            console.log(localStorage)
            navigate('/menshirts')
        })
    }
    return (
        <form
        className="m-2 w-full max-w-sm"
        id="MenShirts"
        onSubmit={login}>
        <div className="md:flex md:items-center mb-6">
            <div className="md:1/4 px-4">
                <label for="email">Email:</label>
            </div>
        <div className="md:w-3/4">
            <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="text"
            value={email}
            onChange={(e)=> {
                setEmail(e.target.value)
            }}
            />
        </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4 px-3">
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
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </form>
        
        
        
        
    )
}