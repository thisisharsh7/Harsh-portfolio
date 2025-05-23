"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const HomeButton = () => (
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
);

export default HomeButton;