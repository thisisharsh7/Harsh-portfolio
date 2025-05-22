import Image from 'next/image';
import { FaHome, FaGithub, FaLinkedin, FaDownload, FaTwitter, FaLaptopCode, FaFileAlt } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SparklesCore } from '../components/ui/sparkles';

const motionVariants = {
    section: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' },
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

const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function AboutPage() {
    return (
        <main
            className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white px-4 md:px-6 lg:px-8"
            role="main"
            aria-label="Portfolio Aboutpage"
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

            <motion.section
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className="max-w-[90rem] w-full lg:pt-12 sm:pt-8 pt-6 pb-24 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10"
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
                        className="flex items-center gap-2 cursor-pointer rounded-full bg-cyan-600 px-5 py-2 text-white font-semibold shadow-md hover:bg-cyan-700"
                    >
                        <FaHome className="text-xl" /> Home
                    </motion.a>
                </Link>
            </motion.div>
        </main>
    );
}
