import { ScrollReveal } from "../../scroll-reveal/ScrollReveal";

export default function ProjectCard({
    name,
    projectUrl,
    description,
    imageUrl,
    techStack,
    githubRepo
}) {
    const techStackArr = techStack.split(", ");

    return (
        <ScrollReveal>
            <div className="relative h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-2xl">
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
                    <div className="mb-8 flex flex-wrap gap-2">
                        {techStackArr.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="absolute bottom-0 mb-2 m-auto">
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto inline font-semibold text-default-600 transition hover:text-default-800"
                        >
                            View Project →
                        </a>

                        <a
                            href={githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-30 inline font-semibold text-default-600 transition hover:text-default-800"
                        >
                            GitHub Repo →
                        </a>
                    </div>

                </div>
            </div>
        </ScrollReveal>
    );
}