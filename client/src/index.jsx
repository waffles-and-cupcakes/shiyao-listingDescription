import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/rooms/details')
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        Hello World Again Again
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('listingDetails'));

