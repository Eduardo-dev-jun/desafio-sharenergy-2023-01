import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CardLogin from './components/cardLogin/index'
import Users from './pages/users'
import RandDog from './pages/randomDog'
import HttpCat from './pages/htppCat'
import Adm from './pages/adm'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardLogin/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/randomDog' element={<RandDog/>}/>
        <Route path='/httpCat' element={<HttpCat/>}/>
        <Route path='/adm' element={<Adm/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
