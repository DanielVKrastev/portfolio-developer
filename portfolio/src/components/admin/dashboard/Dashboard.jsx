export default function Dashboard() {
    return (
        <>
                <h1 className="mb-6 text-3xl font-bold">Welcome to Admin Panel</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <section className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                        <h2 className="mb-2 text-xl font-semibold">Projects</h2>
                        <p className="text-sm">Add, Update and remove projects.</p>
                    </section>
                    <section className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                        <h2 className="mb-2 text-xl font-semibold">Contacts form</h2>
                        <p className="text-sm">See messages.</p>
                    </section>
                </div>
        </>
    )
}