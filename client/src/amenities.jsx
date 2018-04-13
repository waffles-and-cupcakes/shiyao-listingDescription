import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Amenities extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    //this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('#readmore');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal}>Show all amenities</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div id="basic">
            Basic
          </div>
          <div id="facilities">
            Facilities
          </div>
          <div>
            Dining
          </div>
          <div>
            Guest access
          </div>
          <div>
            Bed & bath
          </div>
          <div>
            Safety
          </div>
          <div>
            Not included
          </div>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default Amenities;

