import { Link } from "react-router-dom";
export default function Women(){
    return (
        <>
        <div className="">
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/WomenShirts/"}>Women Shirts</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/WomenJoggers/"}>Women Joggers</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/WomenJackets/"}>Women Jackets</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/WomenPants/"}>Women Bottoms</Link>
            </div>
        </div>

        </>
    )
}