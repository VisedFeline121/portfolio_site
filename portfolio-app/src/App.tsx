import "./App.css";
import About from "./components/About";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <CV />
            <Contact />
        </div>
    );
}

export default App;
