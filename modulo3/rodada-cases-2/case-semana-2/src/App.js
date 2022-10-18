import './App.css';
import React from "react";
import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Outlet/>
      <Router/>
      </BrowserRouter>  
    </div>
  );
}

export default App;


