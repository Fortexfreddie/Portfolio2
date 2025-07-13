import { SiMongodb, SiTailwindcss, SiDart, SiPhp, SiJavascript, SiGithub, SiGit, SiReact, SiFlutter, SiMysql, SiLaravel, SiNodedotjs, SiExpress, SiTypescript, SiCss3, SiBootstrap, SiVercel, SiPostman, SiNetlify, SiDocker } from 'react-icons/si';
import { motion } from "framer-motion";
import useIsMobile from '../hooks/useIsMobile';

const techStacks = [
    {
        category: "Frontend Development",
        items: [
            { name: "React", icon: <SiReact className="text-blue-400" size={36} />, percentage: 75 },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={36} />, percentage: 80 },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" size={36} />, percentage: 85 },
            { name: "Flutter", icon: <SiFlutter className="text-cyan-300" size={36} />, percentage: 35 },
            { name: "CSS", icon: <SiCss3 className="text-blue-500" size={36} />, percentage: 85 },
            { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" size={36} />, percentage: 60 }
        ],
    },
    {
        category: "Backend & Databases",
        items: [
            { name: "PHP", icon: <SiPhp className="text-indigo-500" size={36} />, percentage: 80 },
            { name: "Laravel", icon: <SiLaravel className="text-red-500" size={36} />, percentage: 25 },
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={36} />, percentage: 30 },
            { name: "Express", icon: <SiExpress className="text-gray-300" size={36} />, percentage: 10 },
            { name: "MySQL", icon: <SiMysql className="text-cyan-700" size={36} />, percentage: 80 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={36} />, percentage: 25 }
        ],
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "Git", icon: <SiGit className="text-orange-500" size={36} />, percentage: 50 },
            { name: "GitHub", icon: <SiGithub className="text-gray-300" size={36} />, percentage: 70 },
            { name: "Vercel", icon: <SiVercel className="text-gray-300" size={36} />, percentage: 70 },
            { name: "Netlify", icon: <SiNetlify className="text-teal-400" size={36} />, percentage: 70 },
            { name: "Postman", icon: <SiPostman className="text-orange-500" size={36} />, percentage: 65 },
            { name: "Docker", icon: <SiDocker className="text-sky-500" size={36} />, percentage: 20 },
        ],
    },
    {
        category: "Currently Learning",
        items: [
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400" size={36} />, percentage: 60 },
            { name: "Dart", icon: <SiDart className="text-cyan-300" size={36} />, percentage: 50 },
            { name: "Laravel", icon: <SiLaravel className="text-red-500" size={36} />, percentage: 25 },
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={36} />, percentage: 30 },
            { name: "Docker", icon: <SiDocker className="text-sky-500" size={36} />, percentage: 20 },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={36} />, percentage: 25 }
        ]
    }
];

const Stack = () => {
    const isMobile = useIsMobile();
    return (  
        <section id="Stacks" className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10 w-full transition-colors duration-300">
            <div className="lg:container mx-auto px-6 md:px-8 lg:px-12">
                <h1 className="text-center text-3xl md:text-4xl text-gray-950 dark:text-gray-50 transition-colors duration-300 font-bold tracking-wider">My Tech Stack</h1>
                <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 dark:from-gray-900 dark:via-gray-400 dark:to-gray-900 transition-colors duration-300"></div>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">“Technologies I Use to Build Modern Applications”</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {
                        techStacks.map((techStack, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }} 
                                transition={{ 
                                    duration: 0.8,
                                    delay: index * (isMobile ? 0.1 : 0.2), // Stagger based on position and screen size
                                    ease: [0.25, 0.8, 0.25, 1], // cubic-bezier curve
                                }}
                                viewport={{ once: true }}
                                className="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 border border-gray-300 dark:border-gray-600 backdrop-blur-md transition-colors duration-300">
                                <p className="text-lg font-semibold text-gray-600 dark:text-gray-50 transition-colors duration-300 mb-4">{techStack.category}</p>
                                <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                                    {
                                        techStack.items.map((item, i) => (
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{duration: 0.2}}
                                                key={i} 
                                                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 backdrop-blur-md hover:shadow-md transition-colors duration-500">
                                                <span className="mb-2">
                                                    {item.icon}
                                                </span>
                                                <span className="text-md font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">{item.name}</span>
                                                <div className="flex flex-col justify-end h-full w-full mt-3">
                                                    <span className='flex justify-between items-center w-full'>
                                                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.name}</span>
                                                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.percentage}%</span>
                                                    </span>
                                                    <progress value={item.percentage} max="100" className="mt-1 w-full h-2 rounded [&::-webkit-progress-bar]:bg-gray-200 dark:[&::-webkit-progress-bar]:bg-gray-400 [&::-webkit-progress-bar]:rounded [&::-webkit-progress-value]:bg-emerald-600 [&::-webkit-progress-value]:rounded transition-all duration-300"></progress>
                                                </div>
                                            </motion.div>
                                        ))
                                    }
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
 
export default Stack;