import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import AboutHome from './aboutHome.jsx';
import Amenities from './amenities.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HouseRules from './houseRules.jsx';

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
    var elem = document.querySelector('.collapsible');
    //var instance = M.Collapsible.init(elem);

    if (!isLoaded) {
      return (<div>Loading</div>);
    } else {
      return (
        <div className="container">
          <div className="section">
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
            <div className="stats">
              <i className="material-icons icons">people</i><span className="roomstats">{data.maxNumOfGuests} guests</span>
              <i className="material-icons icons">hotel</i><span className="roomstats">{data.numOfBeds} beds</span>
              <i className="material-icons icons">wc</i><span className="roomstats">{data.numOfBaths} baths</span>
            </div>
          <div id="summary">{data.aboutHome.summary}</div>
            <div id="readmore"></div>
            <AboutHome homeData={this.state.aboutHome} />
            <div className="link">Contact host</div>
          </div>
          <div className="section">
            <div className="subtitles">Amenities</div>
            <div>{data.amenities.basic[0]}</div>
            <div>{data.amenities.basic[1]}</div>
            <div>{data.amenities.basic[2]}</div>
            <div id="amenities"></div>
            <Amenities homeData={this.state.amenities}/>
          </div>
          <div className="section">
            <div className="subtitles">Sleeping arrangements</div>
            <div className="row">            
                {data.sleepingArrangements.map((bedroom, index) => {
                  return (
                    <div className="col s3" key={index} id="sleepingArrangement">
                      <div id="room">{bedroom.name}</div>
                      {bedroom.value}
                    </div>
                  )
                })}  
            </div>
          </div>
          <div className="section">
            <div className="subtitles">House rules</div>
            <div>{data.houseRules.basicRules[0]}</div>
            <div>{data.houseRules.basicRules[1]}</div>
            <div>{data.houseRules.basicRules[2]}</div>
            <div>{data.houseRules.basicRules[3]}</div>
            <div>{data.houseRules.basicRules[4]}</div>
            <HouseRules houseRules={this.state.listingData}/>
          </div>
          <div className="subtitles">Cancellations</div>
          <div id="cancel">{data.cancellationPolicy}</div>
          <div className="link">Get Details</div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('listingDetails'));

