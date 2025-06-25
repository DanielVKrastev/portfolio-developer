import { useState } from "react";
import { Menu, Plus, Pencil, Trash, X } from "lucide-react";

export default function ProjectsTable() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
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
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Personal Portfolio",
            description: "Site portfopli description",
            techStack: "React, Tailwind, Vite",
            imageUrl: "https://via.placeholder.com/120x80.png?text=Thumb",
            projectUrl: "https://example.com",
        },
    ]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current) {
            // edit
            setProjects((prev) =>
                prev.map((p) => (p.id === current.id ? { ...current, ...form } : p))
            );
        } else {
            // add
            setProjects((prev) => [
                ...prev,
                { id: Date.now(), ...form },
            ]);
        }
        closeModal();
    };

    const deleteProject = (id) => {
        if (confirm("Are you sure you want to delete the project?")) {
            setProjects((prev) => prev.filter((p) => p.id !== id));
        }
    };


    return (
        <>
            {/* Mobile Hamburger */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed left-4 top-4 z-50 rounded p-2 text-white shadow md:hidden bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                <Menu className="h-6 w-6" />
            </button>
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
                                <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
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
                                                onClick={() => deleteProject(p.id)}
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
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
                    <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
                        <div className="mb-4 flex items-center justify-between border-b pb-2 dark:border-gray-700">
                            <h2 className="text-xl font-semibold">
                                {current ? "Редактирай проект" : "Нов проект"}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Име</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Описание</label>
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Tech Stack</label>
                                <input
                                    name="techStack"
                                    value={form.techStack}
                                    onChange={handleChange}
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Image URL</label>
                                <input
                                    name="imageUrl"
                                    value={form.imageUrl}
                                    onChange={handleChange}
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Project URL</label>
                                <input
                                    name="projectUrl"
                                    value={form.projectUrl}
                                    onChange={handleChange}
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                                >
                                    Отказ
                                </button>
                                <button
                                    type="submit"
                                    className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    {current ? "Запази" : "Добави"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
