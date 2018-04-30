import React from 'react';
import axios from 'axios';
import Columns from 'react-columns';
import AboutHome from './aboutHome.jsx';
import Amenities from './amenities.jsx';
import HouseRules from './houseRules.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listingData: [],
      isLoaded: false,
    };
    this.renderAmenities = this.renderAmenities.bind(this);
    this.renderSleepingArrangementsIcons = this.renderSleepingArrangementsIcons.bind(this);
  }

  componentDidMount() {
    var id = window.location.pathname.split('/')[2];
    axios.get(`http://18.216.54.31/rooms/details/${id}`)
    .then((res) => {
      this.setState({
        listingData: res.data,
        isLoaded: true,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderAmenities() {
    const data = this.state.listingData;

    const iconAmenityMap = new Map();
    iconAmenityMap.set('Wifi', 'network_wifi');
    iconAmenityMap.set('Laptop friendly workspace', 'laptop_mac');
    iconAmenityMap.set('Free parking on premises', 'local_parking');
    iconAmenityMap.set('Kitchen', 'local_dining');
    iconAmenityMap.set('Hot tub', 'hot_tub');
    iconAmenityMap.set('TV', 'live_tv');

    const amenityWithIcons = [];
    data.amenities.forEach((type) => {
      type.amenityValue.forEach((amenity) => {
        if (iconAmenityMap.has(amenity.name)) {
          amenityWithIcons.push(amenity.name);
          if (amenityWithIcons.length === 6) {
            return;
          }
        }
      });
    });

    return (
      <Columns columns={2}>
        {amenityWithIcons.map((amenity, index) => {
          return <div key={index}><i key={index} className="material-icons amenity-icon">{iconAmenityMap.get(amenity)}</i>{amenity}</div>;
        })}
      </Columns>
    );
  }

  renderSleepingArrangementsIcons(str) {

    const sleepingArrangementsIconMap = new Map();
    sleepingArrangementsIconMap.set('queen bed', 'airline_seat_individual_suite');
    sleepingArrangementsIconMap.set('king bed', 'hotel');
    sleepingArrangementsIconMap.set('single bed', 'airline_seat_flat');
    sleepingArrangementsIconMap.set('sofa bed', 'airline_seat_recline_extra');

    var bedArr = str.split(', ');
    var roomMap = bedArr.map((bed) => {
      if (bed[bed.length - 1] === 's') {
        return {number: parseInt(bed.slice(0, 1)), value: bed.slice(2, bed.length - 1)};
      }
      return {number: parseInt(bed.slice(0, 1)), value: bed.slice(2)};     
    });

    var iconArr = [];
    for (var i = 0; i < roomMap.length; i++) {
      for (var j = 0; j < roomMap[i].number; j++) {
        var ele = <i key={iconArr.indexOf(ele)} className="material-icons bed-icon">{sleepingArrangementsIconMap.get(roomMap[i].value)}</i>;
        iconArr.push(ele);
      }
    }
    return (
      <div>
        {iconArr}
      </div>
    );
  }

  render() {
    const data = this.state.listingData;
    if (!this.state.isLoaded) {
      return (<div>Loading</div>);
    }
    return (
      <div className="container">
        <div className="section">
          <div id="listingtype">
            {data.type.toUpperCase()}
          </div>
          <div id="host">
            <img id="host-pic" src={data.hostPic} alt="Avatar" />
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
            <i className="material-icons icons">people</i><span className="roomstats">{data.maxNumOfGuests} {data.maxNumOfGuests > 1 ? 'guests' : 'guest'}</span>
            <i className="material-icons icons">hotel</i><span className="roomstats">{data.numOfBeds} {data.numOfBeds > 1 ? 'beds' : 'bed'}</span>
            <i className="material-icons icons">hot_tub</i><span className="roomstats">{data.numOfBaths} {data.numOfBaths > 1 ? 'baths' : 'bath'}</span>
          </div>
          <div id="summary">{data.aboutHome.summary}</div>
          <div id="readmore" />
          <AboutHome homeData={data} />
          <div className="link">Contact host</div>
        </div>
        <div className="section">
          <div className="subtitles">Amenities</div>
          <div>{this.renderAmenities()}</div>
          <Amenities homeData={data} />
        </div>
        <div className="section">
          <div className="subtitles">Sleeping arrangements</div>
          <div className="row">
            {data.sleepingArrangements.map((bedroom, index) => {
              return (
                <div className="col s3" key={index} id="sleepingArrangement">
                  <div>{this.renderSleepingArrangementsIcons(bedroom.value)}</div>
                  <div id="room">{bedroom.name}</div>
                  {bedroom.value}
                </div>
              );
            })}  
          </div>
        </div>
        <div className="section">
          <div className="subtitles">House rules</div>
          <div>{data.houseRules.basicRules.map((rule, index) => {
            return <div key={index}>{rule}</div>;
          })}
          </div>
          <HouseRules houseRules={data} />
        </div>
        <div className="section">
          <div className="subtitles">Cancellations</div>
          <div>{data.cancellationPolicy.policyType}</div><br />
          <div>{data.cancellationPolicy.description}</div>
          <div className="link"><br /><a className="link" target="_blank" href={data.cancellationPolicy.link}>Get Details</a></div>
        </div>
      </div>
    );
  }
}

export default App;
