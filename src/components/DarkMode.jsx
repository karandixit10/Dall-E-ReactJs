import React, { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Set the initial theme based on user's preference or system setting
    useEffect(() => {
        const isDark =
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        setDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <div
                className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ${
                    darkMode ? 'translate-x-6' : ''
                }`}
            >
                {darkMode ? (
                    <IoMoon className="absolute inset-0 w-full h-full text-indigo-600 transition-opacity duration-300" />
                ) : (
                    <IoSunny className="absolute inset-0 w-full h-full text-yellow-400 transition-opacity duration-300" />
                )}
            </div>
        </button>
    );
};

export default DarkMode;
