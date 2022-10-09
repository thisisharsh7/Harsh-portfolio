import Image from "next/image";
import linkedInIc from "./Images/linkedInIc.svg";
import gitHubIc from "./Images/gitIc.svg";
import mailIc from "./Images/mailIc.svg";
import twittIc from "./Images/twittIc.svg";
import instaIc from "./Images/instaIc.svg";

export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-10 pb-5">
      <div className="flex  items-start w-full justify-between max-w-screen-md border-t-2 pt-5 sm:flex-nowrap border-gray-300 flex-wrap sm:gap-10 gap-6 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Harsh Kumar</h1>
          <p className="max-w-sm">
            The web is a place that I explore every day as a Web Developer.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl text-gray-700 font-bold">Profiles</h1>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer h-7 hover:-translate-y-1 transition-all duration-500">
              <a href="https://github.com/thisisharsh7" target="_blank">
                <Image src={gitHubIc} alt="GitHub" width={30} height={30} />
              </a>
            </li>
            <li className="cursor-pointer h-7 hover:-translate-y-1 transition-all duration-500">
              <a
                href="https://www.linkedin.com/in/thisisharsh7/"
                target="_blank"
              >
                <Image src={linkedInIc} alt="LinkedIn" width={30} height={30} />
              </a>
            </li>
            <li className="cursor-pointer h-7 hover:-translate-y-1 transition-all duration-500">
              <a href="mailto:9u.harsh@gmail.com" target="_blank">
                <Image src={mailIc} alt="Email" width={30} height={30} />
              </a>
            </li>
            <li className="cursor-pointer h-7 hover:-translate-y-1 transition-all duration-500">
              <a href="https://twitter.com/thisisharsh7" target="_blank">
                <Image src={twittIc} alt="Twitter" width={30} height={30} />
              </a>
            </li>
            <li className="cursor-pointer h-7 hover:-translate-y-1 transition-all duration-500">
              <a
                href="https://www.instagram.com/thisishars_h/?igshid=ymmymta2m2y%3D"
                target="_blank"
              >
                <Image src={instaIc} alt="Instagram" width={30} height={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm">
        Developed by <span> Harsh Kumar</span> with <span>💖</span>
      </p>
    </footer>
  );
}
