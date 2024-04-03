import { Hero, About } from "../sections";
import Nav from "../components/Nav.jsx";

const Home = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
};

export default Home;
