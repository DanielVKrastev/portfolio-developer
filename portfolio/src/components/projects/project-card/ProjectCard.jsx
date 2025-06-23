export default function ProjectCard() {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                {/* Image */}
                <img
                    src="/images/background.png"
                    alt="Project Name"
                    className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Title</h3>
                    <p className="text-gray-600 mb-4">
                        A short description of the project goes here. It explains the purpose, features or challenges tackled.
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">React</span>
                        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
                        <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">Node.js</span>
                    </div>

                    {/* Link */}
                    <a
                        href="https://your-live-project-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-default-600 hover:text-default-800 font-semibold transition"
                    >
                        View Project →
                    </a>
                </div>
            </div>

        </>
    );
}