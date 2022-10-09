import Router, { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [Box, showBox] = useState(false);
  const route = useRouter();

  function myFunction(link) {
    showBox(false);
    setTimeout(() => {
      route.push(link);
    }, 400);
  }
  return (
    <header className=" sm:px-8 sm:py-10 pt-8 pb-4 px-4 flex justify-center min-w-[190px]">
      <nav className="flex  items-center w-full justify-between max-w-screen-md relative">
        <div className="logo relative w-5"></div>
        <div
          className="w-9 h-9 sm:hidden gap-1.5 flex items-center cursor-pointer relative "
          onClick={() => {
            Box ? showBox(false) : showBox(true);
          }}
        >
          <div
            className={
              Box
                ? "transition-all duration-600 menu before:rotate-45 after:-rotate-45 before:top-3.5 after:top-3.5 w-0"
                : " transition-all duration-700 h-2 w-2/3 bg-gray-500 menu before:bottom-0 after:top-0"
            }
          ></div>
        </div>
        <ul
          className={
            Box
              ? " transition-all duration-500 flex sm:flex-row flex-col gap-10 items-center sm:relative absolute top-0 right-11  left-7 sm:bg-transparent bg-gray-100 px-3 py-5 z-10 sm:shadow-none shadow-md shadow-gray-700"
              : " transition-all duration-300 flex sm:shadow-none shadow-sm sm:flex-row flex-col sm:gap-10 gap-0 sm:items-center items-end bg-transparent sm:relative absolute right-0 top-0 sm:z-10 -z-10 sm:opacity-100 opacity-0 "
          }
        >
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black ">
            <a
              href="#"
              onClick={() => {
                showBox(false);
              }}
            >
              Home
            </a>
          </li>
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a
              href="#"
              onClick={() => {
                myFunction("#about");
              }}
            >
              About
            </a>
          </li>
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a
              href="#"
              onClick={() => {
                myFunction("#project");
              }}
            >
              Projects
            </a>
          </li>
          <li className="cursor-pointer text-gray-400  transition-all duration-300 hover:text-black">
            <a
              href="#"
              onClick={() => {
                myFunction("#contact");
              }}
            >
              Contact
            </a>
          </li>
          <li className="border-2 border-gray-400 px-2 py-1 cursor-pointer text-gray-400  transition-all duration-500 hover:border-black hover:text-black">
            <a
              href="https://drive.google.com/file/d/1xPieQ4A12qqdDKeHrYhTBcS6jvjgQYJn/view"
              target="_blank"
              onClick={() => {
                showBox(false);
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
