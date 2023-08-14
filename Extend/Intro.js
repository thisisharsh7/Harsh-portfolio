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
          <p className="text-xl text-gray-700">MERN Developer</p>
        </div>
        <p className="max-w-xl">
          <span className="text-gray-700">I build things for the web, review other people's code as part </span><span className="text-gray-700"> of the
          Frontend Mentor community and make suggestions for improvements.</span>
        </p>
      </div>
      <div className="sm:w-36 w-36 text-center starting">
        <Image
          src={harsh}
          className="rounded-full "
          alt=""
          priority={true}
        />
      </div>
    </section>
  );
}
