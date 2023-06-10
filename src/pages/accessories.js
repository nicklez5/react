import { Link } from "react-router-dom"; 
export default function Accessories(){
    return (
        <>
        <div className="">
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/Glasses/"}>Glasses</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/Earrings/"}>Earrings</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/Necklaces/"}>Necklaces</Link>
            </div>
        </div>
        </>
    )
}