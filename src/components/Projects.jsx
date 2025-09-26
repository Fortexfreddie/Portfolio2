import Conference from "../assets/images/conference.png";
import Examly from "../assets/images/Examly.png";
import lazydocs from "../assets/images/lazydocs.png";
import skydrone from "../assets/images/skydrone.png";
import lodgeFinder from "../assets/images/lodgeFinder.png";
import Troopi from "../assets/images/Troopi.png";
import lifestyle from "../assets/images/lifstyle.png";
import nexus from "../assets/images/nexus.png";
import honeycrush from "../assets/images/honeycrush.png";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const projects = [
  {
    title: "LazyDocs",
    url: "https://marketplace.visualstudio.com/items?itemName=Fazer.lazydocs",
    description:
      "LazyDocs is a VS Code extension that auto-generates project documentation, commit messages, and Baseline reports with LLM support, powered by an Express backend for API requests.",
    image: lazydocs,
    repo: "https://github.com/FrankLayza/lazydocs",
    alt: "LazyDocs",
    tags: ["VS Code Extension", "Node.js", "Express", "LLM", "Automation"],
  },
  {
    title: "Honey Crush",
    url: "https://honeycrush.netlify.app/",
    description:
      "Honey Crush is a play-to-earn puzzle game inspired by Candy Crush, powered by Honeycomb Protocol with Character Manager, Resource Manager, and Nectar Missions.",
    image: honeycrush,
    repo: "https://github.com/Fortexfreddie/HoneyCrush",
    alt: "Honey Crush",
    tags: [
      "GameFi",
      "Honeycomb Protocol",
      "Blockchain",
      "Express",
      "Typescript",
    ],
  },
  {
    title: "NFT Nexus",
    url: "https://nft-nexus-pi.vercel.app/",
    description:
      "NFT Nexus is an AI-powered platform for exploring and analyzing NFTs with insights on rarity and market trends.",
    image: nexus,
    repo: "https://github.com/FrankLayza/nft-nexus",
    alt: "NFT Nexus",
    tags: [
      "NFT",
      "Typescript",
      "AI Agent",
      "JuliaOS",
      "Express",
      "Docker",
      "DaisyUI",
      "LLM",
    ],
  },
  {
    title: "Lifestyle Blog",
    url: "http://lifestyleblogs.netlify.app/",
    description:
      "Lifestyle is your go-to blog for fresh trends, and inspiring stories in fashion, wellness, tech, and culture to stay informed every day.",
    image: lifestyle,
    repo: "https://github.com/Fortexfreddie/LIFESTYLEBLOG",
    alt: "Lifestyle Blog",
    tags: [
      "Blog",
      "React",
      "Tailwind",
      "PHP",
      "MySQL",
      "DaisyUI",
      "Framer Motion",
    ],
  },
  {
    title: "Lodge Finder",
    url: "https://lodgefinders.netlify.app",
    description:
      "A platform for finding and booking lodges, hotels, and guest houses.",
    image: lodgeFinder,
    repo: "https://github.com/Fortexfreddie/Lodge_Finder_Project",
    alt: "Lodge Finder",
    tags: ["Lodge", "React", "Tailwind", "PHP", "MySQL", "Javascript"],
  },
  {
    title: "Skydrone",
    url: "https://skydrones.netlify.app",
    description:
      "Skydrone's innovative drone technology is bringing the latest farming innovations to farms around the world.",
    image: skydrone,
    repo: "https://github.com/Fortexfreddie/SKYDRONE",
    alt: "skydrone",
    tags: ["Farms", "Agrotech", "React", "CSS", "Tailwind", "Javascript"],
  },
  {
    title: "Examly",
    url: "https://examlyy.netlify.app",
    description:
      "The official certification Examination platform for Human-Computer interface.",
    image: Examly,
    repo: "https://github.com/Fortexfreddie/online-exam-platform",
    alt: "Examly",
    tags: ["Exams", "React", "AOS", "Express.js", "Tailwind", "NestJS"],
  },
  {
    title: "Tech Maverick",
    url: "https://techmaverick.freesite.online",
    description:
      "A conference platform for hosting of conferences, events, seminars e.t.c",
    image: Conference,
    repo: "https://github.com/Fortexfreddie/Tech-Maverick",
    alt: "Tech Maverick",
    tags: ["Conference", "HTML", "CSS", "Bootstrap"],
  },
];

