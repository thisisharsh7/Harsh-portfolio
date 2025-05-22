import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFolder, FaFileAlt, FaTimes, FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { SparklesCore } from '../components/ui/sparkles';

// 🔧 Improved section titles and descriptions
const files = [
  {
    name: 'About Me',
    path: '/about',
    icon: <FaFileAlt aria-label="About Icon" />,
    color: 'text-blue-200',
    description: 'Get to know my background, values, and skills',
  },
  {
    name: 'Experience',
    path: '/experience',
    icon: <FaFolder aria-label="Experience Icon" />,
    color: 'text-purple-200',
    description: 'Browse my journey through startups & clients',
    highlight: true,
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: <FaFolder aria-label="Projects Icon" />,
    color: 'text-cyan-200',
    description: 'Explore a curated list of frontend builds',
  },
  {
    name: 'Achievements',
    path: '/achievements',
    icon: <FaFolder aria-label="Achievements Icon" />,
    color: 'text-green-200',
    description: 'Awards and recognitions earned along the way',
  },
  {
    name: 'Full Portfolio',
    path: '/all',
    icon: <FaFolder aria-label="All Sections Icon" />,
    color: 'text-yellow-200',
    description: 'See everything in one immersive view',
    highlight: true,
  },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [skipLoading, setSkipLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (skipLoading) {
      setLoaded(true);
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoaded(true), 200);
          return 100;
        }
        return prev + 5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [skipLoading]);

  const headingWords = 'Frontend Developer | Creative | Fast Learner | Focused on Results'.split(' ');

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white px-4 sm:px-6 md:px-8 lg:px-12"
      role="main"
      aria-label="Portfolio Homepage"
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

      <AnimatePresence mode="wait" initial={false}>
        {!loaded ? (
          <motion.section
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center relative justify-center space-y-6"
          >
            <motion.div
              className="relative w-28 h-28 border-6 border-blue-400 border-t-transparent rounded-full animate-spin-slow"
              style={{ animationDuration: '1.5s' }}
            />
            <motion.p
              className="text-xl sm:text-2xl text-center font-medium tracking-wide text-blue-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Building your experience... {progress}%
            </motion.p>
            <motion.button
              onClick={() => setSkipLoading(true)}
              className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaTimes />
              Skip
            </motion.button>
          </motion.section>
        ) : (
          <motion.section
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col relative items-center max-w-[90rem] w-full py-8 sm:py-10 md:py-14"
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight tracking-tight max-w-4xl"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05 }}
            >
              {headingWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-1 text-white drop-shadow-sm"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-center text-sm sm:text-base text-blue-100/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Crafting fast, elegant frontend interfaces that deliver real results. Let&apos;s build something incredible together.
            </motion.p>

            {/* Buttons */}
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

            {/* Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-full max-w-[80rem] px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {files.map(({ name, path, icon, color, description, highlight }, idx) => (
                <Link key={idx} href={path} passHref>
                  <motion.a
                    onClick={() => setActiveCard(idx)}
                    className={`group relative flex flex-col items-center justify-center rounded-xl bg-gray-800 bg-opacity-90 border ${highlight ? 'border-blue-400' : 'border-gray-600'
                      } shadow-md hover:bg-blue-700/30 transition-all duration-200 p-5`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`text-3xl mb-3 p-3 rounded-full bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-700 text-white shadow ${color}`}
                    >
                      {icon}
                    </div>
                    <span className="text-base font-semibold text-white text-center">{name}</span>
                    <span
                      className="mt-2 text-xs text-center text-gray-300"
                      id={`desc-${idx}`}
                    >
                      {description}
                    </span>
                  </motion.a>
                </Link>
              ))}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 1.4s linear infinite;
        }
      `}</style>
    </main>
  );
}
