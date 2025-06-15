export default function Headings() {
  return (
    <section className="relative -mt-20 bg-center bg-no-repeat bg-cover bg-[url('/images/background-img.jpg')] bg-gray-900/90 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h1 className="mb-6 text-5xl font-extrabold italic tracking-tight leading-tight text-white md:text-6xl lg:text-7xl">
              Daniel Krastev
            </h1>
            <h2 className="mb-6 text-4xl font-extrabold italic tracking-tight leading-tight text-white md:text-4xl lg:text-4xl">
              Web Developer
            </h2>
            <p className="mb-8 text-lg font-light italic text-gray-200 md:text-xl lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti dolorum praesentium officiis vel ad rem soluta voluptates.
            </p>
            
        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-green-smoke-600 hover:bg-green-smoke-800 rounded-lg shadow-lg transition"
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
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white hover:bg-white hover:text-green-smoke-800 rounded-lg transition"
          >
            About
          </a>
        </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center sm:justify-end">
            <img
              className="rounded-full shadow-2xl w-92 h-92 md:w-150 md:h-150 object-cover border-4 border-green-smoke-500"
              src="/images/daniel-portfolio-image.jpg"
              alt="Daniel Krastev"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
