import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SparklesBackground from '../components/SparklesBackground';
import HomeButton from '../components/HomeButton';
import { Suspense } from 'react';
import { sampleProjects } from '../constants/data';

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

const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function ProjectsPage() {
    const [visibleCount, setVisibleCount] = useState(5);

    return (
        <>
            <Head>
                <title>Harsh | Projects</title>
                <meta name="description" content="Explore Harsh's portfolio of frontend and full-stack projects built with React, Next.js, and more." />
                <link rel="canonical" href="https://dev-harsh.vercel.app/projects" />
                <meta property="og:title" content="Harsh | Projects" />
                <meta property="og:description" content="A collection of Harsh's web development projects, showcasing responsive and modern applications." />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:image:alt" content="Harsh's projects overview" />
                <meta property="og:url" content="https://dev-harsh.vercel.app/projects" />
                <meta name="twitter:image" content="/images/og-image.jpg" />
                <meta name="twitter:image:alt" content="Harsh's projects overview" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ItemList',
                            'itemListElement': sampleProjects.map((project, index) => ({
                                '@type': 'CreativeWork',
                                'name': project.title,
                                'description': project.description,
                                'url': project.liveLink !== '#' ? project.liveLink : project.codeLink,
                            })),
                        }),
                    }}
                />
            </Head>
            <main
                className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white lg:pt-12 sm:pt-8 pt-6 px-4 md:px-6 lg:px-8"
                role="main"
                aria-label="Portfolio Projects page"
            >
                <Suspense
                    fallback={
                        <div
                            className="absolute inset-0 -z-2 select-none pointer-events-none bg-black/45 backdrop-blur-[2px]"
                            aria-hidden="true"
                        />
                    }
                >
                    <SparklesBackground />
                </Suspense>

                <motion.section
                    initial={isReducedMotion ? {} : motionVariants.section.initial}
                    animate={isReducedMotion ? {} : motionVariants.section.animate}
                    transition={isReducedMotion ? {} : motionVariants.section.transition}
                    className="max-w-[90rem] w-full relative pb-24"
                >
                    <h1
                        className="text-3xl sm:text-4xl font-bold text-blue-100 mb-10 text-center"
                        id="projects-heading"
                    >
                        Projects - Portfolio.md
                    </h1>

                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                                <h2
                                    id={`project-title-${idx}`}
                                    className="text-lg sm:text-xl font-semibold text-white mb-4"
                                >
                                    {project.title}
                                </h2>
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
                                className="text-cyan-300 text-sm sm:text-base font-semibold hover:underline hover:text-cyan-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                                aria-label="Load more projects"
                            >
                                + View More
                            </button>
                        </motion.div>
                    )}
                </motion.section>

                <HomeButton />
            </main>
        </>
    );
}