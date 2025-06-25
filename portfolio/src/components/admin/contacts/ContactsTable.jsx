import { useState } from "react";
import { Trash, X, EyeIcon } from "lucide-react";

export default function ContactsTable() {
    const [modalOpen, setModalOpen] = useState(false);
    const [current, setCurrent] = useState(null); // null → add, object → edit

    const initialForm = {
        name: "",
        issuedBy: "",
        certificateUrl: "",
    };

    const [form, setForm] = useState(initialForm);
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "Daniel Krastev",
            email: "daniel@example.com",
            subject: "Test subject",
            message: "bla lba bla",
            date: "bla lba bla",
        },
    ]);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current) {
            setContacts((prev) =>
                prev.map((c) => (c.id === current.id ? { ...current, ...form } : c))
            );
        } else {
            setContacts((prev) => [
                ...prev,
                { id: Date.now(), ...form },
            ]);
        }
        closeModal();
    };

    const deleteContact = (id) => {
        if (confirm("Are you sure you want to delete the contact?")) {
            setContacts((prev) => prev.filter((c) => c.id !== id));
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
                            <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{idx + 1}</td>
                                <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">{c.name}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.email}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.subject}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.message}</td>
                                <td className="px-4 py-3 text-sm whitespace-nowrap">
                                    <a
                                        href={c.email}
                                        target="_blank"
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
                                            onClick={() => deleteContact(c.id)}
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
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
                        <div className="mb-4 flex items-center justify-between border-b pb-2 dark:border-gray-700">
                            <h2 className="text-xl font-semibold">
                                Look Message
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
                                    readOnly
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Email</label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    readOnly
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Subject</label>
                                <input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    readOnly
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                />
                            </div>
                             <div>
                                <label className="mb-1 block text-sm font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    readOnly
                                    className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                                    rows={7}
                                />
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                                >
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}