import { useState } from "react";
import { Plus, Pencil, Trash, X } from "lucide-react";

export default function SkillsTable() {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(null); // null → add, object → edit
    const initialForm = {
        name: "",
        level: "Intermediate",
        imageUrl: "",
    };
    const [form, setForm] = useState(initialForm);

    // Demo data
    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
            level: 80,
            imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
    ]);

    const openAdd = () => {
        setCurrent(null);
        setForm(initialForm);
        setModalOpen(true);
    };

    const openEdit = (skill) => {
        setCurrent(skill);
        setForm(skill);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current) {
            // update
            setSkills((prev) =>
                prev.map((s) => (s.id === current.id ? { ...current, ...form } : s))
            );
        } else {
            // add 
            setSkills((prev) => [
                ...prev,
                { id: Date.now(), ...form },
            ]);
        }
        closeModal();
    };

    const deleteSkill = (id) => {
        if (confirm("Сигурни ли сте, че искате да изтриете умението?")) {
            setSkills((prev) => prev.filter((s) => s.id !== id));
        }
    };

    return (
        <section id="skills" className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Skills</h1>
                <button
                    onClick={openAdd}
                    className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <Plus className="h-4 w-4" /> Add skill
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Level</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Logo</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
                        {skills.map((s, idx) => (
                            <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{idx + 1}</td>
                                <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">{s.name}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{s.level} %</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    {s.imageUrl ? (
                                        <img src={s.imageUrl} alt={s.name} className="h-6 w-6 object-contain" />
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openEdit(s)}
                                            className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteSkill(s.id)}
                                            className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
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

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
                        <div className="mb-4 flex items-center justify-between border-b pb-2 dark:border-gray-700">
                            <h2 className="text-xl font-semibold">
                                {current ? "Update Skill" : "New Skill"}
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
                                <label className="mb-1 block text-sm font-medium">Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Level</label>
                                <input
                                    type="number"
                                    max={100}
                                    min={0}
                                    name="level"
                                    value={form.level}
                                    onChange={handleChange}
                                    required
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
                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    {current ? "Save" : "Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}