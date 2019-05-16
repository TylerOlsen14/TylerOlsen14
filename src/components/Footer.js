import React, { Component } from 'react'
import "./index.css"
import Finn from '../assets/Finn.jpg'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-auto py-3">
          <div className="CaptainFinn">
            <img src={Finn} alt="Captain Finn Web Designs" className="Finn"/>
            <h5>Captain Finn Web Designs</h5>
          </div>
          <div className="contact">
            <p>
              Contact:<br />
              Tyler.Olsen1@gmail.com<br />
              (801) 661-9191
            </p> 
          </div>
      </footer>

      </div>
    )
  }
}

export default Footer
