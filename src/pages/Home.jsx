import { Hero, About, Locations } from "../sections";
import Nav from "../components/Nav.jsx";

const Home = () => {
  return (
    <main className="relative max-container">
      <Nav />
      <section className="max-container">
        <Hero />
      </section>
      <section className="max-container">
        <About />
      </section>
      <section className="max-container">
        <Locations />
      </section>
    </main>
  );
};

export default Home;
