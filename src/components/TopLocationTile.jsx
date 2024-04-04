/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const TopLocationTile = ({ name, image, id }) => {
  return (
    <motion.div
      initial={{ backgroundSize: "120%", filter: "brightness(70%)" }}
      whileHover={{
        backgroundSize: "cover",
        filter: "brightness(100%)",
        transition: { duration: 0.5 },
      }}
      className="border flex-grow max-w-1/4 max-lg:w-full p-5 cursor-pointer overflow-hidden w-[200px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white font-montserrat font-bold text-3xl overflow-wrap break-word">
        {id}
      </h1>
      <h1 className="text-white font-montserrat font-bold text-xl overflow-wrap break-word">
        {name}
      </h1>
    </motion.div>
  );
};

export default TopLocationTile;
