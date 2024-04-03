import { Hero, About } from "../sections";
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
    </main>
  );
};

export default Home;
