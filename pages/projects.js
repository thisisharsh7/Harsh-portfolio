import digitalOcean from "../public/Images/digitalocean.jpg";
import netflix from "../public/Images/netflix.jpg";
import world from "../public/Images/world.jpg";
import Image from "next/image";

export default function projects() {
  return (
    <section className="w-full flex flex-col gap-12 max-w-screen-md pt-2 items-center ">
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        Projects
      </h1>
      <div className="flex flex-col gap-16">
        <div className="flex gap-10 sm:flex-nowrap flex-wrap">
          <Image src={digitalOcean} />
          <div className="flex flex-col gap-4 max-w-[20rem]">
            <h1 className="text-base font-bold bg-blue-200 rounded-lg p-3 text-gray-600 flex gap-3 w-[20rem] "><span className="text-black">01. </span>DigitalOcean - The developer community</h1>
            <div className="flex flex-col gap-1">
              <p className="">
                This is a landing page of DigitalOcean which I build during my
                14 days of Clones challenge.
              </p>
              <p>
              <span>Technology used: React Js, Tailwind CSS.</span>
              <span>Responsive at different screen width.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 sm:flex-nowrap flex-wrap">
          <Image src={netflix} />
          <div className="flex flex-col gap-4 max-w-[20rem]">
            <h1 className="text-base font-bold bg-red-200 rounded-lg p-3 text-gray-600 flex gap-3 w-[20rem] "><span>02. </span>Netflix-Cat</h1>
            <p>
              <span>
                It is a netflix front-end clone which I build during my 14 days
                of Clones challenge.
              </span>
              <span>
                Technology used: Css, React Js, Some external npm Pakages, API.
              </span>
              <span>
                npm packages used: react-youtube , axios, movie-trailer,
                react-cookie, react-router-dom.
              </span>
              <span>API used: Tmdb for movies data and posters.</span>
            </p>
          </div>
        </div>
        <div className="flex gap-10 sm:flex-nowrap flex-wrap">
          <Image src={world} />
          <div className="flex flex-col gap-4 max-w-[20rem]">
            <h1 className="text-base font-bold bg-orange-200 rounded-lg p-3 text-gray-600 flex gap-3 w-[20rem] "><span>03. </span>Where in the world?</h1>
            <p>
              <span>
                This project was made during my 30 days of Code challenge.
              </span>
              <span>Technology used: Css, React Js, API.</span>
              <span>
                It is also a project listed on front-end mentor challenge.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
