import {
  haroldlibrary,
  kibbitznest,
  drawingroom,
  placeholder,
} from "../assets/images";

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
    hours: {
      monday: "10:00 AM - 5:00 PM",
      tuesday: "10:00 AM - 5:00 PM",
      wednesday: "10:00 AM - 5:00 PM",
      thursday: "10:00 AM - 5:00 PM",
      friday: "10:00 AM - 5:00 PM",
      saturday: "10:00 AM - 5:00 PM",
    },
    image: haroldlibrary,
  },
  {
    id: "02",
    name: "Kibbitznest",
    address: "2212 N Clybourn Ave, Chicago, IL 60614",
    hours: {
      monday: "10:00 AM - 5:00 PM",
      tuesday: "10:00 AM - 5:00 PM",
      wednesday: "10:00 AM - 5:00 PM",
      thursday: "10:00 AM - 5:00 PM",
      friday: "10:00 AM - 5:00 PM",
      saturday: "10:00 AM - 5:00 PM",
    },
    image: kibbitznest,
  },
  {
    id: "03",
    name: "Drawing Room",
    address: "12 S Michigan Ave, Chicago, IL 60603",
    hours: {
      monday: "10:00 AM - 5:00 PM",
      tuesday: "10:00 AM - 5:00 PM",
      wednesday: "10:00 AM - 5:00 PM",
      thursday: "10:00 AM - 5:00 PM",
      friday: "10:00 AM - 5:00 PM",
      saturday: "10:00 AM - 5:00 PM",
    },
    image: drawingroom,
  },
  {
    id: "04",
    name: "Placeholder",
    address: "1234 Somewhere St, Chicago, IL 60603",
    hours: {
      monday: "10:00 AM - 5:00 PM",
      tuesday: "10:00 AM - 5:00 PM",
      wednesday: "10:00 AM - 5:00 PM",
      thursday: "10:00 AM - 5:00 PM",
      friday: "10:00 AM - 5:00 PM",
      saturday: "10:00 AM - 5:00 PM",
    },
    image: placeholder,
  },
];
