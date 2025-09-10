import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFolder, FaFileAlt, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

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

const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const nameWords = ['Hi,', "I'm", 'Harsh'];
  const titleWords = 'Full-Stack Developer | Open Source Maintainer'.split(' ');

  return (
    <>
      <Head>
        <title>Harsh Kumar | Full-Stack Developer - React, Next.js, Node.js</title>
        <meta name="description" content="Full-Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, and Node.js. Currently sponsored open source maintainer at YC-backed Epicenter (YC S25)." />
        <meta name="keywords" content="Harsh Kumar, Full-Stack Developer, React Developer, Next.js, TypeScript, Node.js, Tailwind CSS, Firebase, MongoDB, AI Integration, WebRTC, Software Engineer, YC S25, Open Source Maintainer, Epicenter, Frontend Developer, Web Developer" />
        <link rel="canonical" href="https://dev-harsh.vercel.app/" />
        <meta property="og:title" content="Harsh Kumar | Full-Stack Developer - React, Next.js, Node.js" />
        <meta property="og:description" content="Full-Stack Developer with 2+ years of experience. Currently sponsored open source maintainer at YC-backed Epicenter (YC S25)." />
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
              'name': 'Harsh Kumar',
              'jobTitle': 'Full-Stack Developer | Open Source Maintainer',
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
        <motion.div className="flex flex-col items-center mb-6">
          {/* <motion.div
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/images/Harsh_Profile_Pic.jpg"
              alt="Harsh's Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-500 shadow-lg object-contain"
              priority
            />
          </motion.div> */}

          <motion.div
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight mb-3 sm:mb-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {nameWords.map((word, idx) => (
              <motion.span
                key={idx}
                className={`inline-block mr-2 ${idx === 2 ? 'text-blue-400' : 'text-white'} drop-shadow-sm`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-semibold text-center leading-tight tracking-tight max-w-4xl mb-2"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05 }}
          >
            {titleWords.map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-2 text-gray-300 drop-shadow-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        <motion.p
          className="max-w-xl text-center text-sm sm:text-base text-blue-100/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Full-Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, and Node.js. Currently sponsored open source maintainer at YC-backed company.
        </motion.p>

        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="/doc/Harsh_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Download Harsh's resume"
          >
            <FaDownload />
            <span>Resume</span>
          </a>
          <a
            href="mailto:9u.harsh@gmail.com"
            className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Contact Harsh via email"
          >
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </motion.div>

        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.a
            href="https://github.com/thisisharsh7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isReducedMotion ? {} : { scale: 1.2, y: -2 }}
            whileTap={isReducedMotion ? {} : { scale: 0.9 }}
            className="text-2xl text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2"
            aria-label="Visit Harsh's GitHub profile"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/thisisharsh7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isReducedMotion ? {} : { scale: 1.2, y: -2 }}
            whileTap={isReducedMotion ? {} : { scale: 0.9 }}
            className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2"
            aria-label="Visit Harsh's LinkedIn profile"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/thisisharsh7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={isReducedMotion ? {} : { scale: 1.2, y: -2 }}
            whileTap={isReducedMotion ? {} : { scale: 0.9 }}
            className="text-2xl text-gray-400 hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full p-2"
            aria-label="Visit Harsh's Twitter profile"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>


        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-full max-w-[80rem] px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
