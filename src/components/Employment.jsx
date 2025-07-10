import { motion } from "framer-motion";

const experience = [
    {
        role: "Frontend Developer Intern",
        company: "BlueTag Technologies",
        type: "Hybrid",
        period: "Jul 2025 - Present",
        description: "Contributed to frontend development using the company's tech stack, Dart and Flutter. Worked on web and mobile tasks, focusing on responsive UI implementation and user-friendly design.",
        tech: ["Flutter", "Dart", "UI Design", "Mobile Development"]
    },
    {
        role: "Fullstack Developer Intern",
        company: "Des & Dev Ltd",
        type: "On-site",
        period: "June 2025 - July 2025",
        description: "Built internal tools using React, Tailwind, and PHP. Collaborated with UI/UX designers and sometimes created designs through research. Integrated APIs and worked in Agile sprints.",
        tech: ["React", "PHP", "MySQL", "Tailwind", "API Integration"]
    },
    ];

const education = {
    degree: "Bachelor of Technology, Computer Science",
    school: "Federal University of Technology Owerri",
    location: "Owerri, Nigeria",
    period: "Dec 2022 - Dec 2026",
    description: "Pursuing a comprehensive curriculum that combines theoretical foundations and practical applications of computer science, preparing for a career in software development."
};
const Employment = () => {
    return (  
        <section className="pt-20 pb-10 w-full transition-colors duration-300">
            <div className="lg:container mx-auto px-6 md:px-8 lg:px-12">
                <h1 className="text-center text-3xl md:text-4xl text-gray-950 dark:text-gray-50 transition-colors duration-300 font-bold tracking-wider">Employment & Education</h1>
                <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 dark:from-gray-900 dark:via-gray-400 dark:to-gray-900 transition-colors duration-300"></div>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">“Hands-on experience building real-world projects, backed by a strong academic foundation in computer science.”</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {experience.map((exp, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1 }}
                            viewport={{ once: true }} 
                            key={i} className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-600 backdrop-blur-md transition-colors duration-300">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} · {exp.type}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.tech.map((tech, index) => (
                                <span key={index} className="text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 rounded border border-gray-300 dark:border-gray-600">
                                    {tech}
                                </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    viewport={{ once: true }} 
                    className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-300 dark:border-gray-600 mt-12 backdrop-blur-md transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{education.degree}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{education.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{education.location} · {education.period}</p>
                    <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{education.description}</p>
                </motion.div>
            </div>
        </section>
    );
}
 
export default Employment;