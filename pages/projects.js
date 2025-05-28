import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import HomeButton from '../components/HomeButton';
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
    const [showAll, setShowAll] = useState(false);

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
            <motion.section
                initial={isReducedMotion ? {} : motionVariants.section.initial}
                animate={isReducedMotion ? {} : motionVariants.section.animate}
                transition={isReducedMotion ? {} : motionVariants.section.transition}
                className=" w-full relative sm:pt-12 pt-8 pb-24"
                role="main"
                aria-label="Portfolio Projects page"
            >
                <h1
                    className="text-3xl sm:text-4xl font-bold text-blue-100 mb-10 text-center"
                    id="projects-heading"
                >
                    Projects - Portfolio.md
                </h1>

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
            <HomeButton />
        </>
    );
}