const inDevelopmentProject = [
  {
    title: "Troopi",
    url: "https://troopi.vercel.app/",
    description:
      "A futuristic Pi-powered marketplace combining freelance services and physical products, with Pi and fiat payment integration.",
    image: Troopi,
    repo: "https://github.com/Fortexfreddie/Troopi",
    alt: "Troopi Marketplace",
    tags: ["Pi Network", "React", "Tailwind", "Framer Motion", "Typescript"],
  },
];
const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <section
      id="Projects"
      className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10 w-full transition-colors duration-300"
    >
      <div className="lg:container mx-auto px-6 md:px-8 lg:px-12">
        <h1 className="text-center text-3xl md:text-4xl text-gray-950 dark:text-gray-50 transition-colors duration-300 font-bold tracking-wider">
          Featured Projects
        </h1>
        <div className="mt-4 h-0.5 w-32 mx-auto bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 dark:from-gray-900 dark:via-gray-400 dark:to-gray-900 transition-colors duration-300"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">
          “Projects that showcase my frontend skills and full-stack
          capabilities.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {inDevelopmentProject.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: isMobile ? 0.1 : 0.2, // Stagger based on screen size
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
              key={index}
              className="group bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 backdrop-blur-md hover:shadow-md active:shadow-md transition-colors duration-300 overflow-hidden h-fit md:h-[27rem] flex flex-col"
            >
              <div className="h-32 md:h-2/5 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/30 active:bg-white/30 hover:border-gray-500 transition-colors duration-300"
                    >
                      <ExternalLink size={18} strokeWidth={2} />
                      <p className="text-sm font-medium">Visit Live Site</p>
                    </a>
                  </div>
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="px-6 py-6 md:py-4">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-lg font-semibold text-gray-600 dark:text-gray-50 transition-colors duration-300 mb-4">
                      {project.title}
                    </p>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-yellow-500/30 border border-yellow-600/20 dark:border-yellow-500/40 text-yellow-700 dark:text-yellow-300 transition-colors duration-300 mb-4">
                      In Development
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4 md:line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-row flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-600 dark:text-gray-50 font-medium bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 py-1 px-2 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-row gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300"
                    >
                      <ExternalLink size={18} strokeWidth={2} />
                      <p className="text-sm font-medium">Demo</p>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300"
                    >
                      <Code size={18} strokeWidth={2} />
                      <p className="text-sm font-medium">Details</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay:
                  (inDevelopmentProject.length + 1 + index) *
                  (isMobile ? 0.1 : 0.2), // Stagger based on position and screen size
                ease: [0.25, 0.8, 0.25, 1],
              }}
              viewport={{ once: true }}
              key={index}
              className="group bg-gray-200 dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-600 backdrop-blur-md hover:shadow-md active:shadow-md transition-colors duration-300 overflow-hidden h-fit md:h-[27rem] flex flex-col"
            >
              <div className="h-32 md:h-2/5 bg-gradient-to-br from-gray-900 to-gray-800 flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/30 active:bg-white/30 hover:border-gray-500 transition-colors duration-300"
                    >
                      <ExternalLink size={18} strokeWidth={2} />
                      <p className="text-sm font-medium">Visit Live Site</p>
                    </a>
                  </div>
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="px-6 py-6 md:py-4">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-lg font-semibold text-gray-600 dark:text-gray-50 transition-colors duration-300 mb-4">
                      {project.title}
                    </p>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-500/20 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 transition-colors duration-300 mb-4">
                      Live
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4 md:line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-row flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-600 dark:text-gray-50 font-medium bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 py-1 px-2 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-row gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300"
                    >
                      <ExternalLink size={18} strokeWidth={2} />
                      <p className="text-sm font-medium">Demo</p>
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-gray-300 rounded-lg bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 transition-colors duration-300"
                    >
                      <Code size={18} strokeWidth={2} />
                      <p className="text-sm font-medium">Details</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center mt-10"
        >
          <div className="text-center mb-5">
            <p className="text-2xl text-gray-900 dark:text-gray-100 transition-colors duration-300 font-bold tracking-wider">
              Want to see more of my work?
            </p>
          </div>
          <div>
            <a
              href="https://github.com/Fortexfreddie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-950 rounded-lg border border-gray-800 hover:border-emerald-700 text-gray-300 hover:text-emerald-600 transition-all duration-300"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View Github Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
 
export default Projects;