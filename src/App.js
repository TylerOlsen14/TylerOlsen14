import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import bootstrap from 'bootstrap'
import reactstrap from 'reactstrap'
import Index from './components/Index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Index />

      <div className="footer">
        <h5 align="center">Captain Finn Web Designs</h5>
        <p>Contact: </p> 
      </div>
    </div>
  );
}

export default App;
