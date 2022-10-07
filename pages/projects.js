export default function projects() {
  return (
    <section className="w-full flex flex-col gap-12 max-w-screen-md pt-2 items-center ">
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">Projects</h1>
      <div className="flex flex-col gap-16">
      <div className="flex gap-10">
        <img src="https://raw.githubusercontent.com/thisisharsh7/14-days-of-Clones/main/web-screenshot/netflix.jpg" className="w-80" />
        <div>
          <h1>Netflix-Cat</h1>
          <p><span>It is a netflix front-end clone which I build during my 14 days of Clones challenge.</span>
          <span>Technology used: Css, React Js, Some external npm Pakages, API.</span><span>
npm packages used: react-youtube , axios, movie-trailer, react-cookie, react-router-dom.</span>
<span>API used: Tmdb for movies data and posters.</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <img src="https://raw.githubusercontent.com/thisisharsh7/14-days-of-Clones/main/web-screenshot/digitalocean.jpg" className="w-80" />
        <div>
          <h1>DigitalOcean - The developer community</h1>
          <p><span>It is a DigitalOcean landing page clone which I build during my 14 days of Clones challenge.</span>
          <span>Technology used: React Js, Tailwind CSS.</span><span>
Responsive at different screen width.</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10">
        <img src="https://raw.githubusercontent.com/thisisharsh7/30-Days-of-code/main/rest-countries-api-with-color-theme-switcher-master/screenshot40.jpg" className="w-80" />
        <div>
          <h1>Where in the world?</h1>
          <p><span>This project was made during my 30 days of Code challenge.</span>
          <span>Technology used: Css, React Js, API.</span><span>It is also a project listed on front-end mentor challenge.</span>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
