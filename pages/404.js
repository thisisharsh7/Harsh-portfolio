import Head from 'next/head';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import SparklesBackground from '../components/SparklesBackground';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Head>
            <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white">
                <SparklesBackground />
                <h1 className="text-4xl font-bold mb-4 relative">404 - Page Not Found</h1>
                <p className="text-lg mb-6 relative">Oops! The page you're looking for doesn't exist.</p>
                <Link href="/">
                    <a className="flex relative items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Return to homepage">
                        <FaHome /> Back to Home
                    </a>
                </Link>
            </main>
        </>
    );
}