import Image from "next/image";
import twind from "../public/Images/tailwind.svg";
import saas from "../public/Images/saas.svg";
import jscript from "../public/Images/javascript.png";
import react from "../public/Images/react.svg";
import nextjs from "../public/Images/nextjs.png";
import git from "../public/Images/git.png";
import clang from "../public/Images/clangu.png";
import cplus from "../public/Images/cplus.png";
import redux from "../public/Images/redux.svg";
import firebase from "../public/Images/firebase.png";

export default function About() {
  return (
    <section className="w-full flex flex-col max-w-screen-md">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
          Skills
        </h1>
        <ul className="flex flex-wrap gap-10 justify-center skill-list items-center">
          <li>
            <Image src={twind} alt="twind" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">
              tailwindcss
            </span>
          </li>
          <li>
            <Image src={saas} alt="saas" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Saas/Scss</span>
          </li>
          <li>
            <Image src={jscript} alt="jscript" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Javascript</span>
          </li>
          <li>
            <Image src={react} alt="react" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">React</span>
          </li>
          <li>
            <Image src={nextjs} alt="nextjs" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Next Js</span>
          </li>
          <li>
            <Image src={git} alt="git" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Git</span>
          </li>
          <li>
            <Image src={clang} alt="clang" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">C</span>
          </li>
          <li>
            <Image src={cplus} alt="cplus" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">C++</span>
          </li>
          <li>
            <Image src={redux} alt="redux" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Redux</span>
          </li>
          <li>
            <Image src={firebase} alt="firebase" width={70} height={75} />
            <span className="bg-gray-200 py-1 px-2 rounded-md">Firebase</span>
          </li>
        </ul>
      </div>
      <div id="about" className="w-full h-16"></div>
      <div className="  flex flex-col gap-10 ">
        <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute ">
          About me
        </h1>
        <p className="flex flex-col gap-5">
          <span>
            Hello! I'm Harsh, 2nd year student at Maharaja Agrasen Institute of
            Technology, New Delhi, India. Enjoys running, playing sudoko,
            coding, and surfing tech topics on internet.
          </span>
          <span>
            I'm open to Job opportunities where I can learn, contribute and
            grow. If you have a good opportunity that matches my skills and
            experience then do contact me.
          </span>
        </p>
      </div>
    </section>
  );
}
