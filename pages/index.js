import Intro from "../Extend/Intro";
import About from "../Extend/About";
import Projects from "../Extend/Projects";
import Contanct from "../Extend/Contanct";
import Bookmarks from "../Extend/Bookmarks";

export default function Home() {
  return (
    <main className="flex flex-col gap-16  items-center p-8">
      <Intro />
      <About />
      <Projects />
      <Contanct />
      <Bookmarks />
    </main>
  );
}
