/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { magnify } from "../assets/icons";

const TopLocationTile = ({ name, image, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ backgroundSize: "150%", filter: "brightness(70%)" }}
      whileHover={{
        backgroundSize: "130%",
        filter: "brightness(100%)",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className=" flex-grow max-w-1/4 max-md:w-full p-5 cursor-pointer overflow-hidden w-[200px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-white font-montserrat font-bold text-3xl overflow-wrap break-word">
        {id}
      </h1>
      <h1 className="text-white font-montserrat font-bold text-xl overflow-wrap break-word">
        {name}
      </h1>
      <Link to={`/${(id, name)}`} className="block">
        <div className=" flex justify-center items-center max-md:justify-end max-md:p-5 absolute top-0 left-0 w-full h-full text-white font-montserrat font-bold lg:text-3xl">
          {(isHovered || window.innerWidth <= 768) && (
            <div className="bg-gray-800 opacity-70 rounded-full p-5">
              <img
                src={magnify}
                alt="magnify"
                width={25}
                height={25}
                className=""
              />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default TopLocationTile;
