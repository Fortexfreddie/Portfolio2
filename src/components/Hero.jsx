import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import freddie from "../assets/image.png";
import freddie2 from "../assets/photo.jpg";
import { ExternalLink, Download } from 'lucide-react';

const Hero = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const blobs = document.querySelectorAll('.animated-blob');

        blobs.forEach((blob, index) => {
            let angle = Math.random() * Math.PI * 2; // start angle
            const speed = 0.01 + Math.random() * 0.02;
            const baseScale = 1 + Math.random() * 0.3;

            function animate() {
            const x = Math.sin(angle) * 50;
            const y = Math.cos(angle) * 50;
            const scale = baseScale + Math.sin(angle * 1.5) * 0.1;

            blob.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;

            angle += speed;
            requestAnimationFrame(animate);
            }

            animate();
        });
    }, []);

    return (  
        <section className="relative pt-28 pb-10 md:pt-36 w-full h-fit lg:h-screen 2xl:h-fit overflow-hidden">
            <div className="absolute inset-0 opacity-30 h-full">
                <div className="absolute top-10 left-20 w-24 h-24 rounded-full bg-emerald-400/20 animated-blob"></div>
                <div className="absolute top-16 left-40 w-24 h-24 rounded-full bg-emerald-400/20 animated-blob"></div>
                <div className="absolute top-16 right-20 w-24 h-24 rounded-full bg-emerald-400/20 animated-blob"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-emerald-600/20 animated-blob"></div>
                <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-emerald-400/20 animated-blob"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-500/20 animated-blob"></div>
                <div className="absolute bottom-10 left-16 w-40 h-40 rounded-full bg-teal-400/20 animated-blob"></div>
                <div className="absolute bottom-6 right-1/6 w-20 h-20 rounded-full bg-emerald-500/20 animated-blob"></div>
                <div className="absolute bottom-5 left-1/3 w-36 h-36 rounded-full bg-teal-600/20 animated-blob"></div>
                <div className="absolute bottom-5 right-1/4 w-60 h-60 rounded-full bg-emerald-300/20 animated-blob"></div>
            </div>
            <div className="lg:container mx-auto px-6 md:px-8 lg:px-12 relative z-30">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 rounded-full text-sm font-medium transition-colors duration-300 min-w-[8rem] w-fit">
                            <Typewriter
                                words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Tech Enthusiast']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <h1 className="text-4xl md:text-6xl font-semibold text-gray-950 dark:text-gray-50 leading-tighter transition-colors duration-300">
                            Hi, I’m <br />
                            <span className={active === 0 ? "text-emerald-600 transition-all duration-500" : "text-gray-500 blur-xs transition-all duration-500"}>
                                Fred
                            </span>{" "}
                            <span className={active === 1 ? "text-emerald-600 transition-all duration-500" : "text-gray-500 blur-xs transition-all duration-500"}>
                                Kamsy
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">Full-Stack Developer based in Enugu, Nigeria, with 2+ years of experience building fast, scalable web apps and APIs. I enjoy turning complex ideas into simple, user-friendly solutions and constantly explore new tech to stay ahead.</p>
                        <div className="flex flex-nowrap gap-4">
                            <a href="#Projects" className="inline-flex items-center gap-2 px-4 py-2 text-gray-50 rounded-lg bg-emerald-700 backdrop-blur-sm border border-white/10 hover:bg-emerald-800 active:bg-emerald-800 hover:border-gray-500 active:border-gray-500 transition-colors duration-300">
                                <ExternalLink size={18} strokeWidth={2} />
                                <p className="Geist text-sm font-medium">View My Work</p>
                            </a>
                            <a href="" onClick={(e) => e.preventDefault()} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 text-gray-50 rounded-lg bg-emerald-700 backdrop-blur-sm border border-white/10 hover:bg-emerald-800 active:bg-emerald-800 hover:border-gray-500 active:border-gray-500 transition-colors duration-300">
                                <Download size={18} strokeWidth={2} />
                                <p className="Geist text-sm font-medium">Download CV</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-6 w-full lg:w-1/2">
                        <div className="">
                            <motion.img
                            src={freddie2}
                            alt="Freddie"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                duration: 0.4,
                                scale: { type: "spring", visualDuration: 1.5, bounce: 0.5 },
                            }}
                            className="w-60 md:w-[22rem] max-w-[22rem] rounded-full border-8 border-gray-500 hover:border-emerald-700 transition-colors duration-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Hero;