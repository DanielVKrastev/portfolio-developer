import { useEffect, useState } from "react";
import { Plus, Pencil, Trash } from "lucide-react";
import ModalAbout from "./modal-about/ModalAbout";
import aboutApi from "../../../api/aboutApi";

export default function AboutTable() {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(null); // null → add, object → edit
    const initialForm = {
        name: "",
        headline: "",
        headlineDescription: "",
        mainDescription: "",
        age: 24,
        location: "",
        email: "",
        experience: "",
        imageUrl: "",
        imageUrl2: "",
    };
    const [form, setForm] = useState(initialForm);

    const [about, setAbout] = useState([]);

    useEffect(() => {
        async function getAllFetching() {
            const data = await aboutApi.getAll();
            setAbout(data);
        }

        getAllFetching();
    }, []);

    const openAdd = () => {
        setCurrent(null);
        setForm(initialForm);
        setModalOpen(true);
    };

    const openEdit = (about) => {
        setCurrent(about);
        setForm(about);
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
            console.log(form);
            
            await aboutApi.update(current._id, form);
            setAbout((prev) =>
                prev.map((a) => (a._id === current._id ? { ...current, ...form } : a))
            );
        } else {
            // add
            const data = await aboutApi.create(form);
            setAbout((prev) => [
                ...prev,
                { _id: data._id, ...form },
            ]);
        }
        closeModal();
    };

    const deleteSkill = async (id) => {
        if (confirm("Are you sure you want delete this About?")) {
            // delete
            await aboutApi.delete(id);
            setAbout((prev) => prev.filter((s) => s._id !== id));
        }
    };

    return (
        <section id="about" className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">About me</h1>
                <button
                    onClick={openAdd}
                    className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <Plus className="h-4 w-4" /> Add About
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Headline</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Head Desc</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Main Desc</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Age</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Experience</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Image1</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Image2</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
                        {about.map((a, idx) => (
                            <tr key={a._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{idx + 1}</td>
                                <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">{a.name}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.headline}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.headlineDescription.slice(0, 30)}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.mainDescription.slice(0, 30)}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.age}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.location}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.email}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{a.experience}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    {a.imageUrl ? (
                                        <img src={a.imageUrl} alt={a.name} className="h-6 w-6 object-contain" />
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    {a.imageUrl ? (
                                        <img src={a.imageUrl2} alt={a.name + '-1'} className="h-6 w-6 object-contain" />
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openEdit(a)}
                                            className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteSkill(a._id)}
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
            {modalOpen && <ModalAbout
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