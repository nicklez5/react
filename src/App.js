import './index.css';
import Employee from './components/Employee';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';
import {createContext ,useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Men from './pages/men';
import MenShirts from './men/men_shirt/MenShirts';
import MenShirt from './men/men_shirt/MenShirt';
import MenJogger from './men/men_joggers/MenJogger';
import MenJoggers from './men/men_joggers/MenJoggers';
import MenPant from './men/men_pants/MenPant';
import MenPants from './men/men_pants/MenPants';
import MenJacket from './men/men_jacket/MenJacket';
import MenJackets from './men/men_jacket/MenJackets';
import Women from './pages/women';
import WomenJackets from './women/women_jacket/WomenJackets';
import WomenJacket from './women/women_jacket/WomenJacket';
import WomenJoggers from './women/women_joggers/WomenJoggers';
import WomenJogger from './women/women_joggers/WomenJogger';
import WomenPants from './women/women_pants/WomenPants';
import WomenPant from './women/women_pants/WomenPant';
import WomenShirt from './women/women_shirt/WomenShirt';
import WomenShirts from './women/women_shirt/WomenShirts';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Login from './pages/Login';
import { baseUrl } from './shared';
import Register from './pages/Register';
import Accessories from './pages/accessories';
import Earring from './accessories/earrings/Earring';
import Earrings from './accessories/earrings/Earrings';
import Glasses from './accessories/glasses/Glasses';
import Glass from './accessories/glasses/Glass';
import Necklaces from './accessories/necklaces/Necklaces';
import Necklace from './accessories/necklaces/Necklace';
import Cart from './pages/Cart';
export const LoginContext = createContext();

function App() {
  useEffect(()=>{
    function refreshTokens(){
      if(localStorage.refresh){
        const url = baseUrl + "api/token/refresh/";
        fetch(url,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              refresh: localStorage.refresh,
            })
        }).then((response) => {
          return response.json();
        }).then((data)=>{ 
            //console.log(data)
            localStorage.access = data.access;
            localStorage.refresh = data.refresh
            setLoggedIn(true)
        })
      }
    } 
    const minutes = 1000 * 60;
    refreshTokens();
    setInterval(refreshTokens ,minutes * 3)
  },[])
   const [loggedIn,setLoggedIn] = useState(localStorage.access ? true : false);
   function changeLoggedIn(value){
    setLoggedIn(value);
    if(value === false){
      localStorage.clear();
    }
   }
   return (
      <LoginContext.Provider value={[loggedIn,changeLoggedIn]}>
        <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />}/>
            <Route path='/dictionary' element={<Dictionary />}></Route>
            <Route path='/dictionary/:search' element={<Definition />}></Route>
            <Route path='/necklaces/:id' element={<Necklace/>}></Route>
            <Route path='/necklaces' element={<Necklaces/>}></Route>
            <Route path='/glasses/:id' element={<Glass/>}></Route>
            <Route path='/glasses' element={<Glasses/>}></Route>
            <Route path='/earrings/:id' element={<Earring />}></Route>
            <Route path='/earrings' element={<Earrings/>}></Route>
            <Route path='/womenshirts/:id' element={<WomenShirt />}></Route>
            <Route path='/womenshirts' element={<WomenShirts/>}></Route>
            <Route path='/womenpants/:id' element={<WomenPant/>}></Route>
            <Route path='/womenpants'element={<WomenPants/>}></Route>
            <Route path='/womenjoggers/:id'element={<WomenJogger/>}></Route>
            <Route path='/womenjoggers'element={<WomenJoggers/>}></Route>
            <Route path='/womenjackets/:id'element={<WomenJacket/>}></Route>
            <Route path='/womenjackets'element={<WomenJackets/>}></Route>
            <Route path='/menbottoms/:id'element={<MenPant/>}></Route>
            <Route path='/menbottoms' element={<MenPants />}></Route>
            <Route path='/menjackets/:id' element={<MenJacket />}></Route>
            <Route path='/menjackets' element={<MenJackets/>}></Route>
            <Route path='/menjoggers' element={<MenJoggers/>}></Route>
            <Route path='/menjoggers/:id' element={<MenJogger/>}></Route>
            <Route path='/menshirts' element={<MenShirts />}></Route>
            <Route path='/menshirts/:id'element={<MenShirt/>}></Route>
            <Route path='/accessories' element={<Accessories/>}></Route>
            <Route path='/women'element={<Women/>}></Route>
            <Route path='/men'element={<Men/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/404' element={<NotFound />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          </Header>
        </BrowserRouter>
      </LoginContext.Provider>
      
    

   )
}

export default App;
