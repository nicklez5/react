import './index.css';
import Employee from './components/Employee';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MenShirts from './pages/MenShirts';
import MenShirt from './pages/MenShirt';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Login from './pages/Login';
function App() {
   return (
      <BrowserRouter>
      <Header>
        <Routes>
          
          <Route path='/dictionary' element={<Dictionary />}></Route>
          <Route path='/dictionary/:search' element={<Definition />}></Route>
          <Route path='/menshirts' element={<MenShirts />}></Route>
          <Route path='/menshirts/:id'element={<MenShirt/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/404' element={<NotFound />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </Header>
      </BrowserRouter>
      
      
    

   )
}

export default App;
