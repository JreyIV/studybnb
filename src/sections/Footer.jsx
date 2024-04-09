import { NavLinks, TopLocations } from "../constants";
import { studybnblogo } from "../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-black flex flex-col items-center gap-10 lg:flex-row lg:p-20 p-5 justify-between">
      <img
        src={studybnblogo}
        alt="logo"
        width={200}
        height={200}
        className=""
      />
      <div className="flex flex-wrap gap-10 lg:gap-20">
        <div>
          <h1 className="font-montserrat font-bold lg:text-2xl pb-3 text-white border-b-2 border-brand-beige">
            Homepage
          </h1>
          <div className="flex flex-col pt-5 gap-2 font-montserrat text-lg">
            {NavLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-montserrat font-bold lg:text-2xl pb-3 text-white border-b-2 border-brand-beige">
            Top Locations
          </h1>
          <div className="flex flex-col pt-5 gap-2 font-montserrat text-lg">
            {TopLocations.map((location) => (
              <Link key={location.id} to={`/${location.id}`} className="block">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-montserrat font-bold lg:text-2xl pb-3 text-white border-b-2 border-brand-beige w-[55%]">
            Contact
          </h1>
          <p className="pt-5 font-montserrat">jreyes1919@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
