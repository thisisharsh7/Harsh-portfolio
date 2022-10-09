import { useEffect, useRef } from "react";

export default function Contanct() {
  const formInput = useRef();
  useEffect(()=>{
    formInput.current.reset();
  },[])
  return (
    <section className="w-full flex flex-col gap-12 max-w-screen-md">
      <div id="contanct" className="h-5"></div>
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        Contanct Me
      </h1>
      <div>
        <form
          className=" p-2 flex flex-col gap-4"
          action="https://formspree.io/f/moqblqpq"
          method="POST"
          ref={formInput}
        >
          <div className="flex gap-4 sm:flex-nowrap flex-wrap ">
            <input
              required={true}
              type="text"
              className="py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm w-full"
              placeholder="Name"
              name="username"
            />

            <input
              required={true}
              type="email"
              className="py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm w-full"
              placeholder="xyz@email.com"
              name="email"
            />
          </div>
          <input
            required={true}
            name="subject"
            type="text"
            className="w-full py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm"
            placeholder="Subject"
          />
          <textarea
            required={true}
            className="w-full h-40 py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm resize-none"
            name="message"
          />
          <button
            type="submit"
            className="bg-gray-100 transition-all duration-500 outline-2 outline outline-black self-start py-1 px-4 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
