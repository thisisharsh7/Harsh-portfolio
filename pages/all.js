import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaDownload, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';
import { SparklesCore } from '../components/ui/sparkles';

// Animation variants for consistent animations
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
    profile: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.2 },
    },
    bio: {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.4 },
    },
};

// Check for reduced motion preference
const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Sample projects data
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


// Experience data
const experiences = [
    {
        company: 'Userology',
        role: 'Software Engineer Intern',
        period: 'Aug 2024 - Jan 2025',
        location: 'San Francisco Bay Area · Remote',
        description: 'Worked on developing scalable web applications using Next.js, Firebase, and Tailwind CSS.',
    },
    {
        company: 'DRDO, Ministry of Defence, Govt. of India',
        role: 'Research And Development Intern',
        period: 'Jul 2024 - Aug 2024',
        location: 'SSPL, New Delhi, India · On-site',
        description: 'Assisted in research and development of advanced defense technologies.',
    },
    {
        company: 'VaySolar',
        role: 'Frontend Developer',
        period: 'Nov 2023 - May 2024',
        location: 'New Delhi, India · Remote',
        description: 'Built customer and vendor portals using React and Material UI. Used Zustand for state management.',
    },
    {
        company: 'Decentraclasses',
        role: 'Frontend Developer',
        period: 'Oct 2023 - Feb 2024',
        location: 'New Delhi, India · Remote',
        description: 'Created animated web pages and optimized navigation. Improved load speed and UX.',
    },
    {
        company: 'Botter Solutions Pvt. Ltd.',
        role: 'Frontend Developer',
        period: 'Nov 2023 - Dec 2023',
        location: 'New Delhi, India · Remote',
        description: 'Customized MUI data grids and handled API integrations for a drilling software.',
    },
    {
        company: 'GirlScript Summer of Code',
        role: 'Contributor',
        period: 'Mar 2022 - May 2022',
        location: 'India · Remote',
        description: 'Contributed to open-source projects using CSS and JavaScript.',
    },
];


// Achievements data
const achievements = [
    {
        title: 'Open Source Contributor',
        description: 'Contributed to Meshery by improving website features and fixed typos on the MUI documentation site.',
        date: '2023–2024',
        link: 'https://github.com/meshery/meshery.io/pull/1634',
        link1: 'https://github.com/mui/mui-x/pull/11967',
    },
    {
        title: 'Reviewer at Frontend Mentor',
        description: 'Reviewed 100+ frontend projects, offering feedback to help developers enhance their code and design practices.',
        date: '2022–2025',
        link: 'https://www.frontendmentor.io/profile/thisisharsh7',
        link1: '#',
    },
    {
        title: 'Intern at DRDO',
        description: 'Selected for a 2-month internship at DRDO, contributing to high-impact research and development tasks.',
        date: 'Summer 2024',
        link: '#', // Optional: Add a link if you have a certificate or project page
        link1: '#',
    },

    {
        title: 'Built AI-powered Website (MERN Stack)',
        description: 'Developed a full-stack AI chatbot platform with video chat and image generation. Gained over 10,000 users and earned $1500+.',
        date: 'Jan 2024',
        link: '#',
        link1: '#',
    },
    {
        title: 'Custom Portfolio for International Student',
        description: 'Created a responsive, visually appealing React-based portfolio for an international Ivy League applicant.',
        date: 'Feb 2023',
        link: '#',
        link1: '#',
    },
];


