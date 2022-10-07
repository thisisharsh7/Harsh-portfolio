import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();
  return (
    <header className=" p-8 flex justify-center">
      <nav className="flex  items-center w-full justify-between max-w-screen-md">
      <p className="logo relative w-5"></p>
        <ul className="flex gap-12 nav-list">
          <li>
            <Link href="/">
              <a className={(route.pathname=="/") ? ("xl:text-md text-black ") : ("xl:text-md text-gray-500")}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={(route.pathname=="/about") ? ("xl:text-md text-black ") : ("xl:text-md text-gray-500")}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className={(route.pathname=="/projects") ? ("xl:text-md text-black ") : ("xl:text-md text-gray-500")}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/bookmarks">
              <a className={(route.pathname=="/bookmarks") ? ("xl:text-md text-black ") : ("xl:text-md text-gray-500")}>Bookmarks</a>
            </Link>
          </li>
          <li>
            <Link href="/contanct">
              <a className={(route.pathname=="/contanct") ? ("xl:text-md text-black ") : ("xl:text-md text-gray-500")}>Contanct</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
