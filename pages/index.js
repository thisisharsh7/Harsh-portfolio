import Intro from "../Extend/Intro";
import About from "../Extend/about";
import Projects from "../Extend/projects";
import Contanct from "../Extend/contanct";
import Bookmarks from "../Extend/bookmarks";

export default function Home(){
  return(
     <main className="flex flex-col  items-center p-8">
        <Intro />
        <About />
        <Projects />
        <Contanct />
        <Bookmarks />
     </main>

    
  )
}