export default function Headings() {
  return (
    <section className="relative -mt-20 bg-center bg-no-repeat bg-cover bg-[url('/images/background-img.jpg')] bg-gray-900/90 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="order-2 sm:order-1">
            <h1 className="mb-6 text-5xl font-extrabold italic tracking-tight leading-tight text-default-50 md:text-6xl lg:text-7xl">
              Daniel Krastev
            </h1>
            <h2 className="mb-6 text-4xl font-extrabold italic tracking-tight leading-tight text-default-50 md:text-4xl lg:text-4xl">
              Web Developer
            </h2>
            <p className="mb-8 text-lg font-light italic text-gray-200 md:text-xl lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti dolorum praesentium officiis vel ad rem soluta voluptates.
            </p>
            <p className="mb-8 text-lg font-light italic text-gray-200 md:text-xl lg:px-0">
              Tech Stack
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-white">

              {/* JavaScript */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/javascript-icon.svg" alt="JavaScript" className="w-5 h-5" />
                <span className="font-medium">JavaScript</span>
              </div>

              {/* React */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/react-js-icon.svg" alt="React" className="w-5 h-5" />
                <span className="font-medium">React</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-green-300 hover:bg-green-400 text-black rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/node-js-icon.svg" alt="Node.js" className="w-5 h-5" />
                <span className="font-medium">Node.js</span>
              </div>

              {/* Tailwind */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/tailwind-css-icon.svg" alt="Tailwind" className="w-5 h-5" />
                <span className="font-medium">Tailwind</span>
              </div>


              {/* PHP */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/php-icon.svg" alt="PHP" className="w-8 h-5" />
                <span className="font-medium">PHP</span>
              </div>

              {/* MySQL */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-300 hover:bg-blue-400 text-black rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/mysql-icon.svg" alt="mysql" className="w-8 h-5" />
                <span className="font-medium">MySQL</span>
              </div>

              {/* Git */}
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-md transition-all duration-300">
                <img src="/icons/git-icon.svg" alt="Git" className="w-5 h-5" />
                <span className="font-medium">Git</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-default-600 hover:bg-default-800 rounded-lg shadow-lg transition"
              >
                Projects
                <svg
                  className="w-4 h-4 ms-2 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 14 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 5h12m0 0L9 1m4 4L9 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white hover:bg-white hover:text-default-800 rounded-lg transition"
              >
                About
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center sm:justify-end order-1 sm:order-2">
            <img
              className="rounded-full shadow-2xl w-92 h-92 md:w-150 md:h-150 object-cover border-4 border-default-500"
              src="/images/daniel-portfolio-image.jpg"
              alt="Daniel Krastev"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a href="#about" aria-label="Scroll down">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
