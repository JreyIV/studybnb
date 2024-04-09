import { hero, studybnblogo } from "../assets/images";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content bg-black bg-opacity-65 text-white py-20 px-5 md:px-20 min-h-screen">
        <div className="max-w-md">
          <img
            src={studybnblogo}
            alt="logo"
            width={200}
            height={200}
            className=""
          />
          <div>
            <h1 className="font-montserrat text-6xl max-md:text-4xl font-bold">
              studybnb
            </h1>
          </div>
          <p className="font-montserrat  text-2xl max-md:text-xl font-bold">
            Chicago
          </p>
          <p className="font-palanquin mt-10 mb-5 text-sm md:text-lg">
            Ditch the monotony of your college library or office and romanticize
            your study or work session. Find the most vibey and pleasant places
            to work around Chicago with Studybnb.
          </p>
          <Link to="#locations" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
