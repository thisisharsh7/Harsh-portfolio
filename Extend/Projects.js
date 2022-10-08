import digitalOcean from "../public/Images/digitalocean.jpg";
import netflix from "../public/Images/netflix.jpg";
import world from "../public/Images/world.jpg";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full flex flex-col gap-12 max-w-screen-md pt-2">
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        Projects
      </h1>
      <div className="flex flex-col gap-16">
        <div className="flex gap-10 sm:flex-nowrap flex-wrap">
          <Image src={digitalOcean}/>
          <div className="flex flex-col gap-4 max-w-[20rem]">
            <h1 className="text-base font-bold bg-blue-200 rounded-lg p-3 text-gray-600 flex gap-3 sm:w-[20rem] w-full">
              <span className="text-black">01. </span>DigitalOcean - The
              developer community
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-gray-700">
                This is a landing page of DigitalOcean which I build during my{" "}
                <span className="text-black underline cursor-pointer">
                  14 days of Clones
                </span>{" "}
                challenge.
              </p>
              <ul className="flex flex-wrap gap-4">
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  React
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  Tailwind
                </li>
                <li className="bg-green-700 py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800">
                  Live
                </li>
                <li className="bg-black py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800">
                  Code
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 sm:flex-nowrap flex-wrap">
          <Image src={netflix} />
          <div className="flex flex-col gap-4 max-w-[20rem]">
            <h1 className="text-base font-bold bg-red-200 rounded-lg p-3 text-gray-600 flex gap-3 sm:w-[20rem] w-full">
              <span>02. </span>Netflix-Cat
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-gray-600">
                It is a netflix clone which is a first clone made by me during
                my{" "}
                <span className="text-black underline cursor-pointer">
                  14 days of Clones
                </span>{" "}
                challenge.
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
                <li className="bg-green-700 py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800">
                  Live
                </li>
                <li className="bg-black py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800">
                  Code
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-10 sm:flex-nowrap flex-wrap">
          <Image src={world} />
          <div className="flex flex-col gap-4 max-w-[20rem]">
            <h1 className="text-base font-bold bg-orange-200 rounded-lg p-3 text-gray-600 flex gap-3 sm:w-[20rem] w-full ">
              <span>03. </span>Where in the world?
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-gray-600">
                This project was made during my{" "}
                <span className="text-black underline cursor-pointer">
                  30 days of Code challenge
                </span>
                . It is a project from front-end mentor platform.
              </p>
              <ul className="flex flex-wrap gap-4">
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  React
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  api
                </li>
                <li className="bg-gray-200 py-1 px-2 rounded-sm text-sm font-thin text-gray-700 border-[1.4px] border-gray-800">
                  Css
                </li>
                <li className="bg-green-700 py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800">
                  Live
                </li>
                <li className="bg-black py-1 px-2 rounded-sm text-sm font-thin text-white border-[1.4px] border-gray-800">
                  Code
                </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
