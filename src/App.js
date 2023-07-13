import React from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './Table';
import  Form from './Form';

const App = () => {
  return (
    <div>
          <BrowserRouter>
        <Routes>
           <Route path = '/' element = {<Form />}/>
           <Route path = '/table' element= {<Table/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App