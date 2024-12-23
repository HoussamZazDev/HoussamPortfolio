import { Routes, Route } from 'react-router-dom';


import TodoApp from './apps/TodoApp';
import ProfileApplication from './apps/ProfileApplication';
import CountriesApi from './apps/CountriesApi';
import Calculator from './apps/CalculatorApp';

import Portfolio from "./AppComponents/Portfolio";

import './App.css';




export default function App(){
  return(
    <div>
      
    <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/todoapp' element={<TodoApp/>}/>
        <Route path='/profileapplication' element={<ProfileApplication/>}/>
        <Route path='/countriesapi' element={<CountriesApi/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        
    </Routes>
    
    
    
    </div>
  )
}