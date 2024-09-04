import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isBlogPage = location.pathname === "/blog" || /^\/blog\/[^/]+/.test(location.pathname);

    const navItems = [
        { name: "Home", slug: "/" },
        { name: "Services", slug: "/services" },
        { name: "Projects", slug: "/project" },
        { name: "Blog", slug: "/blog" },
        { name: "Contact", slug: "/contact" }
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    return (
        <header >
            <nav className={`border-gray-200 ${isBlogPage ? 'bg-[#D5D9E5] text-black' : 'bg-white dark:bg-[#11112B] dark:text-white'}`}>
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isBlogPage ? 'text-black' : 'text-gray-900 dark:text-white'}`}>GutenSol</span>
                    </Link>
                    <button
                        onClick={handleToggle}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className={`md:block ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${isBlogPage ? 'bg-[#D5D9E5] text-black' : 'bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900'} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 justify-center`}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.slug}
                                        className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ${isBlogPage ? 'text-black' : 'text-gray-900 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
                                        onClick={handleMenuItemClick}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
