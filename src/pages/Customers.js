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
        ? MenShirts.map((MenShirt) => {
            return (
                <p>
                <strong>id: </strong>{MenShirt.id}
                <br/>
                <strong>size: </strong>{MenShirt.size}
                <br/>
                <strong>price: </strong> {MenShirt.price}
                <br/>
                <strong>color: </strong>{MenShirt.color}
                <br/>
                <strong>image: </strong> <img src={MenShirt.img_url} height="100" width="200"></img>
                </p>
                )
        }): null}
    </>
    
   
   );
}