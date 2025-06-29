export default function ProjectCard({
    name,
    projectUrl,
    description,
    imageUrl,
    techStack,
}) {
    const techStackArr = techStack.split(', ');
    
    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                {/* Image */}
                <img
                    src={imageUrl}
                    alt={`project-${name}`}
                    className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
                    <p className="text-gray-600 mb-4">
                        {description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStackArr.map((t) => (
                            <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">{t}</span>
                        ))}
                    </div>

                    {/* Link */}
                    <a
                        href={projectUrl}
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