import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll',
    height: '600px',
    width: '600px',
  }
};

class Amenities extends React.Component {
  constructor(props) {
    super(props);

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
      <div className="amenities">
        <div><span id="showamenities"onClick={this.openModal}>Show all amenities</span></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <a className="btn-floating btn-small waves-effect waves-light white" onClick={this.closeModal}><i className="material-icons cyan-text text-darken-4">clear</i></a>
          <div id="basic">
            Basic
            {this.props.homeData.basic.map((amenity, index) => {
              return <div key={index}>{amenity}</div>
            })}
          </div>
          <div id="facilities">
            Facilities
            {this.props.homeData.facilities.map((amenity, index) => {
              return <div key={index}>{amenity}</div>
            })}
          </div>
          <div>
            Dining
            <div>
              {this.props.homeData.dining}
            </div>
          </div>
          <div>
            Guest access
            <div>
              {this.props.homeData.guestAccess}
            </div>
          </div>
          <div>
            Bed & bath
            {this.props.homeData.bedBath.map((amenity, index) => {
              return <div key={index}>{amenity}</div>
            })}
          </div>
          <div>
            Safety
            {this.props.homeData.safety.map((amenity, index) => {
              return <div key={index}>{amenity}</div>
            })}
          </div>
          <div>
            Not included
            {this.props.homeData.notIncluded.map((amenity, index) => {
              return <div key={index}>{amenity}</div>
            })}
          </div>        
        </Modal>
      </div>
    );
  }
}

export default Amenities;

