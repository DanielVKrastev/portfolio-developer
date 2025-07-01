import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [openMobileNav, setOpenMobileNav] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navClasses = `sticky top-0 left-0 w-full transition-all duration-300 z-50 border-b border-gray-500 ${scrolled || openMobileNav ? 'bg-gray-50/98 shadow-md' : 'bg-transparent'}`;
    const liClassesActive = `block py-2 px-3 md:p-0 ${openMobileNav? 'text-black' : 'text-white'} bg-default-700 rounded-sm md:bg-transparent ${scrolled || openMobileNav ? 'md:text-default-700' : 'bg-white'}`;
    const liClassesNoActive = `block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent ${scrolled ? 'md:text-gray-700 md:hover:text-default-700' : 'md:text-gray-400 md:hover:text-white'} `;

    return (
        <>
            <nav className={navClasses}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className={`self-center text-2xl font-semibold whitespace-nowrap ${scrolled || openMobileNav ? 'text-default-600' : 'text-white'}`}>
                            DanielKrastev.
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <a
                            href="#contacts"
                            type="button"
                            className="text-white bg-default-600 hover:bg-default-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Contacts
                        </a>
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-cta"
                            aria-expanded="false"
                            onClick={() => setOpenMobileNav(state => !state)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`absolute left-0 top-full z-40 w-full
                                    bg-white/95 backdrop-blur
                                    border-b border-gray-200
                                    ${openMobileNav ? 'block' : 'hidden'}
                                    md:static md:flex md:w-auto md:bg-transparent md:border-0`}
                        id="navbar-cta"
                    >
                        <ul className="flex flex-col text-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a
                                    href="#"
                                    className={`${location.hash === '' ? liClassesActive : liClassesNoActive }`}
                                    aria-current="page"
                                    onClick={() => {
                                        setOpenMobileNav(false);
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={`${location.hash === '#about'? liClassesActive : liClassesNoActive }`}
                                    onClick={() => {
                                        setOpenMobileNav(false);
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    className={`${location.hash === '#skills'? liClassesActive : liClassesNoActive }`}
                                    onClick={() => {
                                        setOpenMobileNav(false);
                                    }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className={`${location.hash === '#projects'? liClassesActive : liClassesNoActive }`}
                                    onClick={() => {
                                        setOpenMobileNav(false);
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}