import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RequireAuth from './components/Hoc/RequireAuth';
import Home from './components/Home/Home';
import Phones from './components/Phones/Phones';
import Desktops from './components/Desktops/Desktops';
import LoginPage from './components/LoginPage/LoginPage';
import Basket from './components/Basket/Basket';

function App () {
  
  return (
    <div className = 'App'>
      <Header/>
      <Navbar/>
        <div className = 'container'>
          <Routes>
            <Route path = '/' element = {<Home/>} />
              <Route path = '/phones' element = {
                <RequireAuth>
                  <Phones/>
                </RequireAuth>
              } />
              <Route path = '/desktop' element = {
                <RequireAuth>
                  <Desktops/>
                </RequireAuth>
              } />
              <Route path = '/basket' element = {
                <RequireAuth>
                  <Basket/>
                </RequireAuth>
              } />
            <Route path = '/login' element = {<LoginPage/>} />
          </Routes>  
        </div>
    </div>
  )
}

export default App;
