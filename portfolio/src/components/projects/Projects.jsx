import { SidebarClose } from "lucide-react";
import ProjectCard from "./project-card/ProjectCard";
import { ScrollReveal } from "../scroll-reveal/ScrollReveal";

export default function Projects({
    projects
}) {
    return (
        <>
            <section id="projects" className="bg-gray-50 py-20 px-4">
                <ScrollReveal>
                    <div className="max-w-5xl mx-auto text-center mb-12 px-4">
                        <h2 className="text-4xl font-bold text-gray-800 mb-3">Projects</h2>
                        <hr className="w-10 mx-auto border-t-4 rounded-2xl border-default-600" />
                        <p className="text-lg text-gray-600 mt-4">
                            Here you will find some of the personal and clients projects that I created with each project containing its own case study.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 max-w-7xl mx-auto">
                    {projects.map((p) => (
                        <ProjectCard
                            key={p._id}
                            name={p.name}
                            projectUrl={p.projectUrl}
                            description={p.description}
                            imageUrl={p.imageUrl}
                            techStack={p.techStack}

                        />)
                    )}

                </div>
            </section>
        </>
    );
}