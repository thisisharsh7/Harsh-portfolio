// File: app/experience/page.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { SparklesCore } from '../components/ui/sparkles';

const experiences = [
    {
        company: 'Userology',
        role: 'Software Engineer Intern',
        period: 'Aug 2024 - Jan 2025',
        location: 'San Francisco Bay Area · Remote',
        description: 'Worked on developing scalable web applications using Next.js, Firebase, and Tailwind CSS.',
    },
    {
        company: 'DRDO, Ministry of Defence, Govt. of India',
        role: 'Research And Development Intern',
        period: 'Jul 2024 - Aug 2024',
        location: 'SSPL, New Delhi, India · On-site',
        description: 'Assisted in research and development of advanced defense technologies.',
    },
    {
        company: 'VaySolar',
        role: 'Frontend Developer',
        period: 'Nov 2023 - May 2024',
        location: 'New Delhi, India · Remote',
        description: 'Built customer and vendor portals using React and Material UI. Used Zustand for state management.',
    },
    {
        company: 'Decentraclasses',
        role: 'Frontend Developer',
        period: 'Oct 2023 - Feb 2024',
        location: 'New Delhi, India · Remote',
        description: 'Created animated web pages and optimized navigation. Improved load speed and UX.',
    },
    {
        company: 'Botter Solutions Pvt. Ltd.',
        role: 'Frontend Developer',
        period: 'Nov 2023 - Dec 2023',
        location: 'New Delhi, India · Remote',
        description: 'Customized MUI data grids and handled API integrations for a drilling software.',
    },
    {
        company: 'GirlScript Summer of Code',
        role: 'Contributor',
        period: 'Mar 2022 - May 2022',
        location: 'India · Remote',
        description: 'Contributed to open-source projects using CSS and JavaScript.',
    },
];

export default function ExperiencePage() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white lg:pt-12 sm:pt-8 pt-6 px-4 md:px-6 lg:px-8"
            role="main"
            aria-label="Portfolio Experiencepage"
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

            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white relative">Experience Timeline</h2>

            <div className="relative max-w-6xl mx-auto pb-24">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-cyan-600"></div>
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
                            >
                                <div className={`w-full md:w-1/2 px-2 md:px-4 ${isRight ? 'md:pr-10' : 'md:pl-10'}`}>
                                    <div className="bg-black/30 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
                                        <h3 className="text-xl text-white font-semibold">{exp.role}</h3>
                                        <p className="text-md font-bold text-cyan-300">{exp.company}</p>
                                        <p className="text-sm text-white">{exp.period} · {exp.location}</p>
                                        <p className="mt-2 text-sm text-blue-100">{exp.description}</p>
                                    </div>
                                </div>
                                <div className="absolute md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-5 h-5 rounded-full border-4 border-white z-10"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Fixed Home Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Link href="/">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center cursor-pointer gap-2 rounded-full bg-cyan-600 px-5 py-2 text-white font-semibold shadow-md hover:bg-cyan-700"
                    >
                        <FaHome className="text-xl" /> Home
                    </motion.a>
                </Link>
            </motion.div>
        </main>
    );
}
