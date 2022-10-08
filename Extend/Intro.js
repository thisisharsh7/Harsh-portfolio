import harsh from "../public/Images/harsh-2.jpg";
import Image from "next/image";
export default function Intro(){
  return(
    <section className = "w-full flex items-start max-w-screen-md pt-10 justify-between ">
    <div className="flex flex-col gap-5">
    <div className="intro flex flex-col gap-1">
      <h1 className="font-bold text-5xl">Harsh Kumar</h1>
      <p className="text-xl text-gray-500">Front-End Web Developer</p>
    </div>
    <p className="max-w-xl text-gray-500">I build things for the web, review other people's code as part of the Frontend Mentor community and make suggestions for improvements.</p>
    </div>
    <Image src={harsh} className="rounded-full" width="150" height="150" />
    </section>
    
  )
}