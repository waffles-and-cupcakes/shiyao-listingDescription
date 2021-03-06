import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Amenities from '../src/amenities.jsx';
import HouseRules from '../src/houseRules.jsx';
import AboutHome from '../src/aboutHome.jsx';
import App from '../src/app.jsx';

Enzyme.configure({adapter: new Adapter()});

const homeData = {
  "_id": 1,
  "name": "The Joshua Tree House",
  "location": "Joshua Tree, U.S",
  "address": "888 Joshua Rd, Joshua Tree, CA 95000, USA",
  "type": "Entire House",
  "maxNumOfGuests": 6,
  "numOfBeds": 2,
  "numOfBaths": 2,
  "hostName": "Sara",
  "hostPic": "http://res.cloudinary.com/dhhl9wiyn/image/upload/v1523492140/611750c5-9599-4d2c-b40f-cba5c8638644.jpg",
  "amenities": [
    {
      "amenityType": "Basic",
      "amenityValue": [
        {
          "name": "Wifi",
          "value": "Continuous access in the listing"
        },
        {
          "name": "Laptop friendly workspace",
          "value": "A table or desk with space for a laptop and a chair that’s comfortable to work in"
        },
        {
          "name": "Essentials",
          "value": "Towels, bed sheets, soap, and toilet paper"
        },
        {
          "name": "TV",
          "value": ""
        },
        {
          "name": "Iron",
          "value": ""
        },
        {
          "name": "Heating",
          "value": "Central heating or a heater in the listing"
        },
        {
          "name": "Air conditioning",
          "value": ""
        },
        {
          "name": "Hot water",
          "value": ""
        }
      ]
    },
    {
      "amenityType": "Facilities",
      "amenityValue": [
        {
          "name": "Free parking on premises",
          "value": ""
        },
        {
          "name": "Hot tub",
          "value": ""
        }
      ]
    },
    {
      "amenityType": "Dining",
      "amenityValue": [
        {
          "name": "Kitchen",
          "value": ""
        }
      ]
    },
    {
      "amenityType": "Guest access",
      "amenityValue": [
        {
          "name": "Lockbox",
          "value": ""
        }
      ]
    },
    {
      "amenityType": "Bed & bath",
      "amenityValue": [
        {
          "name": "Hangers",
          "value": ""
        },
        {
          "name": "Hair dryer",
          "value": ""
        },
        {
          "name": "Shampoo",
          "value": ""
        }
      ]
    },
    {
      "amenityType": "Safety",
      "amenityValue": [
        {
          "name": "Fire extinguisher",
          "value": ""
        },
        {
          "name": "Carbon monoxide detector",
          "value": ""
        },
        {
          "name": "Smoke detector",
          "value": ""
        },
        {
          "name": "First aid kit",
          "value": ""
        }
      ]
    }
  ],
  "notIncludedAmenities": [
    "Washer",
    "Private entrance"
  ],
  "sleepingArrangements": [
    {
      "name": "Bedroom1",
      "value": "2 queen beds, 1 single bed"
    },
    {
      "name": "Bedroom2",
      "value": "1 king bed"
    },
    {
      "name": "Common spaces",
      "value": "2 queen beds, 1 single bed"
    }
  ],
  "accessibility": "",
  "houseRules": {
    "basicRules": [
      "No smoking",
      "Not suitable for pets",
      "No parties or events",
      "Check-in is anytime after 3PM",
      "Check out by 11AM",
      "Self check-in with lockbox"
    ],
    "textBody": "Check-in is at 3pm. (No early check-ins please unless otherwise approved)\n \rSorry no pets, indoor smoking, photoshoots without prior approval, large parties/events, shooting guns, outdoor fires, fireworks or extra guests (past six people). Please also respect our neighbors and refrain from incredibly loud noises. If you're interested in doing a photoshoot at the house, please contact us for pricing.\n \rYou may alter your dates once up to 30 days prior to your stay. With less than 30 days advance notice, our cancellation policy will apply. Unfortunately, we make no exceptions to this rule.\n \rWe have a security camera overlooking the driveway on the corner of the garage. Joshua Tree is very safe, but we have this for added safety.\n \rPlease also treat the Joshua Trees with respect. Do not climb them or hang anything off of them since they are very old and fragile (in fact they are actually very large plants - not trees at all!)\n \rWe have the house professionally cleaned, but do please make sure your dishes are cleaned and that everything is in the general place that you found it on arrival. This helps keep our cleaning fee down. If dishes are left undone, an additional cleaning fee will be taken out of your security deposit.\n \rWhen checking out, please make sure all doors are shut and locked, then put the key in the lockbox. If you forget to leave the key, we'll take a fee out of your security deposit.\n \rBesides that, enjoy the house! We've put a lot of time and energy into making this a beautiful and relaxing place to stay. Please be respectful of all of the furniture and accessories that we've lovingly collected. Everything in the house is very special to us.     Thanks so much and enjoy your stay!!"
  },
  "cancellationPolicy": {
    "policyType": "Strict",
    "description": "Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.",
    "link": "https://www.airbnb.com/home/cancellation_policies?guest_fee_policy=grace_period_48_hours#strict"
  },
  "aboutHome": {
    "summary": "The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA.\n \rThis is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets, or by relaxing in the hot tub surrounded by over 100 Joshua Trees and a starry night sky.",
    "space": "Instagram: @thejoshuatreehouse (all photos tagged with #thejoshuatreehouse)\n \rThis house is very close to downtown Joshua Tree with many shops and restaurants about a 10 minute walk from the house. This also means that some sound from the highway can be heard.\n \rIf you're looking for a completely silent desert experience, we would recommend our other property: The Joshua Tree Casita (https://www.airbnb.com/rooms/10614974). Please also check that listing if you can't find the dates you're looking for.\n \rWelcome to the Joshua Tree House! This hacienda was built in 1949. With over 100 Joshua Trees on the property, the views from the house are magical. If you're up for it, sunrise on the front porch is incredible. We estimate that some of the larger Joshua Trees on the property are as old as our country!     *Mattresses and Bedding by Casper*\n \rThere are two bedrooms and two bathrooms in the house, and works well for a group of friends, two couples, or small families. We can also set up an extra memory foam mattress in the hammock room (has privacy with pocket sliding doors) to accommodate groups of six.",
    "guestAccess": "While you're staying here, the house will be your private oasis. Feel free to explore the yard (we are on 1.25 acres). Also make sure to enjoy the Jacuzzi and incredible views from the front porch during your stay!",
    "interactionWithGuests": "While we will not be at the house during your stay, feel free to contact us with any questions! We also have a lot of local recommendations to share. We send our guests an illustrated pdf before their stay with some of our favorite local spots!\n \rFor check-in, we'll give you a code to the lockbox to get the keys and you can arrive anytime after 3pm and check yourself in. Please put the keys back before checking-out at 11am.",
    "otherNotes": "Our driveway wraps around the back of house, so feel free to circle around the driveway rather than backing out.\n \rThis house has old plumbing and has a septic system. PLEASE do not flush anything other than toilet paper.\n \rThe second bedroom is detached, and is about a 10ft walk outside from the main house.\n \rTransient Occupancy Tax - A 7% TOT tax required by San Bernardino County is included in the nightly rate.\n \rFor our area, Airbnb does not yet break this down as an extra line item, but rather is included in the base price."
  }
}

describe('<AboutHome />', () => {
  it('renders one <AboutHome /> components', () => {
    const wrapper = shallow(<AboutHome homeData={homeData}/>);
    expect(wrapper.length).to.equal(1);
  });
  it('allows us to set props', () => {
    const wrapper = mount(<AboutHome homeData={homeData} bar="baz" />);
    wrapper.update();
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
  it('renders the title', () => {
    const wrapper = shallow(<AboutHome homeData={homeData} title="Read more about this home" />);
    expect(wrapper.text()).to.contain('Read more about this home');
  });
});