import Conference from "../assets/images/conference.png";
import Examly from "../assets/images/Examly.png";
import skydrone from "../assets/images/skydrone.png";
import lodgeFinder from "../assets/images/lodgeFinder.png";
import lifestyle from "../assets/images/lifstyle.png";
import { Code, ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

const projects = [
    {
        title: "Lifestyle Blog",
        url: "http://lifestyleblogs.netlify.app/",
        description: "Lifestyle is your go-to blog for fresh trends, and inspiring stories in fashion, wellness, tech, and culture to stay informed every day.",
        image: lifestyle,
        repo: "https://github.com/Fortexfreddie/LIFESTYLEBLOG",
        alt: "Lifestyle Blog",
        tags: ["Blog", "React", "Tailwind", "PHP", "MySQL"]
    },
    {
        title: "Lodge Finder",
        url: "https://lodgefinders.netlify.app",
        description: "A platform for finding and booking lodges, hotels, and guest houses.",
        image: lodgeFinder,
        repo: "https://github.com/Fortexfreddie/Lodge_Finder_Project",
        alt: "Lodge Finder",
        tags: ["Lodge", "React", "Tailwind", "PHP", "MySQL"]
    },
    {
        title: "Skydrone",
        url: "https://skydrones.netlify.app",
        description: "Skydrone's innovative drone technology is bringing the latest farming innovations to farms around the world.",
        image: skydrone,
        repo: "https://github.com/Fortexfreddie/SKYDRONE",
        alt: "skydrone",
        tags: ["Farms", "React", "CSS", "Tailwind"]
    },
    {
        title: "Examly",
        url: "https://examlyy.netlify.app",
        description: "The official certification Examination platform for Human-Computer interface.",
        image: Examly,
        repo: "https://github.com/Fortexfreddie/online-exam-platform",
        alt: "Examly",
        tags: ["Exams", "React", "AOS", "Express.js", "Tailwind"]
    },
    {
        title: "Tech Maverick",
        url: "https://techmaverick.freesite.online",
        description: "A conference platform for hosting of conferences, events, seminars e.t.c",
        image: Conference,
        repo: "https://github.com/Fortexfreddie/Tech-Maverick",
        alt: "Tech Maverick",
        tags: ["Conference", "HTML", "CSS", "Bootstrap"]
    }
];

const inDevelopmentProject = [ 
    {
        title: "In Progress",
        url: "#",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, laudantium",
        imgText: "IP",
        repo: "",
        alt: "In Progress",
        tags: ["In Progress", "HTML", "CSS", "JavaScript"],
    }
];
const Projects = () => {
    return (  
        <section id="Projects" className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10 w-full transition-colors duration-300">
            <div className="lg:container mx-auto px-6 md:px-8 lg:px-12">
                <h1 className="text-center text-3xl md:text-4xl text-gray-950 dark:text-gray-50 transition-colors duration-300 font-bold tracking-wider">Featured Projects</h1>
                <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 dark:from-gray-900 dark:via-gray-400 dark:to-gray-900 transition-colors duration-300"></div>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">“Projects that showcase my frontend skills and full-stack capabilities.”</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                    {
                        projects.map((project, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ 
                                    duration: 0.8,
                                    delay: index * 0.2, // Stagger based on position
                                    ease: [0.25, 0.8, 0.25, 1],
                                }}
                                viewport={{ once: true }} 
                                key={index} className="group bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 backdrop-blur-md hover:shadow-md active:shadow-md transition-colors duration-300 overflow-hidden h-fit md:h-96 flex flex-col">
                                <div className="h-32 md:h-2/5 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                    <div className="relative w-full h-full flex justify-center items-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <a href={project.url} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/30 active:bg-white/30 hover:border-gray-500 transition-colors duration-300">
                                                <ExternalLink size={18} strokeWidth={2} />
                                                <p className="text-sm font-medium">Visit Live Site</p>
                                            </a>
                                        </div>
                                        <img loading="lazy" src={project.image} alt={project.alt} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="px-6 py-6 md:py-4">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between items-center">
                                            <p className="text-lg font-semibold text-gray-600 dark:text-gray-50 transition-colors duration-300 mb-4">{project.title}</p>
                                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-500/20 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 transition-colors duration-300 mb-4">Live</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4 md:line-clamp-2">{project.description}</p>
                                        <div className="flex flex-row flex-wrap gap-2 mb-5">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="text-xs text-gray-600 dark:text-gray-50 font-medium bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 py-1 px-2 transition-colors duration-300">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300">
                                                <ExternalLink size={18} strokeWidth={2} />
                                                <p className="text-sm font-medium">Demo</p>
                                            </a>
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300">
                                                <Code size={18} strokeWidth={2} />
                                                <p className="text-sm font-medium">Details</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                    {
                        inDevelopmentProject.map((project, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ 
                                    duration: 0.8,
                                    delay: (projects.length + 1) * 0.2, // Stagger based on position
                                    ease: [0.25, 0.8, 0.25, 1],
                                }}
                                viewport={{ once: true }} 
                                key={index} className="group bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 backdrop-blur-md hover:shadow-md active:shadow-md transition-colors duration-300 overflow-hidden h-fit md:h-96 flex flex-col">
                                <div className="h-32 md:h-2/5 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                                    <div className="relative w-full h-full flex justify-center items-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <a onClick={(e) => e.preventDefault()} href={project.url} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/30 active:bg-white/30 hover:border-gray-500 transition-colors duration-300">
                                                <ExternalLink size={18} strokeWidth={2} />
                                                <p className="text-sm font-medium">Visit Live Site</p>
                                            </a>
                                        </div>
                                        <p className="text-4xl font-bold text-gray-700">{project.imgText}</p>
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between items-center">
                                            <p className="text-lg font-semibold text-gray-600 dark:text-gray-50 transition-colors duration-300 mb-4">{project.title}</p>
                                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/30 border border-yellow-600/20 dark:border-yellow-500/40 text-yellow-700 dark:text-yellow-300 transition-colors duration-300 mb-4">In Development</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4 line-clamp-2">{project.description}</p>
                                        <div className="flex flex-row flex-wrap gap-2 mb-5">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="text-xs text-gray-600 dark:text-gray-50 font-medium bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 py-1 px-2 transition-colors duration-300">{tag}</span>
                                            ))}
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <a onClick={(e) => e.preventDefault()} href={project.url} target="_blank" className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300">
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                <p className="text-sm font-medium">Demo</p>
                                            </a>
                                            <button className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300">
                                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                                <p className="text-sm font-medium">Details</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="flex flex-col justify-center items-center mt-10">
                    <div className="text-center mb-5">
                        <p className="text-2xl text-gray-900 dark:text-gray-100 transition-colors duration-300 font-bold tracking-wider">Want to see more of my work?</p>
                    </div>
                    <div>
                        <a href="https://github.com/Fortexfreddie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-950 rounded-lg border border-gray-800 hover:border-emerald-700 text-gray-300 hover:text-emerald-600 transition-all duration-300">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            View Github Portfolio
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
 
export default Projects;