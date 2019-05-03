import React, { Component } from "react";
import { Modal, Button, ModalBody, ModalFooter } from "reactstrap";
// import resume from "../assets/T.OlsenMay2.pdf";
import resume from "./Tyler.js";
import salty from "../assets/SaltyRoguePhoneCalls.png";
import tutor from "../assets/TylersTutors.png";
import "./index.css";

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  state= {
    numPages: null,
  }
  
  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      numPages,
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">Tyler Olsen</span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Salty Rogue Real Estate</h2>
          <p>
            A simple app meant to be used to make record of phone calls. This was made for a local real estate firm who makes a lot of phone calls and speaks with a lot of people. This is a simple way for them to keep track of who they talk to and what the conversation was about. 
          </p>
        </section>

        <div className="pimg2 trans">
          <div className="ptextScreenshot">
            <div>
              {/* <span className="border">Image two text</span> */}
              <img src={salty} alt="MERN" className="appScreenshot" />
            </div>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Tyler's Tutors</h2>
          <p>
            Another simple app, this is meant ot track and re-call data for an imaginary tutoring service. We can track the teachers and the students in separate locations and we can update information as it changes. This uses Vue as a framework and Firebase/Firestore as a database.
          </p>
        </section>

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

        <section className="section section-dark">
          <h2>Resume</h2>
          <p>I'm looking for work as a web developer. I moving into the tech field from education. I worked as a writing tutor at the end of my undergraduate studies, held a teaching assistant position during grad school, and most recently worked, briefly, as an 8th grade English teacher.</p>
          <p>Though I may be new a young in the web development field, I learn very quickly. I am a dedicated worker who puts in the work needed to acheive mastery.</p>
        </section>

        <div className="pimg4 trans">
          <div className="ptext">
            <span className="border">
              <Button color="danger" onClick={this.toggle}>Resume</Button>
              <Modal isOpen={this.state.modal} toggle={this.toogle}>
                <ModalBody>
                  {/* <img src={resume} alt="?" /> */}
                  
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>X</Button>
                </ModalFooter>
              </Modal>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
