import React, { Component } from 'react'
import { 
  Modal, 
  Button, 
  ModalBody,
  ModalFooter
 } from 'reactstrap'
 import resume from '../assets/T.OlsenMay2.pdf'
import "./index.css"

export class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

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
            <span className="border">
              Tyler Olsen
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Section 1</h2>
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
        </section>

        <div className="pimg2 trans">
          <div className="ptext">
            <span className="border">
              Image two text
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section 2</h2>
          <p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me? " he thought. It wasn't a dream.</p>
        </section>

        <div className="pimg3 trans">
          <div className="ptext">
            <span className="border">
              Image three text
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section 3</h2>
          <p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls.<br/>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
        </section>

        <div className="pimg4 trans">
          <div className="ptext">
            <span className="border">
              <Button onClick={this.toggle}>
                Resume                
              </Button>
              <Modal id="myModal" class="modal" toggle={this.toogle}>
                <ModalBody>
                <img src={resume} alt="?"/>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={this.toggle}>X</Button>
                </ModalFooter>
              </Modal>
            </span>
          </div>
        </div>


      </div>
    )
  }
}

export default Index
