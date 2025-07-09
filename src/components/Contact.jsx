import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (  
        <section id="Contact" className="pt-20 w-full transition-colors duration-300">
            <div className="lg:container mx-auto px-6 md:px-8 lg:px-12">
                <h1 className="text-center text-3xl md:text-4xl text-gray-950 dark:text-gray-50 transition-colors duration-300 font-bold tracking-wider">Get In Touch</h1>
                
                <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 dark:from-gray-900 dark:via-gray-400 dark:to-gray-900 transition-colors duration-300"></div>
                
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">
                    “Got a project or idea? Reach out using the form, I'm open to freelance work, collaborations, or a quick chat.”
                </p>

                <div className="mt-6">
                    <div className="relative flex items-center justify-center w-72 h-72 mx-auto">
                        <svg viewBox="0 0 300 300" className="absolute w-full h-full rotating-text">
                            <defs>
                                <path
                                id="circlePath"
                                d="
                                    M150,150
                                    m -120,0
                                    a120,120 0 1,1 240,0
                                    a120,120 0 1,1 -240,0
                                "
                                />
                            </defs>
                            <text className="fill-gray-800 dark:fill-gray-100" fontSize="26" fontWeight="bold" letterSpacing="8">
                                <textPath href="#circlePath" startOffset="0%">
                                GET IN TOUCH • LET’S COLLABORATE •
                                </textPath>
                            </text>
                        </svg>
                        <a href="https://api.whatsapp.com/send/?phone=2347085062472&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="relative bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-100 px-6 py-3 rounded-lg shadow-md z-10 hover:bg-gray-950 active:bg-gray-950 dark:hover:bg-gray-700 dark:active:bg-gray-700 transition-all duration-300 cursor-pointer">
                            Let’s Work
                        </a>
                    </div>
                </div>
            </div>
            <footer className="mt-6 py-6 text-center bg-gray-800">
                <div className="flex justify-center gap-4 mb-4">
                    <a href="https://github.com/fortexfreddie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/fortexfreddie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://twitter.com/fortexfreddie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <FaTwitter size={20} />
                    </a>
                    <a href="mailto:kamyz042@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                        <FaEnvelope size={20} />
                    </a>
                </div>
                <p className="text-sm text-gray-300">© 2025 Freddie's Works. All rights reserved.</p>
                <p className="text-sm text-gray-400">Made with ❤️</p>
                </footer>
        </section>
    );
}
 
export default Contact;