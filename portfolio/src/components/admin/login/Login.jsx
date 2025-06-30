import { useNavigate } from "react-router";
import authApi from "../../../api/authApi";
import { useAdminContext } from "../../../contexts/AdminContext";

export default function Login() {
    const navigate = useNavigate();
    const { _admin , setAdmin } = useAdminContext();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        try {
            const resultAdmin = await authApi.login(email, password);
            
            if (resultAdmin) {
                setAdmin({
                    accessToken: resultAdmin.accessToken,
                    email: resultAdmin.email,
                });
                
                navigate("/admin");
            } else {
                alert("You do not have access to the admin panel");
            }
        } catch (error) {
            console.log(error);
            alert("The wrong email or password");
        }
    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center w-full bg-center bg-no-repeat bg-cover bg-[url('/images/background_light.png')] dark:bg-[url('/images/background.png')] bg-gradient bg-blend-multipl">
                <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
                    <h1 className="text-2xl font-bold text-center mb-4">
                        Welcome To Admin Panel!
                    </h1>
                    <form onSubmit={handleSubmitLogin}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}