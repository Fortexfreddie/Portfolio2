import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stacks from "../components/Stacks";
import Experience from "../components/Experience";
import Employment from "../components/Employment";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <div className="flex-grow">
                <main className="overflow-hidden">
                    <Hero />
                    <Stacks />
                    <Experience />
                    <Employment />
                    <Projects />
                    <Contact />
                </main>
            </div>
        </div>
    );
}
 
export default Home;