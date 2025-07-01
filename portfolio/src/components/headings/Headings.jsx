import { ArrowRightCircle } from "lucide-react";

export default function Headings({
  aboutMe,
  techStack
}) {
  return (
    <section id="home" className="relative -mt-20 bg-center bg-no-repeat bg-cover bg-[url('/images/background.png')]  bg-gray-900/10 bg-gradient bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="order-2 sm:order-1">
            <h1 className="mb-6 text-5xl font-extrabold italic tracking-tight leading-tight text-default-50 md:text-6xl lg:text-7xl">
              {aboutMe?.name}
            </h1>
            <h2 className="mb-6 text-4xl font-extrabold italic tracking-tight leading-tight text-default-50 md:text-4xl lg:text-4xl">
              {aboutMe?.headline}
            </h2>
            <p className="mb-8 text-lg font-light italic text-gray-200 md:text-xl lg:px-0">
              {aboutMe?.headlineDescription}
            </p>
            <p className="mb-8 text-lg font-light italic text-gray-200 md:text-xl lg:px-0">
              Tech Stack
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-white">

              {techStack.slice(2).map((skill) => {
                return (
                  <div key={skill._id}
                    style={{ '--bg': skill.bgColor }}
                   className={`flex items-center justify-center gap-2 px-4 py-2 [background:var(--bg)] hover:[filter:brightness(0.8)] text-white rounded-xl shadow-md transition-all duration-300`}>
                    <img src={skill.imageUrl} alt="JavaScript" className="w-5 h-5" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                )
              })}

            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-default-600 hover:bg-default-800 rounded-lg shadow-lg transition"
              >
                Projects
                <ArrowRightCircle className="w-6 ml-2" />
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
