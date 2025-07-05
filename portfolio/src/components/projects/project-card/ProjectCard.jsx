import { ScrollReveal } from "../../scroll-reveal/ScrollReveal";

export default function ProjectCard({
    name,
    projectUrl,
    description,
    imageUrl,
    techStack,
}) {
    const techStackArr = techStack.split(", ");

    return (
        <ScrollReveal>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-2xl">
                {/* Image */}
                <img
                    src={imageUrl}
                    alt={`project-${name}`}
                    className="h-52 w-full object-cover"
                />

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-2xl font-semibold text-gray-800">{name}</h3>

                    <p className="mb-4 line-clamp-7 text-gray-600">{description}</p>

                    {/* Tech stack */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {techStackArr.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block font-semibold text-default-600 transition hover:text-default-800"
                    >
                        View Project →
                    </a>
                </div>
            </div>
        </ScrollReveal>
    );
}