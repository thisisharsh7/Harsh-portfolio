import Image from "next/image";
import linkedInIc from "../public/Images/linkedInIc.svg";
import gitHubIc from "../public/Images/gitIc.svg";
import mailIc from "../public/Images/mailIc.svg";
import twittIc from "../public/Images/twittIc.svg";
import instaIc from "../public/Images/instaIc.svg";


export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-10 pb-5">
        <div className="flex  items-start w-full justify-between max-w-screen-md border-t-2 pt-5 sm:flex-nowrap flex-wrap sm:gap-10 gap-6 p-4">
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-2xl">Harsh Kumar</h1>
                <p className="max-w-sm">The web is a place that I explore every day as a Web Developer.</p>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-xl text-gray-700 font-bold">Profiles</h1>
                <ul className="flex gap-5">
                    <li className="cursor-pointer"><Image src={gitHubIc} alt="GitHub" width={30} height={30}/></li>
                    <li className="cursor-pointer"><Image src={linkedInIc} alt="LinkedIn" width={30} height={30}/></li>
                    <li className="cursor-pointer"><Image src={mailIc} alt="Email" width={30} height={30}/></li>
                    <li className="cursor-pointer"><Image src={twittIc} alt="Twitter" width={30} height={30}/></li>
                    <li className="cursor-pointer"><Image src={instaIc} alt="Instagram" width={30} height={30}/></li>
                </ul>
            </div>
        </div>
        <p className="text-center text-sm">Developed by <span> Harsh Kumar</span> with <span>💖</span>
          </p>
    </footer>
  )
}
