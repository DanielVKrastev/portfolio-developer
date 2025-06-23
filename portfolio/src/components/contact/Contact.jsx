import { SendIcon } from "lucide-react";

export default function Contact() {
    return (
        <>
            <section id="contacts" className="relative -mt-20 bg-center bg-no-repeat bg-cover bg-[url('/images/background.png')]  bg-gray-900/10 bg-gradient bg-blend-multiply">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <div className="max-w-5xl mx-auto text-center mb-12 px-4">
                        <h2 className="text-4xl font-bold text-gray-50 mb-3">Contact</h2>
                        <hr className="w-10 mx-auto border-t-4 rounded-2xl border-default-600" />
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-200 sm:text-xl">
                            Got a technical issue? Want to send feedback about a beta feature? Need
                            details about our Business plan? Let us know.
                        </p>
                    </div>

                    <form action="#" className="space-y-8">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-200"
                            >
                                Your name
                            </label>
                            <input
                                type="name"
                                id="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="John Doe"
                                required=""
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-200"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="name@yourdomain.com"
                                required=""
                            />
                        </div>
                        {/* Subject */}
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-200"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Inquiry"
                                required=""
                            />
                        </div>
                        {/* Message */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-200"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Your message here..."
                                defaultValue={""}
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-default-600 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-default-300"
                        >
                            <SendIcon className="w-5 h-5" />
                            Send message
                        </button>
                    </form>
                </div>
            </section>

        </>
    );
}