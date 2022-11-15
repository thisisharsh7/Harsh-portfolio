import Image from "next/image";
import twind from "./Images/tailwind.svg";
import saas from "./Images/saas.svg";
import jscript from "./Images/javascript.png";
import react from "./Images/react.svg";
import nextjs from "./Images/nextjs.png";
import git from "./Images/git.png";
import clang from "./Images/clangu.png";
import cplus from "./Images/cplus.png";
import redux from "./Images/redux.svg";
import firebase from "./Images/firebase.png";
import mongo from "./Images/mongodb.jpg";
import node from "./Images/nodeJs.png";
import React from "react";


export default function About() {
  return (
    <section className="w-full flex flex-col max-w-screen-md">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
          Skills
        </h1>
        <ul className="flex flex-wrap gap-10 justify-center skill-list items-center">
          <li className="swipe swipe-up">
            <Image src={twind} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">
              tailwindcss
            </span>
          </li>
          <li className="swipe swipe-up">
            <Image src={saas} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Saas/Scss</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={jscript} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">JavaScript</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={react} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">React</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={nextjs} alt="" width={80} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Next Js</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={git} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Git</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={clang} alt="" width={75} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">C</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={cplus} alt="" width={75} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">C++</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={redux} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Redux</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={firebase} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Firebase</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={mongo} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">MongoDB</span>
          </li>
          <li className="swipe swipe-up">
            <Image src={node} alt="" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">NodeJs</span>
          </li>
        </ul>
      </div>
      <div id="about" className="w-full h-14"></div>
      <div className="  flex flex-col gap-10 ">
        <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute ">
          About me
        </h1>
        <p className="flex flex-col gap-5">
          <span className="swipe swipe-left">
            Hello! I'm Harsh, 2nd year student at Maharaja Agrasen Institute of
            Technology, New Delhi, India. Enjoys running, playing sudoku,
            coding, and surfing the internet.
          </span>
          <span className="swipe swipe-right">
            I am open to opportunities where I am able to learn, contribute, and
            grow. Feel free to{" "}
            <a href="#contact" className="underline text-gray-500">
              contact
            </a>{" "}
            me if you have a suitable opportunity that matches my skills.
          </span>
        </p>
      </div>
    </section>
  );
}
