import { hero } from "../assets/images";

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
          <h1 className="font-montserrat text-6xl max-md:text-4xl font-bold">
            studybnb
          </h1>
          <p className="font-montserrat mb-10 text-2xl max-md:text-xl font-bold">
            Chicago
          </p>
          <p className="font-palanquin mb-5 text-sm md:text-base">
            Ditch the monotony of your college library or office and romanticize
            your study or work session. Find the most vibey and pleasant places
            to work around Chicago with Studybnb.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
