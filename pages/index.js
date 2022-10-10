import Intro from "../Extend/Intro";
import About from "../Extend/About";
import Projects from "../Extend/Projects";
import Contact from "../Extend/Contact";
import Bookmarks from "../Extend/Bookmarks";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.setProperty("--scale-till", 1);
    window.addEventListener("scroll", () => {
      var swipe = document.querySelectorAll(".swipe");
      for (var i = 0; i < swipe.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = swipe[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          swipe[i].classList.add("active");
        } else {
          swipe[i].classList.remove("active");
        }
      }
    });
  }, []);
  return (
    <main className="flex flex-col gap-10 items-center sm:p-8 p-3.5">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Bookmarks />
    </main>
  );
}
