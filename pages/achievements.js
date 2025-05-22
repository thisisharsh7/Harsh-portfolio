import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaExternalLinkAlt } from 'react-icons/fa';
import { SparklesCore } from '../components/ui/sparkles';

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

export default function AchievementsPage() {
    return (
        <main
            className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white lg:pt-12 sm:pt-8 pt-6 px-4 md:px-6 lg:px-8 flex flex-col items-center"
            role="main"
            aria-label="Achievements page"
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


            {/* Back Button (Top-Left) */}
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
                    id="achievements-heading"
                >
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
        </main>
    );
};