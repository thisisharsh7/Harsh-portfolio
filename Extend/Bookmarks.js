export default function Bookmarks() {
  return (
    <section className=" w-full flex flex-col gap-6 max-w-screen-md pt-2 ">
      <h1 className="text-3xl relative font-semibold before:content-[''] before:w-full before:h-0.5 before:bottom-0 before:bg-black before:absolute">
        Bookmarks
      </h1>
      <div className="flex flex-col gap-8">
        <p>Here are some websites I liked..</p>
        <ul className="flex flex-wrap gap-5">
          <li>
            <a
              href="https://neal.fun/"
              target="_blank"
              className="text-green-900 underline"
            >
              Neal.Fun
            </a>
          </li>
          <li>
            <a
              href="https://thanaverage.xyz/"
              target="_blank"
              className="text-green-900 underline"
            >
              theAverage
            </a>
          </li>
          <li>
            <a
              href="https://zoomquilt.org/"
              target="_blank"
              className="text-green-900 underline"
            >
              Zoomquilt
            </a>
          </li>
          <li>
            <a
              href="https://xxiivv.com/"
              target="_blank"
              className="text-green-900 underline"
            >
              Echoridoors
            </a>
          </li>
          <li>
            <a
              href="https://en.savefrom.net/244/"
              target="_blank"
              className="text-green-900 underline"
            >
              savefromNet
            </a>
          </li>
          <li>
            <a
              href="https://personalsit.es/"
              target="_blank"
              className="text-green-900 underline"
            >
              PersonalSites
            </a>
          </li>
          <li>
            <a
              href="https://www.donchia.tech/"
              target="_blank"
              className="text-green-900 underline"
            >
              PcVersion
            </a>
          </li>
          <li>
            <a
              href="https://theoldnet.com/"
              target="_blank"
              className="text-green-900 underline"
            >
              oldInternet
            </a>
          </li>
          <li>
            <a
              href="https://www.windows93.net/"
              target="_blank"
              className="text-green-900 underline"
            >
              windows93
            </a>
          </li>
          <li>
            <a
              href="https://research.google.com/semantris/"
              target="_blank"
              className="text-green-900 underline"
            >
              AiGame
            </a>
          </li>
          <li>
            <a
              href="https://colornames.org/"
              target="_blank"
              className="text-green-900 underline"
            >
              colornames
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
