import { X } from "lucide-react";
import { useEffect, useState } from "react";
import aboutApi from "../../../../api/aboutApi";

export default function ModalAbout(
    {
        id,
        current,
        closeModal,
        handleChange,
        handleSubmit
    }
) { 
    const [form, setForm] = useState({});
    useEffect(() => {
        async function getFetching() {
            if(!id) return;
            const data = await aboutApi.getOne(id);
            setForm(data);
        }

        getFetching();
    }, [id]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 overflow-x-auto">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800">
                <div className="mb-4 flex items-center justify-between border-b pb-2 dark:border-gray-700">
                    <h2 className="text-xl font-semibold">
                        {current ? "Update About" : "New About"}
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
                            required
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Headline</label>
                        <input
                            name="headline"
                            defaultValue={form.headline}
                            onChange={handleChange}
                            required
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Headline Description</label>
                        <textarea 
                            name="headlineDescription" 
                            onChange={handleChange}
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        >
                            {form.headlineDescription}
                        </textarea>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Main Description</label>
                        <textarea 
                            name="mainDescription"
                            onChange={handleChange}
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        >
                            {form.mainDescription}
                        </textarea>
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Age</label>
                        <input
                            name="age"
                            type="number"
                            defaultValue={form.age}
                            onChange={handleChange}
                            required
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Location</label>
                        <input
                            name="location"
                            defaultValue={form.location}
                            onChange={handleChange}
                            required
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input
                            name="email"
                            defaultValue={form.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Experience</label>
                        <input
                            type="number"
                            name="experience"
                            defaultValue={form.experience}
                            onChange={handleChange}
                            required
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Image URL</label>
                        <input
                            name="imageUrl"
                            defaultValue={form.imageUrl}
                            onChange={handleChange}
                            className="w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Image URL - 2</label>
                        <input
                            name="imageUrl2"
                            defaultValue={form.imageUrl2}
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
    );
}