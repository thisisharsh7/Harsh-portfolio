
export default function Footer() {
  return (
    <footer className="flex items-center flex-col gap-10">
        <div className="flex  items-start w-full justify-between max-w-screen-md ">
            <div className="flex flex-col gap-3">
                <h1>Harsh Kumar</h1>
                <p className="max-w-md">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
            </div>
            <div className="flex flex-col gap-3">
                <h1>Profiles</h1>
                <ul className="flex gap-5">
                    <li>linkedIn</li>
                    <li>GitHub</li>
                    <li>Email</li>
                    <li>Twitter</li>
                    <li>Dev</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
        <p className="text-center">
          Copyright © 2022. Made by <span>Harsh Kumar</span>
          </p>
    </footer>
  )
}
