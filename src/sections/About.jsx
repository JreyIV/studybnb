import { chicago, cafe } from "../assets/images";
import { arrowdown } from "../assets/icons";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-dark-green about_container max-w-full flex"
    >
      <div className="left_content bg-dark-green col-span-4 max-lg:col-span-full max-lg:justify-center max-relative flex flex-col lg:w-3/4">
        <h1 className="text-brand-beige font-montserrat font-bold text-4xl lg:text-6xl p-5 lg:p-10 text-center">
          What is Studybnb?
        </h1>
        <p className="text-white p-5 lg:px-10 font-palanquin text-base lg:text-lg ">
          In a time where working remotely is the norm, it is easy to become
          bored of working in the same old office or school library. I created
          Studybnb to help hard working students and workers find the best
          places to work around Chicago.
        </p>
        <p className="text-white p-5 lg:px-10 font-palanquin text-base lg:text-lg">
          As a student at DePaul University who took a lot of online classes, it
          was important for me to romanticize my studying and find ways to make
          my work more enjoyable. The best way for me to do that was to create
          an environment that sparks productivity and creativity. That&apos;s
          why I&apos;ve personally sought out and curated a selection of
          top-notch locations where you can roll up your sleeves and get things
          done.
        </p>
        <p className="text-white leading-normal p-5 lg:px-10 font-palanquin text-base lg:text-lg">
          In the future, I would like to add more locations as I continue to
          look for the best places to work. I would even like to allow others to
          input their own favorite locations and expand to other cities. For
          now, I hope that you can check these places out yourself and make your
          own work a more enjoyable experience.
        </p>
        <div className="pt-5 lg:pt-10 ml-5 lg:ml-10 flex gap-3 lg:gap-5 items-center">
          <img src={arrowdown} alt="arrowdown" width={25} height={25} />
          <h1 className="font-montserrat text-base p-5 lg:text-xl font-bold text-brand-beige">
            Go on, check out my favorite study spots
          </h1>
        </div>
      </div>
      <div
        className="middle_image z-10 w-64 h-64 lg:w-[28rem] lg:h-[28rem] border-4 border-solid border-dark-green max-lg:hidden"
        style={{
          backgroundImage: `url(${cafe})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="right_image bg-cover bg-center w-full h-64 lg:h-auto max-lg:hidden"
        style={{
          backgroundImage: `url(${chicago})`,
        }}
      ></div>
    </section>
  );
};

export default About;
