import { TopLocations } from "../constants";
import TopLocationTile from "../components/TopLocationTile";

const Locations = () => {
  return (
    <section
      id="locations"
      className="bg-racing-green min-h-screen flex flex-col"
    >
      <div className="flex items-center justify-center p-10">
        <h1 className="font-montserrat font-bold text-brand-beige text-3xl lg:text-6xl">
          My favorite locations
        </h1>
      </div>
      <div className="flex-grow flex flex-wrap max-md:gap-5">
        {TopLocations.map((location) => (
          <TopLocationTile
            key={location.id}
            id={location.id}
            name={location.name}
            image={location.images[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default Locations;
