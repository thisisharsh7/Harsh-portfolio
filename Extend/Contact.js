import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  function sendForm(e) {
    e.preventDefault();
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    const msg = document.getElementById("message");
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const name_pattern = /^[a-zA-Z ]*$/;
    if (email.value !== " " && name.value !== " " && msg.value !== " " && email_pattern.test(email.value) && name_pattern.test(name.value)) {
      emailjs.sendForm('service_jij55ll', 'template_nrfyz76', form.current, 'drt08EJXNpmcrutFM').then((result) => {
        alert('message send');
      }, (error) => {
        alert('server-error');
      });
      e.target.reset();
    } else {
      alert("input error");
    }
  }
  return (
    <section className="w-full flex flex-col gap-12 max-w-screen-md">
      <div id="contact" className="h-0.5 "></div>
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        Contact Me
      </h1>
      <div>
        <form
          className=" p-2 flex flex-col gap-4"
          ref={form}
          onSubmit={sendForm}
        >
          <div className="flex gap-4 sm:flex-nowrap flex-wrap ">
            <input
              required={true}
              type="text"
              className="py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm w-full swipe swipe-left"
              placeholder="Name"
              name="username"
              id="name"
            />

            <input
              required={true}
              type="email"
              className="py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm w-full swipe swipe-right"
              placeholder="xyz@email.com"
              name="useremail"
              id="email"
            />
          </div>
          <input
            required={true}
            name="usersubject"
            type="text"
            className="w-full py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md  focus-within:shadow-black focus-within:shadow-sm swipe swipe-left"
            placeholder="Subject"
            id="subject"
          />
          <textarea
            required={true}
            placeholder="Message"
            className="w-full h-40 py-1 px-3 focus-within:bg-gray-100 text-gray-500 outline-none shadow-md focus-within:shadow-black focus-within:shadow-sm resize-none swipe swipe-right"
            name="usermessage"
            id="message"
          />
          <input
            type="submit"
            className="bg-gray-100 transition-all duration-500 outline-2 outline outline-black self-start py-1 px-4 cursor-pointer"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
}
