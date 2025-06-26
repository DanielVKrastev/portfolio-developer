import { useEffect, useState } from "react";
import contactsApi from "../../../../api/contactsApi";
import { X } from "lucide-react";

export default function ModalContact({
    id,
    closeModal,
    handleChange,
    handleSubmit
}
) {
    const [form, setForm] = useState({});
    useEffect(() => {
        async function getFetching() {
            if (!id) return;
            const data = await contactsApi.getOne(id);
            setForm(data);
        }

        getFetching();
    }, [id]);
    return (
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
                            defaultValue={form.name}
                            onChange={handleChange}
                            readOnly
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input
                            name="email"
                            defaultValue={form.email}
                            onChange={handleChange}
                            readOnly
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Subject</label>
                        <input
                            name="subject"
                            defaultValue={form.subject}
                            onChange={handleChange}
                            readOnly
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            defaultValue={form.message}
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
    );
}