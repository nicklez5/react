
import { useEffect,useState } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";
export default function Definition(){
    const [ word ,setWord] = useState()
    const [notFound,setNotFound] = useState(false)
    const [error,setError] = useState(false)
    let { search } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        //const url = 'https://fdofksd;lfsdkldsfsf.com'
        //const url = 'https://httpstat.us/501';
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => 
                response.json()
            )
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            })
            .catch((e) => {
                console.log(e.message);
            })
    },[]);
    if(notFound ===true){
        return (
            <>
             <NotFound />
             <Link to="/dictionary">Search another</Link>
             
            </>
        )
    }
    if(error === true){
        return (
            <>
             <p>Something went wrong, try again?</p>
             <Link to="/dictionary">Search another</Link>
             
            </>
        )
    }
    return( 
    <>
        
        {word 
            ? <> <h1>Here is a definition:</h1> 
            {word.map((meaning) => {
                return (
                    <p key={uuidv4()}>
                        {meaning.partOfSpeech + " : "}
                        {meaning.definitions[0].definition}
                    </p>
                    );
                })}
                <p>Search again:</p>
                <DefinitionSearch/>
                </>
                : null }
        </>
    );
}
