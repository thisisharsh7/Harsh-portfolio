import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SparklesBackground from '../components/SparklesBackground';
import HomeButton from '../components/HomeButton';
import { achievements } from '../constants/data';
import { Suspense } from 'react';

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

export default function AchievementsPage() {
    return (
        <>
            <Head>
                <title>Harsh | Achievements</title>
                <meta name="description" content="View Harsh's achievements, including open-source contributions, internships, and notable projects." />
                <link rel="canonical" href="https://dev-harsh.vercel.app/achievements" />
                <meta property="og:title" content="Harsh | Achievements" />
                <meta property="og:description" content="A showcase of Harsh's awards, recognitions, and significant milestones." />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:image:alt" content="Harsh's achievements overview" />
                <meta property="og:url" content="https://dev-harsh.vercel.app/achievements" />
                <meta name="twitter:image" content="/images/og-image.jpg" />
                <meta name="twitter:image:alt" content="Harsh's achievements overview" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ItemList',
                            'itemListElement': achievements.map((item, index) => ({
                                '@type': 'CreativeWork',
                                'name': item.title,
                                'description': item.description,
                                'datePublished': item.date,
                                'url': item.link !== '#' ? item.link : undefined,
                            })),
                        }),
                    }}
                />
            </Head>
            <main
                className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white lg:pt-12 sm:pt-8 pt-6 px-4 md:px-6 lg:px-8 flex flex-col items-center"
                role="main"
                aria-label="Achievements page"
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
                        id="achievements-heading"
                    >
                        Achievements - Milestones.md
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={isReducedMotion ? {} : motionVariants.card.initial}
                                animate={isReducedMotion ? {} : motionVariants.card.animate}
                                transition={isReducedMotion ? {} : { ...motionVariants.card.transition, delay: index * 0.1 }}
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
            </main>
        </>
    );
}