import {
  haroldlibrary,
  kibbitznest,
  kibbitznest1,
  kibbitznest2,
  drawingroom,
  drawingroom1,
  drawingroom2,
  drawingroom3,
  drawingroom4,
  drawingroom5,
  kibbitznest3,
  kibbitznest4,
  kibbitznest5,
  starbucks,
  starbucks1,
  starbucks2,
  starbucks3,
  starbucks4,
  starbucks5,
} from "../assets/images";

import {
  wifi,
  bathroom,
  noise,
  music,
  outlet,
  food,
  coffee,
  seat,
  couch,
  busy,
  starfull,
  starhalf,
} from "../assets/icons";

export const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export const TopLocations = [
  {
    id: "01",
    name: "Harold Washington Library",
    address: "400 S State St, Chicago, IL 60605",
    description:
      "Sometimes a quiet study place isn't a necessity. Sometimes studying in a unique and creative environment is the best way to work and get the creative juices flowing. Kibbitznest is a perfect study location for those who want to get out of the usual quiet study and work spaces. Located in Clybourn, Kibbitznest is known for its unique combination of bookstore, cafe, and bar, providing a cozy and inviting atmosphere for visitors to enjoy books, coffee, and cocktails. It has many seats and tables as well as lounge chairs and sofas to work on. You will be surrounded by other people engaging in conversation with alcoholic beverages or coffee in hand. There are also a lot of people playing board games or card games. If a loud and busy atmosphere doesn't distract your workflow, you need to check this place out!",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "4:00 PM - 11:00 PM" },
      { day: "Thursday", hours: "4:00 PM - 11:00 PM" },
      { day: "Friday", hours: "4:00 PM - 12:00 AM" },
      { day: "Saturday", hours: "1:00 PM - 12:00 AM" },
      { day: "Sunday", hours: "1:00 PM - 7:00 PM" },
    ],
    details: [
      { attr: "Wifi", value: "None", src: wifi },
      { attr: "Bathrooms", value: "Yes", src: bathroom },
      { attr: "Noise", value: "Loud", src: noise },
      { attr: "Music", value: "Yes", src: music },
      { attr: "Outlets", value: "Many", src: outlet },
      { attr: "Food", value: "Yes", src: food },
      { attr: "Coffee", value: "Yes", src: coffee },
      { attr: "Seating", value: "Many", src: seat },
      { attr: "Couches", value: "Yes", src: couch },
      { attr: "Busy", value: "Yes", src: busy },
    ],
    images: [haroldlibrary],
  },
  {
    id: "02",
    name: "Kibbitznest",
    address: "2212 N Clybourn Ave, Chicago, IL 60614",
    description:
      "Sometimes a quiet study place isn't a necessity. Sometimes studying in a unique and creative environment is the best way to work and get the creative juices flowing. Kibbitznest is a perfect study location for those who want to get out of the usual quiet study and work spaces. Located in Clybourn, Kibbitznest is known for its unique combination of bookstore, cafe, and bar, providing a cozy and inviting atmosphere for visitors to enjoy books, coffee, and cocktails. It has many seats and tables as well as lounge chairs and sofas to work on. You will be surrounded by other people engaging in conversation with alcoholic beverages or coffee in hand. There are also a lot of people playing board games or card games. If a loud and busy atmosphere doesn't distract your workflow, you need to check this place out!",
    hours: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "Closed" },
      { day: "Wednesday", hours: "4 PM - 11 PM" },
      { day: "Thursday", hours: "4 PM - 11 PM" },
      { day: "Friday", hours: "4 PM - 12 AM" },
      { day: "Saturday", hours: "1 PM - 12 AM" },
      { day: "Sunday", hours: "1 PM - 7 PM" },
    ],
    details: [
      { attr: "Wifi", value: "None", src: wifi },
      { attr: "Bathrooms", value: "Yes", src: bathroom },
      { attr: "Noise", value: "Loud", src: noise },
      { attr: "Music", value: "Yes", src: music },
      { attr: "Outlets", value: "Many", src: outlet },
      { attr: "Food", value: "Yes", src: food },
      { attr: "Coffee", value: "Yes", src: coffee },
      { attr: "Seating", value: "Many", src: seat },
      { attr: "Couches", value: "Yes", src: couch },
      { attr: "Busy", value: "Yes", src: busy },
    ],
    rating: {
      rating: 4.7,
      stars: [...Array(4).fill(starfull), starhalf],
      desc: "I always enjoy studying at Kibbitznest because of it's energetic environment and comfy atmosphere. Everyone who steps foot in Kibbitznest has a smile on their face because of the good vibes. It's a great place to unwind and bring friends to study or work with. Although it is busy, there are multiple rooms with ample seating and tables. The food is good and there are plenty of other things to do like browse their book section or play games if you need a break from working. The one thing you will need to keep in mind before going is that there is no wifi because they want to promote face to face interactions. So if you are planning to study there, you may need to turn on your personal hotspot.",
    },
    mapsrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.650507476474!2d-87.66783072419017!3d41.921871262672845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e434328eaf%3A0x52048384ea73324b!2skibbitznest%20books%2C%20brews%20%26%20blarney!5e0!3m2!1sen!2sus!4v1712628600156!5m2!1sen!2sus",
    images: [
      kibbitznest,
      kibbitznest1,
      kibbitznest2,
      kibbitznest3,
      kibbitznest4,
      kibbitznest5,
    ],
  },
  {
    id: "03",
    name: "Drawing Room",
    address: "12 S Michigan Ave, Chicago, IL 60603",
    description:
      "If you are into dark academia or want to work in an environment that screams old money aesthetic, look no further than The Drawing Room at the Chicago Athletic Association. Picture yourself in a room straight out of a vintage novel - think plush velvet armchairs, mahogany tables, and flickering candlelight casting dancing shadows on the walls. It really feels like you're working in an old castle or studying in the dormatories of Hogwarts. The area includes three grand fireplaces, a community library tatble, and many places to sit. In a city bustling with modernity, the Drawing Room stands as a bastion of old-world charm and intellectual pursuit.",
    hours: [
      { day: "Monday", hours: "11 AM - 11 PM" },
      { day: "Tuesday", hours: "11 AM - 11 PM" },
      { day: "Wednesday", hours: "11 AM - 11 PM" },
      { day: "Thursday", hours: "11 AM - 11 PM" },
      { day: "Friday", hours: "11 AM - 12 AM" },
      { day: "Saturday", hours: "10 AM - 12 AM" },
      { day: "Sunday", hours: "10 AM - 9 PM" },
    ],
    details: [
      { attr: "Wifi", value: "Yes", src: wifi },
      { attr: "Bathrooms", value: "Yes", src: bathroom },
      { attr: "Noise", value: "Loud", src: noise },
      { attr: "Music", value: "Yes", src: music },
      { attr: "Outlets", value: "Many", src: outlet },
      { attr: "Food", value: "Yes", src: food },
      { attr: "Coffee", value: "Yes", src: coffee },
      { attr: "Seating", value: "Many", src: seat },
      { attr: "Couches", value: "Yes", src: couch },
      { attr: "Busy", value: "Yes", src: busy },
    ],
    rating: {
      rating: 4.4,
      stars: [...Array(4).fill(starfull), starhalf],
      desc: "I loved studying in the Drawing Room. I don't mind the hum of conversation and clink of coffee mugs. It smells nice and is located right outside of Millenium Park so there is a lot to do around there before or after your study session. There are ample outlets for charging your devices and good food. Similar to the other locations on this list, it's a little bit busy so it can be hard to find seats despite the large amount of seating. It is also very dark in there so if you're not seated near a light source, it can be hard to read or write.",
    },
    mapsrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.5203123418464!2d-87.62754342419218!3d41.88166596519124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca441ac9df9%3A0xeacae4e3376e03a0!2sDrawing%20Room!5e0!3m2!1sen!2sus!4v1712629480606!5m2!1sen!2sus",
    images: [
      drawingroom,
      drawingroom1,
      drawingroom2,
      drawingroom3,
      drawingroom4,
      drawingroom5,
    ],
  },
  {
    id: "04",
    name: "Starbucks Reserve",
    address: "646 Michigan Ave, Chicago, IL 60611",
    description:
      "Do you enjoy a nice coffee while you study? If yes, then the Starbucks Reserve is a great place to study. Known for being the largest Starbucks in the world, the Starbucks Reserve offers an array of specialty coffee and coffee creations that you won't find in a normal starbucks. This four story building offers many seats and tables for studying. studying at the Starbucks Reserve on Michigan Avenue is a delightful experience that combines the comfort of a familiar coffeehouse with the sophistication of a specialty coffee destination. Whether you're seeking inspiration for your next project or simply looking for a cozy spot to unwind with a cup of coffee, this location offers the perfect blend of ambiance, amenities, and hospitality. ",
    hours: [
      { day: "Monday", hours: "8 AM - 8 PM" },
      { day: "Tuesday", hours: "8 AM - 8 PM" },
      { day: "Wednesday", hours: "8 AM - 8 PM" },
      { day: "Thursday", hours: "8 AM - 8 PM" },
      { day: "Friday", hours: "8 AM - 9:30 PM" },
      { day: "Saturday", hours: "8 AM - 9:30 PM" },
      { day: "Sunday", hours: "8 AM - 9:30 PM" },
    ],
    details: [
      { attr: "Wifi", value: "Yes", src: wifi },
      { attr: "Bathrooms", value: "Yes", src: bathroom },
      { attr: "Noise", value: "Loud", src: noise },
      { attr: "Music", value: "Yes", src: music },
      { attr: "Outlets", value: "Few", src: outlet },
      { attr: "Food", value: "Yes", src: food },
      { attr: "Coffee", value: "Yes", src: coffee },
      { attr: "Seating", value: "Many", src: seat },
      { attr: "Couches", value: "None", src: couch },
      { attr: "Busy", value: "Yes", src: busy },
    ],
    rating: {
      rating: 4.3,
      stars: [...Array(4).fill(starfull), starhalf],
      desc: "The Starbucks Reserve is always worth a trip. As an avid coffee drinker, this place is a no brainer for a good study session. There are plenty of seats although one thing I will note is the lack of outlets so you'd better make sure your devices are fully charged ahead of time. Once again, this place is loud so if you need peace and quiet to study, this place might not be ideal for you.",
    },
    mapsrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9465320593804!2d-87.62717672419156!3d41.894006964418494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d35347bc2d7%3A0xc65e03cf5d97331e!2sStarbucks%20Reserve%20Roastery!5e0!3m2!1sen!2sus!4v1712629730722!5m2!1sen!2sus",
    images: [
      starbucks,
      starbucks1,
      starbucks2,
      starbucks3,
      starbucks4,
      starbucks5,
    ],
  },
];
