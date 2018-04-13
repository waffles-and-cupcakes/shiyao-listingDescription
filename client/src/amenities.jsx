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
        <button onClick={this.closeModal}>close</button>
          <div id="basic">
            Basic
            {this.props.homeData.basic.map((amenity) => {
              return <div>{amenity}</div>
            })}
          </div>
          <div id="facilities">
            Facilities
            {this.props.homeData.facilities.map((amenity) => {
              return <div>{amenity}</div>
            })}
          </div>
          <div>
            Dining
            {this.props.homeData.dining}
          </div>
          <div>
            Guest access
            {this.props.homeData.guestAccess}
          </div>
          <div>
            Bed & bath
            {this.props.homeData.bedBath.map((amenity) => {
              return <div>{amenity}</div>
            })}
          </div>
          <div>
            Safety
            {this.props.homeData.safety.map((amenity) => {
              return <div>{amenity}</div>
            })}
          </div>
          <div>
            Not included
            {this.props.homeData.notIncluded.map((amenity) => {
              return <div>{amenity}</div>
            })}
          </div>
          
        </Modal>
      </div>
    );
  }
}

export default Amenities;

