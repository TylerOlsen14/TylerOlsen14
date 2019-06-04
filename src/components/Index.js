import React, { Component } from "react";
import { Modal, Button, ModalBody, ModalFooter } from "reactstrap";
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom'
import salty from "../assets/SaltyRoguePhoneCalls.png";
import OneApp from "../assets/Screen Shot 2019-06-04 at 10.54.28 AM.png";
import tutor from "../assets/TylersTutors.png";
import "./index.css";
import PdfModal from "./PdfModal";

export class Index extends Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   modal: false,
    //   numPages: null,
    //   pageNumber: 1,
    // };
    // this.toggle = this.toggle.bind(this);
    // this.routeChange = this.routeChange.bind(this);
  // }

  // routeChange() {
  //   let path = `newPath`;
  //   this.props.history.push('/resume');
  // }

  // state= {
  //   numPages: null,
  // }
  
  // onDocumentLoadSuccess = (document) => {
  //   const { numPages } = document;
  //   this.setState({
  //     numPages,
  //   });
  // };

  // toggle() {
  //   this.setState(prevState => ({
  //     modal: !prevState.modal
  //   }));
  // }

  // nextPath(path) {
  //   this.props.history.push(path);
  // }

  render() {
    // const { pageNumber, numPages } = this.state;
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">Tyler Olsen</span>
          </div>
        </div>

        <a href="https://salty-rogue-app-one-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">  
          <section className="section section-light">
            <h2>Salty Rogue Real Estate</h2>
            <p>
              There are two apps here. One is a simple database for phone calls. It records the name, the phone number, and any other notes that might need to be kept. The other is database of potential business. Utah county released a list of those properties that might be having trouble with their property taxes. We wrote a JavaScript app that will use the numbers from that list to find a name and mailing address for the owner. We are planning on using that information to do business with the owner. 
            </p>
          </section>
        </a>  
        <a href="https://salty-rogue-app-one-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="pimg2 trans">
            <div className="ptextScreenshot">
              <div>
                {/* <span className="border">Image two text</span> */}
                <img src={OneApp} alt="MERN" className="appScreenshot" />
              </div>
            </div>
          </div>
        </a>

        <a href="https://tutordatabase-4958f.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
          <section className="section section-dark">
            <h2>Tyler's Tutors</h2>
            <p>
              Another simple app, this is meant to track and re-call data for an imaginary tutoring service. We can track the teachers and the students in separate locations and we can update information as it changes. This uses Vue as a framework and Firebase/Firestore as a database.
            </p>
          </section>
        </a>

        <a href="https://tutordatabase-4958f.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
          <div className="pimg3 trans">
            <div className="ptextScreenshot">
              <div>
                <img
                  src={tutor}
                  alt="App written in Vue using Firebase/Firestore"
                  className="appScreenshot"
                />
              </div>
              {/* <span className="border">
                Image three text
              </span> */}
            </div>
          </div>
          </a>

        <section className="section section-dark">
          <div className="p-bottom">
            <h2>Resume</h2>
            <p>I'm looking for work as a web developer. I moving into the tech field from education. I worked as a writing tutor at the end of my undergraduate studies, held a teaching assistant position during grad school, and most recently worked, briefly, as an 8th grade English teacher.</p>
            <p>Though I may be new in the web development field, I learn very quickly. I am a dedicated worker who puts in the time needed to acheive mastery.</p>
          </div>
        </section>

        <div className="pimg4 trans">
          <div className="ptext">
              {/* <PdfModal /> */}
              <a href="https://keen-bhaskara-274627.netlify.com/" target="_blank" rel="noopener noreferrer">
                <Button
                  color="primary"
                  size="lg"
                  // onClick={this.routeChange}
                >
                    Resume
                </Button>
                </a>
              {/* <Button color="danger" onClick={this.toggle}>Resume</Button>
              <Modal isOpen={this.state.modal} toggle={this.toogle}>
                <ModalBody>
                  <div>
                  <a href="https://keen-bhaskara-274627.netlify.com/" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                    <img src="../assets/T.OlsenMay16.pdf" alt="Resume"/>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>X</Button>
                </ModalFooter>
              </Modal> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
