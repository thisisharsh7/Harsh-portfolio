import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SparklesCore } from '../components/ui/sparkles';

// Sample projects with new additions
const sampleProjects = [
    {
        title: 'My Shop',
        description: 'A responsive e-commerce dashboard with custom CSS animations and integrated query handling using EmailJS.',
        tech: ['React', 'CSS', 'EmailJS'],
        liveLink: 'https://my-shop123.netlify.app/',
        codeLink: 'https://github.com/thisisharsh7/my-shop',
    },
    {
        title: '30 Days of Code',
        description: 'A collection of beginner-friendly web projects built over 30 days without tutorials, demonstrating self-taught frontend skills.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://thisisharsh7.github.io/30-Days-of-code/',
        codeLink: 'https://github.com/thisisharsh7/30-Days-of-code',
    },
    {
        title: 'Story Generator App',
        description: 'A creative app that generates random stories based on user prompts using the OpenAI API, exploring AI-powered content generation.',
        tech: ['React', 'OpenAI API'],
        liveLink: '#',
        codeLink: 'https://github.com/thisisharsh7/story-app',
    },
    {
        title: 'React Chatbot',
        description: 'A secure chatbot built with React Chatbot Kit, featuring protected routes and styled with TailwindCSS.',
        tech: ['React', 'React Chatbot Kit', 'TailwindCSS'],
        liveLink: 'https://yes-chatbot.netlify.app/',
        codeLink: 'https://github.com/thisisharsh7/React-chatbot',
    },
    {
        title: 'Dashboard UI',
        description: 'A sleek and responsive admin dashboard created with Next.js and TailwindCSS, ideal for visualizing and managing data.',
        tech: ['Next.js', 'TailwindCSS'],
        liveLink: 'https://yes-dashboard.vercel.app/',
        codeLink: 'https://github.com/thisisharsh7/Dashboard-Ui',
    },
    {
        title: 'Clones Trio',
        description: 'A set of clones of real-world websites like Netflix, DigitalOcean, and Amazon, built using React and styled with TailwindCSS and plain CSS.',
        tech: ['React', 'TailwindCSS'],
        liveLink: '#',
        codeLink: 'https://github.com/thisisharsh7/14-days-of-Clones',
    },
    {
        title: 'Hacker News',
        description: 'A news app built using the Hacker News API. Includes search functionality and the ability to view comment threads.',
        tech: ['React', 'TailwindCSS', 'API'],
        liveLink: 'https://yes-news.netlify.app/',
        codeLink: 'https://github.com/thisisharsh7/news-app',
    },
    {
        title: 'Crater',
        description: 'A responsive dashboard designed for an AI-powered firm, built using React and styled with TailwindCSS.',
        tech: ['React', 'TailwindCSS'],
        liveLink: 'https://crater-ai.netlify.app/',
        codeLink: 'https://github.com/thisisharsh7/crater-assignment',
    },
];


// Animation variants for reduced motion support
const motionVariants = {
    section: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: 'easeOut' },
    },
    card: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    },
};

// Check for reduced motion preference
const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ProjectsPage() {
    const [visibleCount, setVisibleCount] = useState(5);

    return (
        <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white lg:pt-12 sm:pt-8 pt-6 px-4 md:px-6 lg:px-8"
            role="main"
            aria-label="Portfolio Projectspage"
        >
            <div className="absolute inset-0 -z-2 select-none pointer-events-none">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1.0}
                    particleDensity={80}
                    className="w-full h-full"
                    particleColor="#bae6fd"
                />
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
            </div>

            {/* Fixed Home Button */}
            <motion.div
                initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={isReducedMotion ? {} : { duration: 0.6, delay: 1 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Link href="/">
                    <motion.a
                        whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                        whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                        className="flex items-center gap-2 cursor-pointer rounded-full bg-cyan-600 px-5 py-2 text-white font-semibold shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                        aria-label="Return to homepage"
                    >
                        <FaHome className="text-xl" /> Home
                    </motion.a>
                </Link>
            </motion.div>

            {/* Main Content */}
            <motion.section
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className="max-w-[90rem] w-full relative pb-24"
            >
                <h2
                    className="text-3xl sm:text-4xl font-bold text-blue-100 mb-10 text-center"
                    id="projects-heading"
                >
                    Projects - Portfolio.md
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {sampleProjects.slice(0, visibleCount).map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={isReducedMotion ? {} : motionVariants.card.initial}
                            animate={isReducedMotion ? {} : motionVariants.card.animate}
                            transition={isReducedMotion ? {} : { ...motionVariants.card.transition, delay: idx * 0.1 }}
                            whileHover={isReducedMotion ? {} : { scale: 1.03, boxShadow: '0 8px 20px rgba(96, 165, 250, 0.5)' }}
                            className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col"
                            role="region"
                            aria-labelledby={`project-title-${idx}`}
                        >
                            <h3
                                id={`project-title-${idx}`}
                                className="text-lg sm:text-xl font-semibold text-white mb-4"
                            >
                                {project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 mb-6 flex-grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {project.tech.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        initial={isReducedMotion ? {} : { opacity: 0, y: 10 }}
                                        animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                                        transition={isReducedMotion ? {} : { duration: 0.4, delay: i * 0.05 }}
                                        className="px-3 py-1 text-xs sm:text-sm bg-cyan-700 text-white rounded-full"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex gap-6">
                                {project.liveLink !== '#' && (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                                        whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                        aria-label={`View live demo of ${project.title}`}
                                    >
                                        <FaExternalLinkAlt />
                                        Live
                                    </motion.a>
                                )}
                                <motion.a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                                    whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                                    className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label={`View source code of ${project.title}`}
                                >
                                    <FaGithub />
                                    Code
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {visibleCount < sampleProjects.length && (
                    <motion.div
                        initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
                        animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                        transition={isReducedMotion ? {} : { duration: 0.5, delay: 0.5 }}
                        className="mt-10 text-center"
                    >
                        <button
                            onClick={() => setVisibleCount(sampleProjects.length)}
                            className="text-cyan-300 text-sm sm:text-base font-semibold hover:underline hover:text-cyan-200 transition duration-200 focus:outline-none"
                            aria-label="Load more projects"
                        >
                            + View More
                        </button>
                    </motion.div>
                )}
            </motion.section>
        </main>
    );
}