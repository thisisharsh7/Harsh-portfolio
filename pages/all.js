import { useState, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';
import SparklesBackground from '../components/SparklesBackground';
import HomeButton from '../components/HomeButton';
import { sampleProjects, experiences, achievements } from '../constants/data';

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

const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
];

export default function FullPortfolioPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Head>
        <title>Harsh | Full Portfolio</title>
        <meta name="description" content="A comprehensive overview of Harsh's portfolio, including about, experience, projects, and achievements." />
        <link rel="canonical" href="https://dev-harsh.vercel.app/all" />
        <meta property="og:title" content="Harsh | Full Portfolio" />
        <meta property="og:description" content="Explore Harsh's complete portfolio, showcasing frontend and full-stack expertise." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:alt" content="Harsh's full portfolio overview" />
        <meta property="og:url" content="https://dev-harsh.vercel.app/all" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <meta name="twitter:image:alt" content="Harsh's full portfolio overview" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              'name': 'Harsh | Full Portfolio',
              'url': 'https://dev-harsh.vercel.app/all',
              'description': 'A complete showcase of Harsh’s professional journey, projects, and achievements.',
              'publisher': {
                '@type': 'Person',
                'name': 'Harsh',
                'sameAs': [
                  'https://github.com/thisisharsh7',
                  'https://linkedin.com/in/thisisharsh7',
                  'https://twitter.com/thisisharsh7',
                ],
              },
            }),
          }}
        />
      </Head>
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

      <motion.section
        id="about"
        initial={isReducedMotion ? {} : motionVariants.section.initial}
        animate={isReducedMotion ? {} : motionVariants.section.animate}
        transition={isReducedMotion ? {} : motionVariants.section.transition}
        className="max-w-[90rem] w-full pt-20 pb-24 mx-auto flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10"
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
                width={180}
                height={180}
                className="rounded-full border-4 border-blue-500 shadow-lg object-contain bg-white"
                priority
              />

            </motion.div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 text-center">
              Harsh — Frontend Developer
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-2 text-center">
              Crafting pixels into solutions 🚀
            </p>
            <SocialLinks />
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
                  'AI',
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

      <motion.section
        id="experience"
        initial={isReducedMotion ? {} : motionVariants.section.initial}
        animate={isReducedMotion ? {} : motionVariants.section.animate}
        transition={isReducedMotion ? {} : motionVariants.section.transition}
        className="max-w-[90rem] w-full pt-20 mx-auto"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white relative"
          id="experience-heading"
        >
          Experience Timeline
        </h2>

        <div className="relative max-w-7xl mx-auto pb-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-600" aria-hidden="true"></div>
          <div className="flex flex-col gap-16 pt-12">
            {experiences.map((exp, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={isReducedMotion ? {} : { opacity: 1, y: 0 }}
                  transition={isReducedMotion ? {} : { duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative w-full flex flex-col md:flex-row items-center ${isRight ? 'md:justify-start' : 'md:justify-end'}`}
                  role="region"
                  aria-labelledby={`experience-title-${i}`}
                >
                  <div className={`w-full md:w-1/2 px-2 md:px-4 ${isRight ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-black/30 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
                      <h2 id={`experience-title-${i}`} className="text-xl text-white font-semibold">
                        {exp.role}
                      </h2>
                      <p className="text-md font-bold text-cyan-300">{exp.company}</p>
                      <p className="text-sm text-white">{exp.period} · {exp.location}</p>
                      <p className="mt-2 text-sm text-blue-100">{exp.description}</p>
                    </div>
                  </div>
                  <div
                    className="absolute md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-5 h-5 rounded-full border-4 border-white z-10"
                    aria-hidden="true"
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        initial={isReducedMotion ? {} : motionVariants.section.initial}
        animate={isReducedMotion ? {} : motionVariants.section.animate}
        transition={isReducedMotion ? {} : motionVariants.section.transition}
        className="max-w-[90rem] w-full pt-20 mx-auto"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold text-blue-100 mb-12 text-center"
          id="projects-heading"
        >
          Projects - Portfolio.md
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {sampleProjects.slice(0, showAll ? sampleProjects.length : 5).map((project, idx) => (
            <motion.div
              key={idx}
              initial={isReducedMotion ? {} : motionVariants.card.initial}
              animate={isReducedMotion ? {} : motionVariants.card.animate}
              transition={isReducedMotion ? {} : { ...motionVariants.card.transition, delay: idx * 0.1 }}
              whileHover={
                isReducedMotion
                  ? {}
                  : {
                    scale: 1.05,
                    y: -5,
                    boxShadow: '0 12px 24px rgba(96, 165, 250, 0.6)',
                    borderColor: 'rgba(96, 165, 250, 0.7)',
                  }
              }
              className="relative group bg-black/30 backdrop-blur-md p-0 rounded-2xl shadow-lg border-[1px] border-cyan-900 overflow-hidden cursor-pointer transition-all duration-300"
              role="region"
              aria-labelledby={`project-title-${idx}`}
            >
              {/* Screenshot Section */}
              {project.screenshot && (
                <div className="relative w-full max-h-56 sm:max-h-64 overflow-hidden rounded-t-2xl flex items-center justify-center">
                  <img
                    src={project.screenshot}
                    alt={`${project.title} preview`}
                    loading='lazy'
                    className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Overlay Gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-t-2xl" />
                </div>
              )}

              {/* Buttons Section */}
              <div className="flex justify-center gap-4 mt-4 px-6">
                {project.liveLink !== '#' && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    Live
                  </a>
                )}
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition"
                  aria-label={`View source code of ${project.title}`}
                >
                  <FaGithub aria-hidden="true" />
                  Code
                </a>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 id={`project-title-${idx}`} className="text-lg sm:text-xl font-semibold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs sm:text-sm bg-cyan-700 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          ))}
        </div>

        {sampleProjects.length > 5 && (
          <motion.div
            initial={isReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={isReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={isReducedMotion ? {} : { duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-cyan-300 text-sm sm:text-base font-semibold hover:underline"
            >
              {showAll ? 'Show Less ▲' : 'Show More ▼'}
            </button>
          </motion.div>
        )}

      </motion.section>

      <motion.section
        id="achievements"
        initial={isReducedMotion ? {} : motionVariants.section.initial}
        animate={isReducedMotion ? {} : motionVariants.section.animate}
        transition={isReducedMotion ? {} : motionVariants.section.transition}
        className="max-w-[90rem] w-full pt-20 pb-24 mx-auto"
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
              whileInView={isReducedMotion ? {} : motionVariants.card.animate}
              transition={isReducedMotion ? {} : { ...motionVariants.card.transition, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={isReducedMotion ? {} : { scale: 1.03, boxShadow: '0 8px 20px rgba(96, 165, 250, 0.5)' }}
              className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col"
              role="region"
              aria-labelledby={`achievement-title-${index}`}
            >
              <h2
                id={`achievement-title-${index}`}
                className="text-lg sm:text-xl font-semibold text-white mb-2"
              >
                {item.title}
              </h2>
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
                  aria-label={`View additional details of ${item.title}`}
                >
                  <FaExternalLinkAlt />
                  View More
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <HomeButton />
    </>
  );
}