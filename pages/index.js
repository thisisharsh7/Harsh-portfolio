import Intro from "../Extend/Intro";
import About from "../Extend/About";
import Projects from "../Extend/Projects";
import Contanct from "../Extend/Contanct";
import Bookmarks from "../Extend/Bookmarks";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center sm:p-8 p-6">
      <Intro />
      <About />
      <Projects />
      <Contanct />
      <Bookmarks />
    </main>
  );
}
