import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
export default function Home() {
    return (
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gold">Welcome to My Portfolio</h1>
        <div>
            <Hero />
            <Projects />
            <Skills />
        </div>
        <p className="text-gray-300 mt-4">Building premium digital experiences.</p>
      </div>
    );
  }
  