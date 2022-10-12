import harsh from "./Images/harsh.jpg";
import Image from "next/image";
export default function Intro() {
  return (
    <section className="w-full flex sm:flex-row flex-col-reverse items-start max-w-screen-md pt-8 pb-4 justify-between ">
      <div className="flex flex-col gap-5">
        <div className="intro flex flex-col gap-1">
          <h1 className="font-bold sm:text-5xl text-4xl starting">
            Harsh Kumar
          </h1>
          <p className="text-xl text-gray-700">Front-End Web Developer</p>
        </div>
        <div className="max-w-xl text-gray-700">
          <p>I build things for the web, review other people's code</p> as part of the
         <p> Frontend Mentor community and make suggestions for improvements.</p>
        </div>
      </div>
      <div className="sm:w-36 max-w-md text-center starting">
        <Image
          src={harsh}
          className="rounded-full "
          width="150"
          height="150"
          alt=""
          priority={true}
        />
      </div>
    </section>
  );
}
