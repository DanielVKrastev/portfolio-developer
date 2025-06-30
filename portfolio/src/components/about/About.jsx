import { ArrowRightCircle, MessageSquareIcon } from "lucide-react";

export default function About({
    aboutMe
}) {
    const InfoBox = ({ title, value }) => (
        <div className="bg-default-50 p-4 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-gray-700 font-semibold text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-xl break-words">{value}</p>
        </div>
    );

    return (
        <>
            <section id="about" className="bg-gray-50 py-20">
                <div className="max-w-5xl mx-auto text-center mb-12 px-4">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">About Me</h2>
                    <hr className="w-10 mx-auto border-t-4 rounded-2xl border-default-600" />
                    <p className="text-lg text-gray-600 mt-4">
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="/images/daniel-portfolio-image.jpg"
                            alt="Daniel Krastev"
                            className="w-92 h-92 md:w-176 md:h-176 rounded-3xl object-cover shadow-xl border-4 border-gray-100"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-default-800 mb-2">Get to know me</h3>
                            <h4 className="text-xl font-medium text-default-600 mb-4">Hi, I’m {aboutMe?.name} 👋</h4>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {aboutMe?.mainDescription}
                            </p>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <InfoBox title="Age" value={aboutMe?.age} />
                            <InfoBox title="Location" value={aboutMe?.location} />
                            <InfoBox title="Email" value={aboutMe?.email} />
                            <InfoBox title="Experience" value={`${aboutMe?.experience}+ years`} />
                        </div>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-default-600 hover:bg-default-800 rounded-lg shadow-lg transition"
                            >
                                Projects <ArrowRightCircle className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="#contacts"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-default-600 hover:bg-default-800 rounded-lg shadow-lg transition"
                            >
                                <MessageSquareIcon className="w-5 h-5 mr-2" />
                                Contact Me
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}