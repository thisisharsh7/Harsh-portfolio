import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode, FaDownload, FaFileAlt } from 'react-icons/fa';

const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SocialLinks = () => (
    <div className="mt-4 flex flex-col items-center gap-4">
        <div className="flex gap-5">
            <motion.a
                href="https://github.com/thisisharsh7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                className="text-2xl text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Visit Harsh's GitHub profile"
            >
                <FaGithub />
            </motion.a>
            <motion.a
                href="https://linkedin.com/in/thisisharsh7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                className="text-2xl text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Visit Harsh's LinkedIn profile"
            >
                <FaLinkedin />
            </motion.a>
            <motion.a
                href="https://twitter.com/thisisharsh7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                className="text-2xl text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Visit Harsh's Twitter profile"
            >
                <FaTwitter />
            </motion.a>
            <motion.a
                href="https://www.frontendmentor.io/profile/thisisharsh7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isReducedMotion ? {} : { scale: 1.1 }}
                whileTap={isReducedMotion ? {} : { scale: 0.9 }}
                className="text-2xl text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Visit Harsh's Frontend Mentor profile"
            >
                <FaLaptopCode />
            </motion.a>
        </div>
        <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            <a
                href="/doc/Harsh_Resume.pdf"
                download
                className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Download Harsh's resume"
            >
                <FaDownload />
                Resume
            </a>
            <a
                href="mailto:9u.harsh@gmail.com"
                className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact Harsh via email"
            >
                <FaFileAlt />
                Contact
            </a>
        </motion.div>
    </div>
);

export default SocialLinks;