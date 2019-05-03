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
        <p>Contact: Tyler.Olsen1@gmail.com | (801) 661-9191</p> 
      </div>
      <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
    </div>
  );
}

export default App;
