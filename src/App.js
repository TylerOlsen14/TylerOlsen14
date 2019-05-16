import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import bootstrap from 'bootstrap'
import reactstrap from 'reactstrap'
import Index from './components/Index'
import PdfView from './components/PdfView'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './components/Footer'

const resume = () => {
  return (
    <PdfView />
  )
}

const index =() => {
  return (
    <Index/>
  )
}

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Route path="/resume" component={resume} />
      <Route path="/" exact component={index} />
      <Footer />
      <script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
    </BrowserRouter>
  );
}

export default App;
