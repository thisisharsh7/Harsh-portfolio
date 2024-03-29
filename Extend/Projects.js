
import netflix from "./Images/netflix.jpg";
import frontNote from "./Images/frontNote.png";
import Image from "next/image";
import digitalOcean from "./Images/digitalocean.jpg";

export default function Projects() {
  return (
    <section className="w-full flex flex-col max-w-screen-md">
      <div id="project" className="h-10"></div>
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        Projects
      </h1>
      <div className="flex flex-col gap-20 pt-16">
        <div className="flex gap-10 sm:flex-row flex-col ">
          <div className="flex shadow-black shadow-lg swipe swipe-left max-w-[24rem]">
            <Image alt="" priority={true} src={digitalOcean} />
          </div>
          <div className="flex flex-col gap-4 w-full md:max-w-[20rem] swipe swipe-right">
            <h1 className="text-base font-bold bg-blue-200 rounded-lg p-3 text-gray-600 flex gap-3 sm:w-[20rem] w-full ">
              <span className="text-black">01. </span>DigitalOcean - The
              developer community
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-gray-700">
                I built this landing page of DigitalOcean during my{" "}
                <a
                  href="https://github.com/thisisharsh7/14-days-of-Clones"
                  target="_blank"
                  className="animlink text-green-700 underline cursor-pointer"
                >
                  14 days of Clones
                </a>{" "}
                challenge.
              </p>
              <ul className="flex flex-wrap gap-4">
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  React
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  Tailwind
                </li>
                <li className="bg-green-700 py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800 liveAnim">
                  <a
                    href="https://yes-digitalocean.netlify.app/"
                    target="_blank"
                  >
                    Live
                  </a>
                </li>
                <li className="bg-black py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800 repoAnim">
                  <a
                    href="https://github.com/thisisharsh7/14-days-of-Clones/tree/main/digital-ocean-cat"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 sm:flex-row flex-col">

          <div className="flex flex-col gap-4 w-full md:max-w-[20rem] swipe swipe-left">
            <h1 className="text-base font-bold bg-orange-200 rounded-lg p-3 text-gray-600 flex gap-3 sm:w-[20rem] w-full">
              <span className="text-black">02. </span>Frontend Note
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-gray-600">
                These project were made during my{" "}
                <a
                  href="https://github.com/thisisharsh7/30-Days-of-code"
                  target="_blank"
                  className="text-green-700 animlink underline cursor-pointer"
                >
                  30 days of Code challenge
                </a>
                . All the projects were taken from the challenge section of frontend mentor platform.
              </p>
              <ul className="flex flex-wrap gap-4">
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  NextJs
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  React
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  CSS
                </li>
                <li className="bg-green-700 py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800 liveAnim">
                  <a
                    href="https://thisisharsh7.github.io/30-Days-of-code/"
                    target="_blank"
                  >
                    Live
                  </a>
                </li>
                <li className="bg-black py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800 repoAnim">
                  <a
                    href="https://github.com/thisisharsh7/30-Days-of-code/"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex shadow-black shadow-lg swipe swipe-right max-w-[24rem]">
            <Image alt="" priority={true} src={frontNote} />
          </div>

        </div>
        <div className="flex gap-10 sm:flex-row flex-col-reverse">
          <div className="flex shadow-black shadow-lg swipe swipe-left max-w-[24rem]">
            <Image alt="" priority={true} src={netflix} />
          </div>
          <div className="flex flex-col gap-4 w-full md:max-w-[20rem] swipe swipe-right">
            <h1 className="text-base font-bold bg-red-200 rounded-lg p-3 text-gray-600 flex gap-3 sm:w-[20rem] w-full">
              <span className="text-black">03. </span>Netflix 
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-gray-600">
                As part of my{" "}
                <a
                  href="https://github.com/thisisharsh7/14-days-of-Clones"
                  target="_blank"
                  className="animlink text-green-700 underline cursor-pointer"
                >
                  14 days of Clones
                </a>{" "}
                challenge, I created a Netflix clone as my first clone.
                Watch trailer on clicking the movie banner.
              </p>
              <ul className="flex flex-wrap gap-4">
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  React
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  CSS
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  Tmdb api
                </li>
                <li className="bg-green-700 py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800 liveAnim">
                  <a href="https://yes-netflix.netlify.app/" target="_blank">
                    Live
                  </a>
                </li>
                <li className="bg-black py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800 repoAnim">
                  <a
                    href="https://github.com/thisisharsh7/14-days-of-Clones/tree/main/netflix-cat"
                    target="_blank"
                  >
                    Code
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
