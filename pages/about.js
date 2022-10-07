import Image from "next/image";

export default function about() {
  return (
    <section className="w-full flex flex-col gap-12 max-w-screen-md pt-2 ">
    <div className="  flex flex-col items-center gap-10">
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        About me
      </h1>
      <p className="flex flex-col gap-5">
        <span>
          Hello! I'm Harsh, 2nd year student at Maharaja Agrasen Institute of
          Technology, New Delhi, India. Enjoys running, playing sudoko, coding,
          and surfing tech topics on internet.
        </span>
        <span>
          I'm open to Job opportunities where I can learn, contribute and grow.
          If you have a good opportunity that matches my skills and experience
          then do contact me.
        </span>
      </p>
      </div>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">Skills</h1>
        <ul className="flex flex-wrap gap-10 skill-list items-end">
          <li><img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" className="w-20"/>tailwindcss</li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" className="w-20"/>Javascript</li>
          <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" className="w-20"/>React</li>
          <li><img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" className="w-20"/>Redux</li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" className="w-20"/>Next Js</li>
          <li><img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" className="w-20"/>Git</li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ET6-zqVqg1I45mbg_PvlEd7JvZoXwspvjA&usqp=CAU" className="w-20"/>Firebase</li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UvDYFw7P_b96NMdT2uJJ7gskCz-1wjH9Pg&usqp=CAU" className="w-20"/>C</li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxVrrgehMqY0gRr3ixmyc0-gZRPYAdh6lSNQ&usqp=CAU" className="w-20"/>C++</li>
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXj2A2a5tQL05ZkHcEpl7NqsYSdhjnoPltgQ&usqp=CAU" className="w-20"/>Teaching</li>
        </ul>
      </div>
    </section>
  );
}
