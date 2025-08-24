import "./App.css";
import About from "./components/About";
import CV from "./components/CV";
import Contact from "./components/ContactForm/Contact";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <CV />
                <Contact />
            </div>
        </ErrorBoundary>
    );
}

export default App;
