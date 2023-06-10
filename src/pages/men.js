
import {Link} from 'react-router-dom'
export default function Men(){
    return (
        <>
        <div className="">
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/MenShirts/"}>Men Shirts</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/MenJoggers/"}>Men Joggers</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/MenJackets/"}>Men Jackets</Link>
            </div>
            <div className="flex flex-wrap justify-center py-10 px-5">
                <Link to={"/MenBottoms/"}>Men Bottoms</Link>
            </div>
        </div>
        </>
    )
}