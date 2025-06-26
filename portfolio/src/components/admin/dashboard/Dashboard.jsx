import { Link } from 'react-router';
export default function Dashboard() {
    return (
        <>
            <h1 className="mb-6 text-3xl font-bold">Welcome to Admin Panel</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="mb-2 text-xl font-semibold">Projects</h2>
                    <Link to="/admin/projects">
                    <p className="text-sm">Add, Update and remove projects.</p>
                    </Link>
                </section>
                <section className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="mb-2 text-xl font-semibold">Skills</h2>
                    <Link to="/admin/skills">
                    <p className="text-sm">Add, Update and remove skills.</p>
                    </Link>
                </section>
                <section className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="mb-2 text-xl font-semibold">Certificates</h2>
                    <Link to="/admin/certificates">
                    <p className="text-sm">Add, Update and remove certificates.</p>
                    </Link>
                </section>
                <section className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
                    <h2 className="mb-2 text-xl font-semibold">Contacts form</h2>
                    <Link to="/admin/contacts">
                        <p className="text-sm">See messages.</p>
                    </Link>
                </section>
            </div>
        </>
    )
}