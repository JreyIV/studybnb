/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { TopLocations } from "../constants";

const Location = () => {
  const { id } = useParams();
  const location = TopLocations.find((location) => location.id === id);
  const { name, address, hours, image } = location;

  console.log(hours);
  return (
    <section className="bg-dark-green min-h-screen p-5">
      <div>
        <Link to="/">Go back</Link>
      </div>
      <div>
        <p>{name}</p>
        <p>{address}</p>
        <img src={image} alt={name} width={300} height={300} />
      </div>
    </section>
  );
};

export default Location;
