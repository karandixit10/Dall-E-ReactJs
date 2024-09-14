import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";

const Header = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setDark(isDark);
    }, []);

    return (
        <motion.header
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-between items-center bg-white border-b-[#e6ebf4]
                dark:bg-zinc-800 dark:border-b-zinc-700  sm:px-8 px-4 py-4 border-b"
        >
            <Link to="/">
                <motion.img
                    src={logo}
                    alt="logo"
                    className="w-28 object-contain"
                    whileHover={{ scale: 1.1 }}
                />
            </Link>
            <div className="flex items-center justify-center gap-[2vh]">
                <DarkMode />
                <Link to="/create-post">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-md font-inter font-medium ${
                            dark ? "bg-[#6a0dad]" : "bg-[#8364ff]"
                        } text-white`}
                    >
                        Create Post
                    </motion.button>
                </Link>
            </div>
        </motion.header>
    );
};

export default Header;