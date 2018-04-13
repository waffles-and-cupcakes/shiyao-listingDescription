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

    var summaryArr = this.props.homeData.summary.split('     ');
    var spaceArr = this.props.homeData.space.split('     ');
    var guestArr = this.props.homeData.guestAccess.split('     ');
    var interactionArr = this.props.homeData.interactionWithGuests.split('     ');
    var otherNotesArr = this.props.homeData.otherNotes.split('     ');

    return (
      <div>
        <div><span onClick={this.openModal}>Read more about this home</span></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <button onClick={this.closeModal}>close</button>
          <div className="summary">Summary 
            <div>
              {summaryArr.map((para) => {
                return <div>{para}</div>;
              })}
            </div>
          </div>
          <div className="space">Space
            <div>
              {spaceArr.map((para) => {
                return <div>{para}</div>;
              })}
            </div> 
          </div>
          <div className="guestAccess">Guest access
            <div>
              {guestArr.map((para) => {
                return <div>{para}</div>;
              })}
            </div>
          </div>
          <div className="interaction">Interaction with guests
            <div>
              {interactionArr.map((para) => {
                return <div>{para}</div>;
              })}
            </div>
          </div>
          <div className="othernotes">
            Other notes
            <div>
              {otherNotesArr.map((para) => {
                return <div>{para}</div>;
              })}
            </div>
          </div>
          
        </Modal>
      </div>
    );
  }
}

export default AboutHome;

