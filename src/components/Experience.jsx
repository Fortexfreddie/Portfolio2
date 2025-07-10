import { Code, Globe, Smartphone } from 'lucide-react';
import { SiPhp, SiReact, SiMysql, SiGithub } from 'react-icons/si';
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Full-Stack Development",
        icon: <Code className="w-6 h-6 text-emerald-300" />,
        years: 2,
        description:
        "I build end-to-end web applications using React, Tailwind CSS, PHP, Laravel, and MySQL—from clean UIs to secure APIs and scalable backend systems.",
        tools: ["PHP", "React", "Tailwind", "MySQL"],
        iconWrapper: "from-emerald-900/50 to-emerald-900 border-emerald-800/50",
    },
    {
        title: "Web Applications",
        icon: <Globe className="w-6 h-6 text-sky-300" />,
        years: 2,
        description:
        "Specialized in building responsive and performant web platforms with modern UI libraries and frameworks tailored for the web.",
        tools: ["HTML", "CSS", "JavaScript", "Vite"],
        iconWrapper: "from-sky-900/50 to-sky-900 border-sky-800/50",
    },
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-6 h-6 text-cyan-300" />,
        years: 0.2,
        description:
        "Currently exploring mobile-first development using Flutter and Dart to create cross-platform apps with smooth performance and native-like UI.",
        tools: ["Flutter", "Dart"],
        iconWrapper: "from-cyan-900/50 to-cyan-900 border-cyan-800/50",
    },
];

const Expertise = [
    {
        title: "Frontend Development",
        years: "2 years",
        description: "Crafting responsive and user-friendly interfaces using modern frameworks and libraries.",
        tools: ["React", "Tailwind CSS", "JavaScript", "Flutter"],
        icon: <SiReact className="text-blue-400" size={36} />
    },
    {
        title: "Backend Development",
        years: "2 years",
        description: "Building secure and scalable server-side systems with PHP, Node.js, and Express.",
        tools: ["PHP", "Laravel", "Node.js", "Express"],
        icon: <SiPhp className="text-gray-300" size={36} />
    },
    {
        title: "Database Systems",
        years: "2 years",
        description: "Designing and optimizing relational and NoSQL databases for performance and scalability.",
        tools: ["MySQL", "MongoDB"],
        icon: <SiMysql className="text-cyan-700" size={36} />
    },
    {
        title: "Community Contributions",
        years: "Ongoing",
        description: "Sharing knowledge through blog posts, GitHub contributions, and open-source collaborations.",
        tools: ["GitHub", "Git"],
        icon: <SiGithub className="text-gray-300" size={36} />
    }
];



const Experience = () => {
    return (  
        <section id="Experience" className="pt-20 pb-10 w-full transition-colors duration-300">
            <div className="lg:container mx-auto px-6 md:px-8 lg:px-12">
                <h1 className="text-center text-3xl md:text-4xl text-gray-950 dark:text-gray-50 transition-colors duration-300 font-bold tracking-wider">My Development Experience</h1>
                <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 dark:from-gray-900 dark:via-gray-400 dark:to-gray-900 transition-colors duration-300"></div>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">“Specialized in Frontend, Skilled Across the Full Stack”</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                    {
                        experiences.map((exp, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                key={index} className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-600 backdrop-blur-md transition-colors duration-300">
                                <div className="flex flex-row gap-4 items-center mb-6">
                                    <div className={`bg-gradient-to-br ${exp.iconWrapper} p-3 rounded-lg`}>
                                        {exp.icon}
                                    </div>
                                    <p className="text-lg font-semibold text-gray-600 dark:text-gray-50 transition-colors duration-300">{exp.title}</p>
                                </div>
                                <div className="flex flex-row gap-2 mb-6 items-center">
                                    <span className="text-4xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">{exp.years}</span>
                                    <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300 font-semibold">years</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        exp.tools.map((tool, i) => (
                                            <span key={i} className="text-sm text-gray-600 dark:text-gray-50 font-medium bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 py-1 px-3 transition-colors duration-300">{tool}</span>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-4 mt-10'>
                    <h1 className="text-3xl text-center lg:text-start text-gray-900 dark:text-gray-100 transition-colors duration-300 font-bold tracking-wider mb-4">Expertise Breakdown</h1>
                    {
                        Expertise.map((exp, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                key={index} className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-600 backdrop-blur-md transition-colors duration-300">
                                <div className="flex md:flex-row flex-col gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-emerald-800/50 p-3 rounded-lg">
                                            {exp.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex md:flex-row flex-col justify-between items-center">
                                            <p className="text-lg text-gray-600 dark:text-gray-50 transition-colors duration-300 mb-4">{exp.title}</p>
                                            <span className="text-sm font-medium px-3 py-1 md:rounded-full bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300 mb-4">{exp.years}</span>
                                        </div>
                                        <p className="text-md text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-3">{exp.description}</p>
                                        <div className="flex flex-row flex-wrap gap-3">
                                            {
                                                exp.tools.map((tool, i) => (
                                                    <span key={i} className="text-sm text-gray-600 dark:text-gray-50 font-medium bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 py-1 px-3 transition-colors duration-300">{tool}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
 
export default Experience;