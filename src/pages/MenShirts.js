import {useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { baseUrl } from '../shared';
import  AddMenShirt  from '../components/AddMenShirt'
export default function MenShirts(){
    const [menshirts, setMenShirts] = useState()
    const [show,setShow] = useState(false)
    function toggleShow(){
        setShow(!show)
    }
    const navigate = useNavigate();
    useEffect(() => {
        const url = baseUrl + 'api/clothes/men_shirts/'

        fetch(url ,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8',
                Authorization: 'Bearer ' + localStorage.getItem('access'), 
            },
        })
        .then((response) => {
            if(response.status === 401){
                navigate('/login')
            }
           
            return response.json()
        })
        .then((data) => {
            console.log(data)
            console.log(data.MenShirts)
            setMenShirts(data.MenShirts)
        })
    },[])
    function newMenShirt(name,size,img,color,price){
        const url = baseUrl + 'api/clothes/men_shirts/';
        const data = {name:name, size:size, img_url:img, color:color, price:price}
        fetch(url , {
            
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json; charset=UTF-8',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body:JSON.stringify(data)
        }).then((response) => {
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            return response.json()
        }).then((data) =>{
            toggleShow()
            console.log(data);
            setMenShirts([...menshirts, data.MenShirts])
        }).catch((e) => {
            console.log(e)
        });
    }
    return (   
    <>
        
        <h1>Here are our clothes:</h1>
        
        {menshirts
            ? menshirts.map((MenShirt) => {
                return (
                    <ul>
                    <div className="m-2" key={MenShirt.id}>
                        <Link to={"/MenShirts/" + MenShirt.id}>
                            <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"> 
                            {MenShirt.name}
                            </button>
                        </Link>
                    </div>
                    <div key={MenShirt.size}>
                        <strong>Size: </strong>{MenShirt.size}
                     </div>
                     <div key={MenShirt.Price}>
                        <strong>Price: </strong> {MenShirt.price}
                     </div>
                     <div key={MenShirt.color}>
                        <strong>Color: </strong>{MenShirt.color}
                     </div>
                     <div key={MenShirt.img_url}>
                        <img src={MenShirt.img_url} height="100" width="200"></img>
                     </div>
                     </ul>
                    
                    )
        }): null}
        
        <AddMenShirt 
        newMenShirt={newMenShirt} 
        show={show} 
        toggleShow={toggleShow}/>
    </>
    
   
   );
}