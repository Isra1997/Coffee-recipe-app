import React from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './Cards/RecipeCard';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/hot' element={<RecipeCard temperature={"hot"}/>} />
        <Route path='/cold' element={<RecipeCard temperature={"cold"}/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


