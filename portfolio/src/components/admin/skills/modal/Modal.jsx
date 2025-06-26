import { X } from "lucide-react";

export default function Modal(
    {
    form,
    current,
    closeModal,
    handleChange,
    handleSubmit
    }
) {
    console.log(form._id);
    
   return (
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
   );
}