import './index.css';
import Employee from './components/Employee';
import EditEmployee from './components/EditEmployee';
import AddEmployee from './components/AddEmployee';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
function App() {
   return (
      <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />}></Route>
          <Route path='/dictionary' element={<Dictionary />}></Route>
          <Route path='/dictionary/:search' element={<Definition />}></Route>
          <Route path='/customers' element={<Customers />}></Route>
          <Route path='/404' element={<NotFound />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </Header>
      </BrowserRouter>
      
      
    

   )
}

export default App;
