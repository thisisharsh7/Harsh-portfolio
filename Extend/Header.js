import Link from "next/link";

export default function Header() {
  return (
    <header className=" p-8">
      <nav className="flex justify-between items-center">
      <p className="text-2xl">☺️</p>
        <ul className="flex gap-12 nav-list">
          <li>
            <Link href="/">
              <a className="xl:text-xl md:text-lg">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="xl:text-xl">About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="xl:text-xl">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/bookmarks">
              <a className="xl:text-xl">Bookmarks</a>
            </Link>
          </li>
          <li>
            <Link href="/contanct">
              <a className="xl:text-xl">Contanct</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
