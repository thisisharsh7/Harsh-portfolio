import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import HomeButton from '../components/HomeButton';
import { sampleProjects } from '../constants/data';

const fadeUpVariant = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, ease: 'easeInOut', duration: 0.5 }
    })
}

const ProjectsPage = () => {
    const [showAll, setShowAll] = useState(false);
    const projectsToShow = showAll ? sampleProjects : sampleProjects.slice(0, 5);

    return (
        <>
            <Head>
                <title>Harsh | Projects</title>
                <meta name="description" content="Explore Harsh's curated portfolio projects." />
            </Head>

            <motion.section
                className="w-full min-h-screen relative sm:pt-12 pt-8 pb-24"
                initial="initial"
                animate="animate"
                variants={fadeUpVariant}
            >
                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white relative">
                        🚀 Featured Projects
                    </h1>
                    <p className="text-slate-400 mt-4 text-lg text-md sm:text-xl max-w-2xl mx-auto">
                        A hand-picked collection of projects showcasing design, frontend, and full-stack development.
                    </p>
                </div>

                {/* Projects List */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {projectsToShow.map((project, i) => (
                        <motion.div
                            key={project.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 15px 25px rgba(14, 203, 255, 0.3)',
                                opacity: 1,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className="relative flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-cyan-400/40 w-full max-w-sm mx-auto"
                        >
                            {/* VSCode-style top bar */}
                            <div className="flex items-center justify-between bg-white/10 px-4 py-2 border-b border-white/20">
                                <div className="flex items-center gap-3">
                                    <span className="h-3 w-3 rounded-full bg-red-500" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-sm font-mono text-slate-300 truncate">
                                    {project.title}.web
                                </span>
                                <div className="w-6" /> {/* placeholder */}
                            </div>

                            {/* Screenshot */}
                            {project.screenshot && (
                                <div className="relative w-full h-48 overflow-hidden group">
                                    <Image
                                        src={project.screenshot}
                                        alt={project.title}
                                        width={400}
                                        height={192}
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                                <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium bg-black/30 border border-white/20 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-4 text-sm">
                                    {project.liveLink !== '#' && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-cyan-300 hover:text-white transition"
                                        >
                                            <FaExternalLinkAlt />
                                            Live
                                        </a>
                                    )}
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-green-400 hover:text-white transition"
                                    >
                                        <FaGithub />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Toggle Button */}
                {sampleProjects.length > 5 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-cyan-400 text-sm sm:text-base font-semibold hover:underline"
                        >
                            {showAll ? 'Show Less ▲' : 'Show More ▼'}
                        </button>
                    </div>
                )}
            </motion.section>

            <HomeButton />
        </>
    );
};

export default ProjectsPage;
