export default function Header() {
  return (
    <header className=" p-8 flex justify-center">
      <nav className="flex  items-center w-full justify-between max-w-screen-md">
        <p className="logo relative w-5"></p>
        <ul className="flex gap-12 nav-list items-center">
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