export default function FullPortfolioPage() {
    const [visibleCount, setVisibleCount] = useState(3);

    // Navigation items for quick section access
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'achievements', label: 'Achievements' },
    ];

    return (
        <main
            className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white px-3 sm:px-6 md:px-8"
            role="main"
            aria-label="Full Portfolio page"
        >
            {/* SparklesCore Background */}
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

            {/* Sticky Navigation */}
            <motion.nav
                initial={isReducedMotion ? {} : { opacity: 0, y: -20 }}
                animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                transition={isReducedMotion ? {} : { duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg shadow-md"
            >
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-center gap-4 sm:gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-sm sm:text-base font-medium text-blue-200 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            aria-label={`Navigate to ${item.label} section`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </motion.nav>

            {/* About Section */}
            <motion.section
                id="about"
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className="max-w-[90rem] w-full pt-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10"
            >
                <motion.div
                    initial={isReducedMotion ? {} : motionVariants.profile.initial}
                    animate={isReducedMotion ? {} : motionVariants.profile.animate}
                    transition={isReducedMotion ? {} : motionVariants.profile.transition}
                    className="w-full md:w-1/3 flex flex-col items-center"
                >
                    <div className="bg-black/30 backdrop-blur-md relative p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-800 w-full flex flex-col items-center">
                        <motion.div
                            whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                            whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                            className="relative"
                        >
                            <Image
                                src="/images/Harsh_Profile_Pic.jpg"
                                alt="Harsh Profile"
                                width={200}
                                height={200}
                                className="rounded-full border-4 border-blue-500 shadow-lg object-contain bg-white"
                                priority
                            />

                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 text-center">Harsh — Frontend Developer</h3>
                        <p className="text-sm sm:text-base text-gray-300 mt-2 text-center">Crafting pixels into solutions 🚀</p>
                        <div className="mt-4 flex gap-5">
                            <motion.a
                                href="https://github.com/thisisharsh7"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                                className="text-2xl text-white hover:text-blue-400"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/thisisharsh7"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                                className="text-2xl text-white hover:text-blue-400"
                            >
                                <FaLinkedin />
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/thisisharsh7"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                                className="text-2xl text-white hover:text-blue-400"
                            >
                                <FaTwitter />
                            </motion.a>
                            <motion.a
                                href="https://www.frontendmentor.io/profile/thisisharsh7"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                                className="text-2xl text-white hover:text-blue-400"
                            >
                                <FaLaptopCode />
                            </motion.a>
                        </div>
                        <motion.div
                            className="mt-6 flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <a
                                href="/doc/Harsh_Resume.pdf"
                                download
                                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                            >
                                <FaDownload />
                                Resume
                            </a>
                            <a
                                href="mailto:9u.harsh@gmail.com"
                                className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
                            >
                                <FaFileAlt />
                                Contact
                            </a>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={isReducedMotion ? {} : motionVariants.bio.initial}
                    animate={isReducedMotion ? {} : motionVariants.bio.animate}
                    transition={isReducedMotion ? {} : motionVariants.bio.transition}
                    className="w-full relative md:w-2/3 bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800"
                    role="region"
                    aria-labelledby="bio-heading"
                >
                    <h2
                        id="bio-heading"
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-100 mb-6"
                    >
                        About Me - README.md
                    </h2>
                    <div className="space-y-6 text-sm sm:text-base md:text-lg leading-relaxed font-mono text-gray-200">
                        <motion.div
                            initial={isReducedMotion ? {} : { opacity: 0, y: 10 }}
                            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={isReducedMotion ? {} : { duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-cyan-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-300">👋</span> Hey There!
                            </h3>
                            <p>
                                I&apos;m Harsh — a passionate Frontend Developer, Full-Stack Explorer, and Creative
                                Technophile. I live for crafting beautiful, responsive web experiences and diving deep
                                into the tech stack to solve real-world problems.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={isReducedMotion ? {} : { opacity: 0, y: 10 }}
                            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={isReducedMotion ? {} : { duration: 0.5, delay: 0.5 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-cyan-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-300">🔭</span> Currently Working On
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Sharpening my Data Structures & Algorithms (DSA) skills.</li>
                                <li>
                                    Expanding expertise in MongoDB, React, Node.js, Firebase, Docker, and Express.
                                </li>
                                <li>Exploring Web3 technologies and ethical hacking.</li>
                                <li>Building and optimizing full-stack apps.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={isReducedMotion ? {} : { opacity: 0, y: 10 }}
                            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={isReducedMotion ? {} : { duration: 0.5, delay: 0.6 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-cyan-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-300">⚡</span> What I Do
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Build responsive websites with React, Next.js, and TailwindCSS.
                                </li>
                                <li>
                                    Develop full-stack apps with MongoDB, Express, Node.js, and Firebase
                                    authentication.
                                </li>
                                <li>Integrate Stripe & Verotel for secure payment processing.</li>
                                <li>
                                    Solve complex problems and refactor legacy code (reviewed 50+ directories).
                                </li>
                                <li>
                                    Create AI-enhanced videos and manage content for Instagram and YouTube.
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={isReducedMotion ? {} : { opacity: 0, y: 10 }}
                            animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                            transition={isReducedMotion ? {} : { duration: 0.5, delay: 0.7 }}
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-cyan-100 mb-2 flex items-center gap-2">
                                <span className="text-cyan-300">🛠️</span> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'C',
                                    'C++',
                                    'JavaScript',
                                    'Python',
                                    'TypeScript',
                                    'HTML5',
                                    'CSS3',
                                    'React',
                                    'Next.js',
                                    'Node.js',
                                    'Express.js',
                                    'TailwindCSS',
                                    'Bootstrap',
                                    'MongoDB',
                                    'Firebase',
                                    'Netlify',
                                    'Vercel',
                                    'Git',
                                    'GitHub',
                                    'Postman',
                                    'VS Code',
                                    'Figma',
                                    'ElevenLabs',
                                    'AI'
                                ].map((tech, idx) => (
                                    <motion.span
                                        key={tech}
                                        initial={isReducedMotion ? {} : { opacity: 0, y: 10 }}
                                        animate={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                                        transition={isReducedMotion ? {} : { duration: 0.4, delay: idx * 0.05 }}
                                        whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                                        className="px-3 py-1 text-xs sm:text-sm bg-cyan-700 text-white rounded-full"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                id="experience"
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className="max-w-[90rem] w-full pt-20"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white relative">Experience Timeline</h2>

                <div className="relative max-w-7xl mx-auto pb-24">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-600"></div>
                    <div className="flex flex-col gap-16 pt-12">
                        {experiences.map((exp, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative w-full flex flex-col md:flex-row items-center ${isRight ? 'md:justify-start' : 'md:justify-end'}`}
                                >
                                    <div className={`w-full md:w-1/2 px-2 md:px-4 ${isRight ? 'md:pr-10' : 'md:pl-10'}`}>
                                        <div className="bg-black/30 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
                                            <h3 className="text-xl text-white font-semibold">{exp.role}</h3>
                                            <p className="text-md font-bold text-cyan-300">{exp.company}</p>
                                            <p className="text-sm text-white">{exp.period} · {exp.location}</p>
                                            <p className="mt-2 text-sm text-blue-100">{exp.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-5 h-5 rounded-full border-4 border-white z-10"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className="max-w-[90rem] w-full pt-20 relative"
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

            {/* Achievements Section */}
            <motion.section
                id="achievements"
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className="max-w-[90rem] w-full pt-20 pb-24 relative"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-100 mb-8 text-center" id="achievements-heading">
                    Achievements - Milestones.md
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={isReducedMotion ? {} : motionVariants.card.initial}
                            animate={isReducedMotion ? {} : motionVariants.card.animate}
                            transition={isReducedMotion ? {} : { ...motionVariants.card.transition, delay: index * 0.1 }}
                            whileHover={isReducedMotion ? {} : { scale: 1.03, boxShadow: '0 8px 20px rgba(96, 165, 250, 0.5)' }}
                            className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col"
                            role="region"
                            aria-labelledby={`achievement-title-${index}`}
                        >
                            <h3
                                id={`achievement-title-${index}`}
                                className="text-lg sm:text-xl font-semibold text-white mb-2"
                            >
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-3">{item.date}</p>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">
                                {item.description}
                            </p>
                            {item.link !== '#' && (
                                <motion.a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                                    whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label={`View details of ${item.title}`}
                                >
                                    <FaExternalLinkAlt />
                                    View More
                                </motion.a>
                            )}
                            {item.link1 !== '#' && (
                                <motion.a
                                    href={item.link1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={isReducedMotion ? {} : { scale: 1.05 }}
                                    whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                    aria-label={`View details of ${item.title}`}
                                >
                                    <FaExternalLinkAlt />
                                    View More
                                </motion.a>
                            )}

                        </motion.div>
                    ))}
                </div>
            </motion.section>

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
                        className="flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2 text-white font-semibold shadow-md hover:bg-cyan-700"
                        aria-label="Return to homepage"
                    >
                        <FaHome className="text-xl" /> Home
                    </motion.a>
                </Link>
            </motion.div>
        </main>
    );
}