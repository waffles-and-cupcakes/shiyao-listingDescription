import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import AboutHome from './aboutHome.jsx';
import Amenities from './amenities.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listingData: [],
      aboutHome: [],
      amenities: [],
      isLoaded: false
    };
  }

  componentDidMount(id) {
    id = 1;
    axios.get(`/rooms/${id}/details`)
    .then((res) => {
      this.setState({
        listingData: res.data,
        aboutHome: res.data.aboutHome,
        amenities: res.data.amenities,
        isLoaded: true
      });
      console.log(this.state.listingData);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {

    const { isLoaded, listingData } = this.state;
    const data = listingData;

    if (!isLoaded) {
      return (<div>Loading</div>);
    } else {
      return (
        <div className="container">
          <div className="listingtitle">
            <div id="listingtype">
              {data.type.toUpperCase()}
            </div>
            <div id="host">
              <img src={data.hostPic} alt="Avatar"></img>
              <div>
                {data.hostName}
            </div>
            </div>
            <div id="title">
              {data.name}
            </div>
            <div id="location">
              {data.location}
            </div>
            <span id="numguests">{data.maxNumOfGuests}</span><span id="numbeds">{data.numOfBeds}</span><span id="numbaths">{data.numOfBaths}</span>
          </div>
          <div id="summary">{data.aboutHome.summary}</div>
            <div id="readmore"></div>
            <AboutHome homeData={this.state.aboutHome} />
            <div id="contact">Contact host</div>
          <div className="amentities">
            <div>{data.amenities.basic[0]}</div>
            <div>{data.amenities.basic[1]}</div>
            <div>{data.amenities.basic[2]}</div>
            <div id="amenities"></div>
            <Amenities homeData={this.state.amenities}/>
          </div>
          <div id="sleeping">
            {data.sleepingArrangements.bedroom1}
            {data.sleepingArrangements.bedroom2}
            {data.sleepingArrangements.bedroom3}
            {data.sleepingArrangements.bedroom4}
            {data.sleepingArrangements.bedroom5}
            {data.sleepingArrangements.CommonSpaces}
          </div>
          <div id="houserules">
            <div>{data.houseRules.basicRules[0]}</div>
            <div>{data.houseRules.basicRules[1]}</div>
            <div>{data.houseRules.basicRules[2]}</div>
            <div>{data.houseRules.basicRules[3]}</div>
            <div>{data.houseRules.basicRules[4]}</div>
          </div>
          <div>Read all rules</div>
          <div id="cancel">{data.cancellationPolicy}</div>
          <div>Get Details</div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('listingDetails'));

