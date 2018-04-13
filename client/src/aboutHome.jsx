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

class AboutHome extends React.Component {
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
        <div onClick={this.openModal}>Read more about this home</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="summary">Summary 
            <div>{this.props.homeData.summary}
            </div>
          </div>
          <div className="space">Space
            <div>
              {this.props.homeData.space}
            </div> 
          </div>
          <div className="guestAccess">Guest access
            <div>
              {this.props.homeData.guestAccess}
            </div>
          </div>
          <div className="interaction">Interaction with guests
            <div>
              {this.props.homeData.interactionWithGuests}
            </div>
          </div>
          <div className="othernotes">
            Other notes
            <div>
              {this.props.homeData.otherNotes}
            </div>
          </div>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default AboutHome;

