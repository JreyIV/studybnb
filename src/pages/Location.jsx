/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { TopLocations } from "../constants";
import { backarrow, marker } from "../assets/icons";

const Location = () => {
  const { id } = useParams();
  const location = TopLocations.find((location) => location.id === id);
  const { name, address, images, description, hours, details, rating } =
    location;

  return (
    <section className="bg-dark-green min-h-screen p-5">
      <div className="mx-auto lg:px-8 max-w-6xl flex flex-col">
        {/* heading */}
        <div className="py-5">
          <Link to="/" className="flex gap-2 items-center">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={backarrow}
              alt="backarrow"
              height={15}
              width={15}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-5">
          <p className="font-montserrat font-bold md:text-4xl text-3xl text-white">
            {name}
          </p>
          <div className="flex gap-2 items-center">
            <img src={marker} alt="map marker" height={15} width={15} />
            <p className="font-montserrat text-white">{address}</p>
          </div>
        </div>

        {/* picture collage */}
        <div className="collage gap-5 h-full">
          <div className="pic1 rounded-tl-xl rounded-bl-xl overflow-hidden">
            <img src={images[1]} alt={name} style={{ height: "100%" }} />
          </div>
          <div className="pic2">
            <img src={images[2]} alt={name} />
          </div>
          <div className="pic3">
            <img src={images[1]} alt={name} />
          </div>
          <div className="pic4 rounded-tr-xl overflow-hidden">
            <img src={images[1]} alt={name} />
          </div>
          <div className="pic5 rounded-br-xl overflow-hidden">
            <img src={images[1]} alt={name} />
          </div>
        </div>

        {/* Description */}
        <div className="flex py-10 gap-10 max-md:flex-col max-md:items-center ">
          <div className="flex flex-col md:w-2/3 md:border-b border-gray-500 md:pb-10">
            <h2 className="pb-5 font-montserrat font-bold text-brand-beige text-3xl">
              About
            </h2>
            <p className="font-montserrat text-white leading-normal">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-5 border border-white bg-[#1b4544] max-md:text-center px-5 py-5 rounded-xl md:w-1/3 items-center">
            <h2 className="font-montserrat text-white text-xl underline ">
              Hours
            </h2>
            <ul className="flex flex-col gap-2">
              {hours.map((hour) => (
                <li
                  key={hour.day}
                  className="font-montserrat text-white text-lg"
                >
                  {hour.day}: {hour.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What to expect */}
        <div className="flex flex-col md:w-2/3 md:border-b border-gray-500 md:pb-10">
          <h2 className="pb-5 font-montserrat font-bold text-brand-beige text-3xl">
            What to expect
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {details.map((detail) => (
              <li key={detail.attr} className="flex gap-2 items-center">
                <img
                  src={detail.src}
                  alt={detail.attr}
                  height={20}
                  width={20}
                />
                <p className="font-montserrat text-white md:text-lg text-base">
                  {detail.attr} -{" "}
                </p>
                <p className="font-montserrat text-white">{detail.value}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* my rating ???? */}
        <div className="flex py-10 gap-10 ">
          <div className="flex flex-col md:w-2/3 md:border-b border-gray-500 md:pb-10">
            <h2 className="pb-5 font-montserrat font-bold text-brand-beige text-3xl">
              Rating
            </h2>
            <p className="font-montserrat text-white leading-normal">
              {rating.rating} of 5 stars
            </p>
            <p className="font-montserrat text-white leading-normal">
              {rating.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
