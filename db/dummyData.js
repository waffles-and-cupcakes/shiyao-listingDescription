const db = require('./index.js');
const mongoose = require('mongoose');
const Listing = require('./listing.js');
mongoose.Promise = global.Promise;

var data = [{
  _id: 1,
  name: 'The Joshua Tree House',
  location: 'Joshua Tree, U.S',
  address: '888 Joshua Rd, Joshua Tree, CA 95000, USA',
  type: 'Entire House',
  maxNumOfGuests: 6,
  numOfBeds: 2,
  numOfBaths: 2,
  hostName: 'Sara',
  hostPic: 'http://res.cloudinary.com/dhhl9wiyn/image/upload/v1523492140/611750c5-9599-4d2c-b40f-cba5c8638644.jpg',
  amenities: {
    basic: ['Wifi', 'Laptop friendly workspace', 'Indoor fireplace', 'TV', 'Iron', 'Essentials', 'Heating', 'Air conditioning', 'Hot water'],
    facilities:['Free parking on premises', 'Hot tub'],
    dining: 'Kitchen',
    guestAccess:'Lockbox',
    bedBath:['Hangers', 'Hair dyer', 'Shampoo'],
    safety:['Fire extinguisher', 'Carbon monoxide detector', 'Smoke detector', 'First aid kit'],
    notIncluded:['Washer','Private entrance'],
  },
    sleepingArrangements: [
    {
      name: 'Bedroom1', 
      value: '2 queen beds, 1 single bed'
    }, 
    {
      name: 'Bedroom2',
      value: '1 king bed',
    },
    {
      name: 'Common spaces',
      value: '2 queen beds, 1 single bed'
    }
  ],
  accessibility: '',
  houseRules: {
    basicRules: ['No smoking', 'Not suitable for pets', 'No parties or events', 'Check-in is anytime after 3PM', 'Check out by 11AM', 'Self check-in with lockbox'],
    textBody: 'Check-in is at 3pm. (No early check-ins please unless otherwise approved)     Sorry no pets, indoor smoking, photoshoots without prior approval, large parties/events, shooting guns, outdoor fires, fireworks or extra guests (past six people). Please also respect our neighbors and refrain from incredibly loud noises. If you\'re interested in doing a photoshoot at the house, please contact us for pricing.     You may alter your dates once up to 30 days prior to your stay. With less than 30 days advance notice, our cancellation policy will apply. Unfortunately, we make no exceptions to this rule.     We have a security camera overlooking the driveway on the corner of the garage. Joshua Tree is very safe, but we have this for added safety.     Please also treat the Joshua Trees with respect. Do not climb them or hang anything off of them since they are very old and fragile (in fact they are actually very large plants - not trees at all!)     We have the house professionally cleaned, but do please make sure your dishes are cleaned and that everything is in the general place that you found it on arrival. This helps keep our cleaning fee down. If dishes are left undone, an additional cleaning fee will be taken out of your security deposit.     When checking out, please make sure all doors are shut and locked, then put the key in the lockbox. If you forget to leave the key, we\'ll take a fee out of your security deposit.     Besides that, enjoy the house! We\'ve put a lot of time and energy into making this a beautiful and relaxing place to stay. Please be respectful of all of the furniture and accessories that we\'ve lovingly collected. Everything in the house is very special to us.     Thanks so much and enjoy your stay!!',
  },
  cancellationPolicy: 'Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.',
  aboutHome: {
    summary: 'The Joshua Tree House is a two bed two bath 1949 hacienda located 10 minutes from the west entrance of Joshua Tree National Park in Joshua Tree, CA.     This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets, or by relaxing in the hot tub surrounded by over 100 Joshua Trees and a starry night sky.',
    space: 'Instagram: @thejoshuatreehouse (all photos tagged with #thejoshuatreehouse)     This house is very close to downtown Joshua Tree with many shops and restaurants about a 10 minute walk from the house. This also means that some sound from the highway can be heard.     If you\'re looking for a completely silent desert experience, we would recommend our other property: The Joshua Tree Casita (https://www.airbnb.com/rooms/10614974). Please also check that listing if you can\'t find the dates you\'re looking for.     Welcome to the Joshua Tree House! This hacienda was built in 1949. With over 100 Joshua Trees on the property, the views from the house are magical. If you\'re up for it, sunrise on the front porch is incredible. We estimate that some of the larger Joshua Trees on the property are as old as our country!     *Mattresses and Bedding by Casper*     There are two bedrooms and two bathrooms in the house, and works well for a group of friends, two couples, or small families. We can also set up an extra memory foam mattress in the hammock room (has privacy with pocket sliding doors) to accommodate groups of six.',
    guestAccess: 'While you\'re staying here, the house will be your private oasis. Feel free to explore the yard (we are on 1.25 acres). Also make sure to enjoy the Jacuzzi and incredible views from the front porch during your stay!',
    interactionWithGuests: 'While we will not be at the house during your stay, feel free to contact us with any questions! We also have a lot of local recommendations to share. We send our guests an illustrated pdf before their stay with some of our favorite local spots!     For check-in, we\'ll give you a code to the lockbox to get the keys and you can arrive anytime after 3pm and check yourself in. Please put the keys back before checking-out at 11am.',
    otherNotes: 'Our driveway wraps around the back of house, so feel free to circle around the driveway rather than backing out.     This house has old plumbing and has a septic system. PLEASE do not flush anything other than toilet paper.      The second bedroom is detached, and is about a 10ft walk outside from the main house.     Transient Occupancy Tax - A 7% TOT tax required by San Bernardino County is included in the nightly rate.     For our area, Airbnb does not yet break this down as an extra line item, but rather is included in the base price.',
  },
}, 
{
  _id: 2,
  name: 'The Pondhouse - A Magical Place',
  location: 'Ashfield, Massachusetts, U.S',
  address: '888 Ash Rd, Ashfield, MA 25000, USA',
  type: 'Entire Cabin',
  maxNumOfGuests: 5,
  numOfBeds: 3,
  numOfBaths: 1,
  hostName: 'Gayle',
  hostPic: 'http://res.cloudinary.com/dhhl9wiyn/image/upload/v1523557652/original.jpg',
  amenities: {
    basic: ['Wifi', 'Essentials', 'Hot water'],
    facilities:['Free parking on premises'],
    dining: '',
    guestAccess:'Host greets you',
    bedBath:['Hair dyer', 'Shampoo'],
    safety: [],
    notIncluded:['Air conditioning','Heating', 'TV', 'Washer', 'Kitchen', 'Private entrance', 'Carbon monoxide detector', 'smoke detector'],
  },
  sleepingArrangements: [
    {
      name: 'Bedroom1', 
      value: '2 queen beds, 1 single bed'
    }, 
    {
      name: 'Common spaces',
      value: '2 queen beds, 1 single bed'
    }
  ],
  accessibility: '',
  houseRules: {
    basicRules: ['No smoking', 'No parties or events', 'Not safe or suitable for children(0-12 years)','Check-in is 2PM - 8PM', 'Check out by 10AM'],
    textBody: "The bathroom Pondhouse guests use is downstairs in Peter's studio building. His studio is upstairs and is off limits. Unless you ask one of us for a tour. If Peter is not busy he will probably be happy to show you. Please be respectful that this is his workspace. Please don't hang out on the stairs or talk loudly in this space - he works at all hours ( he's an artist!:)      No smoking in the pond house or bathroom. If you have a dog you may not leave him/her while you are gone. Take your trash from the pond house up to the studio and put into the recycling and trash that is designated for your use. Please do not leave candles burning when not in the pond house. Please latch the pond house when you leave. A good rule of thumb to get those 5 star guest reviews? Leave the pond house how you found it :)     Check in time is 1PM - 8PM     When submitting an inquiry, please tell us a little about yourself and your interest in the Pondhouse. Also let us know that you have read the full description and understand the house rules and feel comfortable staying in a treehouse.      Please keep in mind that the Pondhouse is meant as a quiet retreat. If you have ANYTHING else in mind, you must let us know ahead of time and get appropriate permission before booking. Photo shoots, events, ceremonies etc. are subject to additional fees.     If you are interested in using the Pondhouse for a photo shoot, you must give us explicit descriptions of your concept before booking as well as your location budget. Please be aware that photoshoots are subject to different rules and rates, and must be approved by us in advance.     Guests will receive on arrival a full list of property details, rules and local recommendations.      If using images from this site, please credit the appropriate photographers, as are noted in the individual image descriptions. Please tag us on Instagram #pondhouse     Thanks and we look forward to seeing you soon!",
  },
  cancellationPolicy: 'Cancel up to 7 days before check in and get a 50% refund (minus service fees). Cancel within 7 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.',
  aboutHome: {
    summary: "Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed. Feel the breeze as you sleep in this magical place unlike any other you will have ever seen. Read and nap, enjoy long walks and explore the nearby towns. You will love the Pondhouse!",
    space: "GLAMPING, aka Glamour Camping     Available mid-April through November 1     Read just a few reviews and you quickly understand that the Pondhouse is truly an EXPERIENCE. It is a transformative, magical retreat. NOTE: the Pondhouse is not for everyone. No electricity. No walls (screened only). You will hear animals in the woods. The bathroom is a two minute. walk. No kitchen. No stove (but there is an outdoor fire pit). You take chances with the weather. We've had guests love a cozy rainy weekend and even book an extra day during 30 degree temperatures. No groups over 5 people and no kids under 12. You are always welcome to write me to explain your situation - if it feels like a good fit I am willing to bend these rules once in a while.     While we do have a pet friendly policy, prior approval and acceptance of our rules and policies is required before a pet may stay with you in The Pondhouse There is also a $25.00 additional pet cleaning charge.     Still interested? Read on. . .     You have use of a private, full bathroom, with shower, located in our studio building a two minute walk from the Pondhouse. There is also an Airbnb guest room in the studio that may be rented as well. It works great to book both the Pondhouse and this guest room - you can leave your stuff in the studio and keep the Pondhouse tranquil and serene! Happy to give discounts to rent both. Just ask.     There is a fire pit a few steps from your door. It’s stocked with paper and chopped wood (or chop your own), so you can make a fire to roast marshmallows, cook a whole meal, or just hang out and enjoy the feeling of camping.     Other amenities, including recycled paper plates and utensils, small fridge, electric teapot, coffee press, coffee and teas are provided for you in the studio.     Dogs are welcome, but MUST get along with other dogs. We love dogs and our dog Charlie is a fantastic host, will provide lots of love and affection, and is always happy to go for a walk with you. It you bring a dog, you may not leave it in the Pondhouse while you are gone.     CAUTION:*No Wi-Fi or cell service in the pond house - come to unplug! (There is wifi and a land line you can use at the studio for emergencies)     *No nearby transit, and we are in the boonies, so you’ll need a car     *Planning this as a surprise? I strongly suggest that you KNOW that your partner will love this. I've seen a few surprises not work very well. Glamping is not for everyone!     *We are on 50 acres and sound carries. This means no loud music or parties. *Please be respectful of the peace, quiet and serenity of our property     *MUST arrive before dark     My husband, Peter Kitchell, and I are artists and have lived here for almost 30 years. Peter has carefully cultivated and nurtured the land, which includes building the Pondhouse with Hemlock trees from our woods. We have three buildings (our home and studios) a two minute walk from the Pondhouse. We are good at respecting our guest’s privacy but are also happy to chat and answer any questions. I've made a great list of places to eat (including dog friendly & vegan!)     ** Having a special anniversary? Give us a budget and we can decorate with extra special things like flowers, treats, or whatever you'd like!     This is truly an amazing place.     ***PLEASE READ ENTIRE LISTING DESCRIPTION AND RULES BEFORE REQUESTING A RESERVATION.*** We want to make sure that your stay meets your expectations... When making a request, please tell us a little about yourselves, your interest in the Pondhouse and indicate that you have read the full listing and house rules... Thank you!",
    guestAccess: "A fire pit just outside the Pondhouse is available for fires and grilling. The bathroom is in the studio building, a two minute walk from the Pondhouse. You have use of a small fridge located across from the bathroom, as well as a cabinet stocked with recycled paper plates and utensils, electric teapot, coffee press, coffee and teas. Most guests planning to cook also bring coolers and other essentials they'd bring on a camping trip. If you are traveling and don't have anything with you, please tell me and we can make sure you have everything you need!     We live and work here and ask that you keep this in mind. The bathroom is downstairs in Peter's studio. Please be respectful of his space and do not wander around. He is happy to give a tour if he has time - just ask!",
    interactionWithGuests: "We welcome you, check in on you, and are happy to help with anything you need.     PLEASE PLAN TO CHECK IN BEFORE DARK. We understand this isn’t always possible, but this isn't the kind of place where you pick up a key and let yourself in, and it’s essential to get the tour while it’s still light outside. If you are a group of 4, we ask that if at all possible all guests arrive together.     If you have a dog, you may see more of us as our dog, Charlie, is always happy to have a playmate. I have a list of great, dog friendly restaurants, and a few things to do around here.     Please let us know when you leave - we like to hear how about your stay, and to say goodbye!",
    otherNotes: "We need to be here when you check in, so communication about arrival time is essential. I plan my schedule around meeting you - and ask that you respect this. I try to be flexible, but sometimes need to agree on an arrival time, so please stick to this and communicate if you are running late.You can always check in before going back out to lunch or dinner.     New Yorkers! Avoid the traffic getting out of NYC by taking the train to New Haven. You can rent a car from Avis - super easy and less expensive than renting in the city!",
  },
}];

const insertListings = function() {
  Listing.create(data)
    .then(() => db.disconnect());
}

insertListings();
