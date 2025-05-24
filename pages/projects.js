import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SparklesBackground from '../components/SparklesBackground';
import HomeButton from '../components/HomeButton';
import { Suspense } from 'react';
import { sampleProjects } from '../constants/data';
import Image from 'next/image';

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {sampleProjects.slice(0, visibleCount).map((project, idx) => (
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
                                className="relative group bg-black/30 backdrop-blur-md p-0 rounded-2xl shadow-lg border border-transparent overflow-hidden cursor-pointer transition-all duration-300"
                                role="region"
                                aria-labelledby={`project-title-${idx}`}
                            >
                                {/* Screenshot Section */}
                                {project.screenshot && (
                                    <div className="relative w-full max-h-56 sm:max-h-64 overflow-hidden rounded-t-2xl flex items-center justify-center p-4">
                                        <Image
                                            src={project.screenshot}
                                            alt={`${project.title} preview`}
                                            width={1280} // intrinsic width of the image
                                            height={720} // intrinsic height to preserve aspect ratio
                                            className="object-contain transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-1 w-full h-auto"
                                            priority={false}
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