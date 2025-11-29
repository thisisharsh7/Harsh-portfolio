// pages/_app.js
import { Suspense, useEffect, useState } from 'react';
import Head from 'next/head';
import { preloadImageUrls } from '../constants/data';
import '../styles/globals.css';
import SparklesBackground from '../components/SparklesBackground';

export default function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (skip) {
      setLoaded(true);
      return;
    }

    const preloadImages = async () => {
      const promises = preloadImageUrls.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 30);

      await Promise.all(promises);
      setTimeout(() => {
        clearInterval(interval);
        setLoaded(true);
      }, 500);
    };

    preloadImages();
  }, [skip]);

  if (!loaded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white px-4">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center text-cyan-300 font-semibold">
            <span className="text-sm">{progress}%</span>
          </div>
        </div>

        <p className="text-xl font-medium text-cyan-200 mb-4">Building your experience...</p>

        <button
          onClick={() => setSkip(true)}
          className="flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2 text-sm font-medium text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-300 transition"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4-4m0 0l4-4m-4 4H4" />
          </svg>
          Skip Intro
        </button>
      </div>
    );
  }


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Harsh's Portfolio - Frontend developer with experience across 5+ startups and international clients." />
        <meta property="og:site_name" content="Harsh's Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thisisharsh7" />
        <meta name="twitter:creator" content="@thisisharsh7" />
        
        {/* Sonarly Session Tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var initOpts = {
                projectKey: "6cyU2CEvFrw3B7zQ1HHL",
                ingestPoint: "https://sonarly.dev/ingest",
                __DISABLE_SECURE_MODE: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
              };
              var startOpts = {};
              
              (function(A,s,a,y,e,r){
                r=window.Sonarly=[e,r,y,[s-1, e]];
                s=document.createElement('script');s.src=A;s.async=!a;
                document.getElementsByTagName('head')[0].appendChild(s);
                r.start=function(v){r.push([0])};
                r.stop=function(v){r.push([1])};
                r.setUserID=function(id){r.push([2,id])};
                r.setUserAnonymousID=function(id){r.push([3,id])};
                r.setMetadata=function(k,v){r.push([4,k,v])};
                r.event=function(k,p,i){r.push([5,k,p,i])};
                r.issue=function(k,p){r.push([6,k,p])};
                r.isActive=function(){return false};
                r.getSessionToken=function(){};
              })("https://sonarly.dev/static/tracker.js",1,0,initOpts,startOpts);
            `
          }}
        />
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon.png" />
        <link rel="icon" type="image/png" href="/icon1.png" sizes="16x16" />
      </Head>
      <main className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 text-white px-3 sm:px-6 md:px-8">
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
        <div className="mx-auto  max-w-[90rem]">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}