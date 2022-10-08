import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const route = useRouter();
  return (
    <header className=" p-8 flex justify-center">
      <nav className="flex  items-center w-full justify-between max-w-screen-md">
      <p className="logo relative w-5"></p>
        <ul className="flex gap-12 nav-list">
         
        </ul>
      </nav>
    </header>
  );
}
