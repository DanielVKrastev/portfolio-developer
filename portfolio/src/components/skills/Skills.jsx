import { useEffect, useState } from "react";
import { ScrollReveal } from "../scroll-reveal/ScrollReveal";
import skillsApi from "../../api/skillsApi";

export default function Skills() {
    const [techStack, setTechStack] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await skillsApi.getAll();
            setTechStack(data);
        }

        getData();
    }, []);

    console.log(techStack);
    
    const certificates = [
        {
            title: "TypeScript - May 2025",
            issuer: "SoftUni Bulgaria",
            url: "https://softuni.bg/certificates/details/245040/39b88539",
        },
        {
            title: "ReactJS - February 2025",
            issuer: "SoftUni Bulgaria",
            url: "https://softuni.bg/certificates/details/241563/3203dc91",
        },
        {
            title: "JavaScript Back-End – January 2025",
            issuer: "SoftUni Bulgaria",
            url: "https://softuni.bg/certificates/details/237750/5562140d",
        },
        {
            title: "JS Applications - Octomber 2024",
            issuer: "SoftUni Bulgaria",
            url: "https://softuni.bg/certificates/details/231970/81a683f5",
        },
        {
            title: "JS Advanced - September 2024",
            issuer: "SoftUni Bulgaria",
            url: "https://softuni.bg/certificates/details/222161/69c39473",
        },
        {
            title: "Programming Fundamentals JS - May 2024",
            issuer: "SoftUni Bulgaria",
            url: "https://softuni.bg/certificates/details/222161/69c39473",
        },
        {
            title: "Database Foundations - Oracle SQL Developer - 2022",
            issuer: "Oracle",
            url: "#",
        },
    ];

    /*const techStack = [
        { name: "HTML / CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 65 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Node.js / Express", level: 70 },
        { name: "PHP", level: 70 },
        { name: "MySQL", level: 85 },
    ];*/
    return (
        <>
            <section id="skills" className="bg-white py-20 px-4">
                <div className="max-w-5xl mx-auto text-center mb-12 px-4">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">Skills & Certificates</h2>
                    <hr className="w-10 mx-auto border-t-4 rounded-2xl border-default-600 mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Skills Progress Bars */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Tech Stack</h3>

                            {techStack.map((skill) => (
                                <ScrollReveal>
                                <div key={skill.name} className="mb-6">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="h-3 rounded-full bg-gradient-to-r from-default-800 via-default-500 to-default-400 transition-all"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>

                                </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Certificates */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Certificates</h3>

                            <ul className="space-y-4">
                                {certificates.map((cert) => (
                                    <ScrollReveal>
                                    <li
                                        key={cert.title}
                                        className="bg-gray-100 hover:bg-gray-200 transition p-4 rounded-xl shadow-sm"
                                    >
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                                            <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                                            <p className="text-sm text-gray-600">{cert.issuer}</p>
                                        </a>
                                    </li>
                                    </ScrollReveal>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
}