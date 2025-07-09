import img from "../assets/image.png";
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle dark mode
    const toggleTheme = () => {
        setIsDarkMode(prev => {
          const newMode = !prev;
          localStorage.setItem('theme', newMode ? 'dark' : 'light');
          document.documentElement.classList.toggle('dark', newMode);
          return newMode;
        });
    };
    
    // Apply the dark class on mount based on localStorage
    useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (  
        <nav className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md transition-all duraction-300 px-6">
            <div className="lg:container mx-auto flex items-center justify-between p-4 w-full">
                <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-400 hover:border-emerald-700 active:border-emerald-700 overflow-hidden transition-all duration-300 cursor-pointer">
                        <img src={img} alt="" className="w-10 h-10 object-center object-cover"/>
                    </span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">FREDDIE</span>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="hidden md:flex items-center space-x-8 font-medium">
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#">Home</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Stacks">Stacks</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Experience">Experience</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Projects">Projects</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Contact">Contact</a></li>
                    </ul>
                    <span className="flex items-center gap-2">
                        <button onClick={toggleTheme} className={`inline-flex p-2 items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 cursor-pointer transform transition-transform duration-300 rounded-full ${ isDarkMode ? "rotate-180" : "" }`}>{ !isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}</button>
                        <button onClick={() => setMenuOpen(!menuOpen)} className={`inline-flex md:hidden p-2 items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 cursor-pointer transform transition-transform duration-300 rounded-full ${ menuOpen ? "scale-x-[-1]" : "scale-x-[1]" }`}>{ !menuOpen ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}</button>
                    </span>
                </div>
            </div>
            <div className={`lg:container mx-auto border-t border-gray-200 dark:border-gray-800 transition-all duration-500 ease-in-out transform overflow-hidden ${menuOpen ? 'opacity-100 scale-100 translate-y-0 max-h-[300px] mt-4' : 'opacity-0 scale-95 -translate-y-2 max-h-0'}`}>
                <div className="flex flex-col md:hidden gap-4 py-4">
                    <ul className="flex flex-col space-y-4 font-medium">
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#">Home</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Stacks">Stacks</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Experience">Experience</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Projects">Projects</a></li>
                        <li className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 active:text-emerald-600 hover:dark:text-emerald-600 active:dark:text-emerald-600 transition-colors duration-200"><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;