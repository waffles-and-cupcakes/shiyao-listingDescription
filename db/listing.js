const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const listingSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  location: String,
  address: String,
  type: String,
  maxNumOfGuests: Number,
  numOfBeds: Number,
  numOfBaths: Number,
  hostName: String,
  hostPic: String,
  amenities: {
    basic: [{
      type: String,
    }],
    facilities:[{
      type: String,
    }],
    dining: String,
    guestAccess: String,
    bedBath:[{
      type: String,
    }],
    safety:[{
      type: String,
    }],
    notIncluded:[{
      type: String,
    }]
  },
  sleepingArrangements: {
    bedroom1: String,
    bedroom2: String,
    bedroom3: String,
    bedroom4: String,
    bedroom5: String,
    CommonSpaces: String,
  },
  accessibility: [{
    type: String,
  }],
  houseRules: {
    basicRules: [{
      type: String,
    }],
    textBody: String,
  },
  cancellationPolicy: String,
  aboutHome: {
    summary: String,
    space: String,
    guestAccess: String,
    interactionWithGuests: String,
    otherNotes: String,
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;