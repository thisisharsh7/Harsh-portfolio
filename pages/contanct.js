export default function contanct(){
    return (
        <section className="w-full flex flex-col gap-12 max-w-screen-md pt-2 items-center ">
          <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">Contanct</h1>
          <div>
            <form className=" p-2 flex flex-col gap-3">
            <div className="flex gap-5 ">
              <input type="text" className="p-1" placeholder="Name"/>
      
              <input type="email" className="p-1" placeholder="Email" />
            </div>
              <input type="text" className="w-full p-1" placeholder="Subject" />
              <textarea  className="w-full h-40 p-1" placeholder="Message" />
              <input type="submit" value="Send" className="bg-white self-start p-1" />
            </form>
          </div>
        </section>
      );
}