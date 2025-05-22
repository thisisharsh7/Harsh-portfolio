// File: app/contact/page.tsx
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 flex flex-col items-center justify-center">
            <div className="absolute top-6 left-6">
                <Link href="/">
                    <div className="cursor-pointer hover:text-blue-400 flex items-center">
                        <FaArrowLeft className="mr-2" /> Back
                    </div>
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl w-full text-center space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold text-blue-400">Let’s Connect 🚀</h2>
                <p className="text-gray-300">
                    Have an innovative idea? Want to collaborate or just say hi? I’m always open to discussions!
                </p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white p-3 rounded-md font-semibold"
                    >
                        Hire Me 💼
                    </button>
                </form>

                <a
                    href="/resume.pdf"
                    download
                    className="inline-block mt-4 text-sm text-blue-400 hover:underline"
                >
                    Download Resume 📄
                </a>
            </motion.div>
        </div>
    );
}