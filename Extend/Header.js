import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [Box, showBox] = useState(false);
  const route = useRouter();
  useEffect(()=>{
    setTimeout(()=>{route.push("/");},100);
  },[])
  return (
    <header className=" sm:px-8 sm:py-9 pt-8 pb-4 px-4 flex max-w-[800px] mx-auto   justify-center min-w-[190px] bg-gray-100 shadow-sm sticky top-0 z-20">
      <nav className="flex  items-center w-full justify-between max-w-screen-md  relative ">
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
                ? "transition-all duration-700 menu before:rotate-45 after:-rotate-45 before:top-3.5 after:top-3.5 w-0"
                : " transition-all duration-500 h-2 w-2/3 bg-gray-500 menu before:bottom-0 after:top-0"
            }
          ></div>
        </div>
        <ul
          className={
            Box
              ? " transition-all duration-700 flex sm:flex-row flex-col gap-10 items-center sm:relative absolute top-0 right-11  left-7 sm:bg-transparent bg-gray-100 px-3 py-5 z-10 sm:shadow-none shadow-md shadow-gray-700"
              : " transition-all duration-1000 flex sm:shadow-none shadow-sm sm:flex-row flex-col sm:gap-10 gap-0 items-center  bg-transparent sm:relative absolute sm:right-0 sm:left-0 right-11 left-7 sm:top-0 -top-44 sm:z-10 -z-20 sm:opacity-100  "
          }
        >
          <li>
            <Link href="/">
              <a
                onClick={() => {
                  showBox(false);
                }}
                className={
                  route.asPath == "/"
                    ? "cursor-pointer  transition-all duration-300 hover:text-black text-black"
                    : "cursor-pointer  transition-all duration-300 hover:text-black text-gray-400"
                }
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a
                onClick={() => {
                  showBox(false);
                }}
                className={
                  route.asPath == "/#about"
                    ? "cursor-pointer  transition-all duration-300 hover:text-black text-black"
                    : "cursor-pointer  transition-all duration-300 hover:text-black text-gray-400"
                }
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#project">
              <a
                onClick={() => {
                  showBox(false);
                }}
                className={
                  route.asPath == "/#project"
                    ? "cursor-pointer  transition-all duration-300 hover:text-black text-black"
                    : "cursor-pointer  transition-all duration-300 hover:text-black text-gray-400"
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a
                onClick={() => {
                  showBox(false);
                }}
                className={
                  route.asPath == "/#contact"
                    ? "cursor-pointer  transition-all duration-300 hover:text-black text-black"
                    : "cursor-pointer  transition-all duration-300 hover:text-black text-gray-400"
                }
              >
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/file/d/1xPieQ4A12qqdDKeHrYhTBcS6jvjgQYJn/view">
              <a
                target="_blank"
                onClick={() => {
                  showBox(false);
                  route.push("/");
                }}
                className="border-2 border-gray-400 px-2 py-1 cursor-pointer text-gray-400  transition-all duration-500 hover:border-black hover:text-black"
              >
                Resume
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
