/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { TopLocations } from "../constants";

const Location = () => {
  const { id } = useParams();
  const location = TopLocations.find((location) => location.id === id);
  const { name, address, hours, images } = location;

  console.log(hours);
  return (
    <section className="bg-dark-green min-h-screen p-5">
      <div className="mx-auto max-w-screen-lg">
        <div>
          <Link to="/">Go back</Link>
        </div>
        <div>
          <p>{name}</p>
          <p>{address}</p>
        </div>
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
      </div>
    </section>
  );
};

export default Location;
