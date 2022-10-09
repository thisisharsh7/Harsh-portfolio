import Intro from "../Extend/Intro";
import About from "../Extend/About";
import Projects from "../Extend/Projects";
import Contact from "../Extend/Contact";
import Bookmarks from "../Extend/Bookmarks";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(()=>{
    var k = getComputedStyle(document.body).getPropertyValue('--scale-till');
    console.log(k);
    document.documentElement.style.setProperty('--scale-till',1);
  },[])
  return (
    <main className="flex flex-col gap-10 items-center sm:p-8 p-6">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Bookmarks />
    </main>
  );
}
