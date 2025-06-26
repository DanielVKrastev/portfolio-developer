import { useEffect, useState } from "react";
import { Trash, X, EyeIcon } from "lucide-react";
import contactsApi from "../../../api/contactsApi";
import ModalContact from "./modal-contact/ModalContact";

export default function ContactsTable() {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(null); // null → add, object → edit

    const initialForm = {
        name: "",
        issuedBy: "",
        certificateUrl: "",
    };

    const [form, setForm] = useState(initialForm);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function getAllSkills() {
            const data = await contactsApi.getAll();
            setContacts(data);
        }

        getAllSkills();
    }, []);

    const openEdit = (cert) => {
        setCurrent(cert);
        setForm(cert);
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
            await contactsApi.update(current._id, form);
            setContacts((prev) =>
                prev.map((c) => (c._id === current._id ? { ...current, ...form } : c))
            );
        } else {
            // add
            const data = await contactsApi.create(form);
            setContacts((prev) => [
                ...prev,
                { _id: data._id, ...form },
            ]);
        }
        closeModal();
    };

    const deleteContact = async (id) => {
        if (confirm("Are you sure you want to delete the contact?")) {
            // delete
            await contactsApi.delete(id);
            setContacts((prev) => prev.filter((c) => c._id !== id));
        }
    };

    return (
        <section id="contacts" className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Contacts</h1>
            </div>

            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Subject</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Message</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Answer</th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
                        {contacts.map((c, idx) => (
                            <tr key={c._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{idx + 1}</td>
                                <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">{c.name}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.email}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.subject}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.message}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    <a
                                        href={`mailto:${c.email}?subject=Fw:${c.subject}`}
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Answer
                                    </a>
                                </td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => openEdit(c)}
                                            className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <EyeIcon className="h-4 w-4" />
                                        </button>
                                        <button
                                            onClick={() => deleteContact(c._id)}
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

            {/* ─ Modal ─ */}
            {modalOpen && <ModalContact
                id={form?._id}
                closeModal={closeModal}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />}
        </section>
    );
}