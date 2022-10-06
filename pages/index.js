import harsh from "../public/Images/harsh-2.jpg";
import Image from "next/image";
export default function Home(){
  return(
    <section className = "w-full h-80 flex items-start ">
    <div>
    <div>
      <h1 className="font-bold text-5xl">Harsh Kumar</h1>
      <p className="text-xl text-gray-600">Front-End Web Developer</p>
    </div>
    <p>I build things for the web, review other people's code as part of the Frontend Mentor community and make suggestions for improvements.</p>
    </div>
    <Image src={harsh} width="100" height="100" />
    </section>
  )
}