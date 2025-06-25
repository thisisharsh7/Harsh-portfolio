import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFolder, FaFileAlt, FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';

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
  const [activeCard, setActiveCard] = useState(null);
  const headingWords = 'Software Engineer | UX-Focused'.split(' ');

  return (
    <>
      <Head>
        <title>Harsh | Software Engineer</title>
        <meta name="description" content="Software Engieer with experience across 5+ startups and international clients. Passionate about building modern, performant web apps." />
        <link rel="canonical" href="https://dev-harsh.vercel.app/" />
        <meta property="og:title" content="Harsh | Software Engieer" />
        <meta property="og:description" content="Worked with international clients and reviewed codebases across startups." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:alt" content="Harsh's portfolio preview" />
        <meta property="og:url" content="https://dev-harsh.vercel.app/" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="twitter:image:alt" content="Harsh's portfolio preview" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Harsh',
              'jobTitle': 'Software Engieer',
              'url': 'https://dev-harsh.vercel.app',
              'sameAs': [
                'https://github.com/thisisharsh7',
                'https://linkedin.com/in/thisisharsh7',
                'https://twitter.com/thisisharsh7',
              ],
              'image': 'https://dev-harsh.vercel.app/images/Harsh_Profile_Pic.jpg',
            }),
          }}
        />
      </Head>

      <motion.section
        className="flex flex-col relative items-center min-h-screen justify-center  w-full sm:pt-12 pt-8 pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        role="main"
        aria-label="Portfolio Home page"
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
              className="inline-block mr-2 text-white drop-shadow-sm"
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
          Crafting thoughtful, user-focused software that feels fast, looks clean, and works beautifully. Let&apos;s build something impactful together.
        </motion.p>

        <motion.div
          className="mt-6 flex items-center gap-3"
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
                className={`group relative flex flex-col items-center justify-center rounded-xl bg-gray-800 bg-opacity-90 border ${highlight ? 'border-blue-400' : 'border-gray-600'} shadow-md hover:bg-blue-700/30 transition-all duration-200 p-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Navigate to ${name} page`}
              >
                <div
                  className={`text-3xl mb-3 p-3 rounded-full bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-700 text-white shadow ${color}`}
                >
                  {icon}
                </div>
                <span className="text-base font-semibold text-white text-center">{name}</span>
                <span className="mt-2 text-xs text-center text-gray-300">{description}</span>
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
