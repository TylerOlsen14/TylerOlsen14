import React, { Component } from "react";
import { Document, Page } from 'react-pdf'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class PdfModal extends Component {
  state = {
    modal: false,
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  // goToPrevPage = () =>
  //   this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  // goToNextPage = () =>
  //   this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Resume
        </Button>
        <Modal 
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <div>
            <Document
              file="./TOlsenMay16.pdf"
              // file={resume}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page: {pageNumber} of {numPages}
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PdfModal;
