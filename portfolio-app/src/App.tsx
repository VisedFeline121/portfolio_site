import "./App.css";
import { ErrorBoundary } from "./components/error/ErrorBoundary";
import NotFound from "./components/error/NotFound";
import Navbar from "./components/navigation/Navbar";
import About from "./components/sections/About/About";
import CV from "./components/sections/CV/CV";
import Contact from "./components/sections/Contact/Contact";
import Hero from "./components/sections/Hero/Hero";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import { useRouteValidation } from "./hooks/useRouteValidation";

function App() {
    const { show404 } = useRouteValidation();

    if (show404) {
        return <NotFound />;
    }

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
