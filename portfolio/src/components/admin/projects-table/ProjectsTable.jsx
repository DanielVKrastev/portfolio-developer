import { useEffect, useState } from "react";
import { Menu, Plus, Pencil, Trash, X } from "lucide-react";
import projectsApi from "../../../api/projectsApi";
import { ModalProject } from "./modal-project/ModalProject";

export default function ProjectsTable() {

    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(null); // null → add, object → edit
    const initialForm = {
        name: "",
        description: "",
        techStack: "",
        imageUrl: "",
        projectUrl: "",
    };
    const [form, setForm] = useState(initialForm);

    // Dummy starter data (replace with API fetch)
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getAllSkills() {
            const data = await projectsApi.getAll();
            setProjects(data);
        }

        getAllSkills();
    }, []);

    const openAdd = () => {
        setCurrent(null);
        setForm(initialForm);
        setModalOpen(true);
    };

    const openEdit = (project) => {
        setCurrent(project);
        setForm(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (current) {
            // edit
            await projectsApi.update(current._id, form);
            setProjects((prev) =>
                prev.map((p) => (p._id === current._id ? { ...current, ...form } : p))
            );
        } else {
            // add
            const data = await projectsApi.create(form);
            setProjects((prev) => [
                ...prev,
                { _id: data._id, ...form },
            ]);
        }
        closeModal();
    };

    const deleteProject = async (id) => {
        if (confirm("Are you sure you want to delete the project?")) {
             await projectsApi.delete(id);
            setProjects((prev) => prev.filter((p) => p._id !== id));
        }
    };


    return (
        <>
            <section id="projects" className="max-w-5xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Projects</h1>
                    <button
                        onClick={openAdd}
                        className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <Plus className="h-4 w-4" /> Add project
                    </button>
                </div>

                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Tech Stack</th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">URL</th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
                            {projects.map((p, idx) => (
                                <tr key={p._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">{idx + 1}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{p.name}</td>
                                    <td className="px-4 py-3 text-sm max-w-xs truncate">{p.description}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">{p.techStack}</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                                        <a href={p.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                            Link
                                        </a>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => openEdit(p)}
                                                className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                aria-label="Edit"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => deleteProject(p._id)}
                                                className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                                aria-label="Delete"
                                            >
                                                <Trash className="h-4 w-4 text-red-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            { /* TODO: Create NEW component for modal */}
            {/* Modal Overlay */}
            {modalOpen && <ModalProject
                id={form?._id}
                current={current}
                closeModal={closeModal}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />}
        </>
    );
}
