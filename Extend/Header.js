import { useState } from "react";

export default function Header() {
  const [Box , showBox] = useState(false);
  return (
    <header className=" sm:p-8 py-8 px-4 flex justify-center">
      <nav className="flex  items-center w-full justify-between max-w-screen-md " >
        <div className="logo relative w-5"></div>
        <div className="w-9 h-9 sm:hidden flex flex-col gap-1.5 cursor-pointer " onClick={()=>{(Box) ? showBox(false):showBox(true)}}>
          <div className={(Box) ? "h-2 bg-black rotate-45":"h-2 bg-black"}></div>
          <div className={(Box) ? "hidden":"h-2 w-4/5 bg-black"}></div>
          <div className={(Box) ? "h-2 bg-black -rotate-45":"h-2 bg-black"}></div>
        </div>
        <ul className="sm:flex gap-12 nav-list items-center hidden">
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a href="#project">Projects</a>
          </li>
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a href="#contanct">Contanct</a>
          </li>
          <li className="border-2 border-gray-400 px-2 py-1 cursor-pointer text-gray-400  transition-all duration-500 hover:border-black hover:text-black">
            <a href="Resume.pdf">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
