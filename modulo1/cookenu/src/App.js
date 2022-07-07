import React from 'react';
import HeaderPage from './components/Header/HeaderPage';
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
