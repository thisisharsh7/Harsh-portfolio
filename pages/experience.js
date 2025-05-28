import { motion } from 'framer-motion';
import Head from 'next/head';
import HomeButton from '../components/HomeButton';
import { experiences } from '../constants/data';

export default function ExperiencePage() {
    return (
        <>
            <Head>
                <title>Harsh | Experience</title>
                <meta name="description" content="Explore Harsh's professional experience as a frontend developer across startups and international clients." />
                <link rel="canonical" href="https://dev-harsh.vercel.app/experience" />
                <meta property="og:title" content="Harsh | Experience" />
                <meta property="og:description" content="A timeline of Harsh's work experience, including roles at Userology, DRDO, and more." />
                <meta property="og:image" content="/images/og-image.jpg" />
                <meta property="og:image:alt" content="Harsh's experience timeline" />
                <meta property="og:url" content="https://dev-harsh.vercel.app/experience" />
                <meta name="twitter:image" content="/images/og-image.jpg" />
                <meta name="twitter:image:alt" content="Harsh's experience timeline" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ItemList',
                            'itemListElement': experiences.map((exp, index) => ({
                                '@type': 'JobPosting',
                                'title': exp.role,
                                'employer': {
                                    '@type': 'Organization',
                                    'name': exp.company,
                                },
                                'datePosted': exp.period.split(' - ')[0],
                                'description': exp.description,
                                'jobLocation': {
                                    '@type': 'Place',
                                    'address': {
                                        '@type': 'PostalAddress',
                                        'addressLocality': exp.location,
                                    },
                                },
                            })),
                        }),
                    }}
                />
            </Head>
            <motion.section
                className="flex flex-col relative items-center w-full sm:pt-12 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                role="main"
                aria-label="Portfolio Experience page"
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white relative">
                    Experience Timeline
                </h1>

                <div className="relative max-w-6xl w-full mx-auto pb-24">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-600" aria-hidden="true"></div>
                    <div className="flex flex-col gap-16 pt-12">
                        {experiences.map((exp, i) => {
                            const isRight = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
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
            <HomeButton />
        </>
    );
}