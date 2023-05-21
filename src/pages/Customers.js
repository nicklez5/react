import {useEffect, useState} from 'react'
export default function Customers(){
    const [MenShirts, setMenShirts] = useState()
    useEffect(() => {
        
        console.log("Fetching...");
        fetch('http://127.0.0.1:8000/api/clothes/men_shirts')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMenShirts(data.MenShirts);
        })
    },[])
    return (   
    <>
        
        <h1>Here are our clothes:</h1>
        {MenShirts 
        ? MenShirts.map((MenShirts) => {
            return (
                <p>
                <strong>id: </strong>{MenShirts.id}
                <br/>
                <strong>size: </strong>{MenShirts.size}
                <br/>
                <strong>price: </strong> {MenShirts.price}
                <br/>
                <strong>color: </strong>{MenShirts.color}
                <br/>
                <strong>image: </strong><img src="{img}" width="100" height="100" className="d-inline-block align-top"></img>
                </p>
                )
        }): null}
    </>
    
   
   );
}