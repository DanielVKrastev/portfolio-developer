import { useEffect, useState } from "react";
import { Plus, Pencil, Trash, Upload } from "lucide-react";
import skillsApi from "../../../api/skillsApi";
import Modal from "./modal/Modal";
import { useAdminContext } from "../../../contexts/AdminContext";

export default function SkillsTable() {
    const { admin } = useAdminContext();
    const accessToken = admin.accessToken;

    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(null); // null → add, object → edit
    const initialForm = {
        name: "",
        level: 0,
        imageUrl: "",
    };
    const [form, setForm] = useState(initialForm);

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        async function getAllSkills() {
            const data = await skillsApi.getAll();
            setSkills(data);
        }

        getAllSkills();
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (current) {
            // update
            await skillsApi.update(accessToken, current._id, form);
            setSkills((prev) =>
                prev.map((s) => (s._id === current._id ? { ...current, ...form } : s))
            );
        } else {
            // add
            const data = await skillsApi.create(accessToken, form);
            setSkills((prev) => [
                ...prev,
                { _id: data._id, ...form },
            ]);
        }
        closeModal();
    };

    const deleteSkill = async (id) => {
        if (confirm("Are you sure you want delete this skill?")) {
            // delete
            await skillsApi.delete(accessToken, id);
            setSkills((prev) => prev.filter((s) => s._id !== id));
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
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">BG Color</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
                        {skills.map((s, idx) => (
                            <tr key={s._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
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
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{s.bgColor}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openEdit(s)}
                                            className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteSkill(s._id)}
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
            {modalOpen && <Modal
                id={form?._id}
                current={current}
                closeModal={closeModal}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                />
            }
        </section>
    );
}