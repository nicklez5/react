import {useState,useEffect,useContext} from 'react'
import {Link,useNavigate,useLocation,json} from 'react-router-dom'
import {baseUrl} from '../shared'
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
    const url = baseUrl + 'api/user/'
     
}