import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Wizard from './Components/Wizard/Wizard';
import House from './Components/House/House';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      {routes}
    </div>
    </HashRouter>
  );
}

export default App;
