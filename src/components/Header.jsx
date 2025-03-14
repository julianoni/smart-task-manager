import { useState, useEffect } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
            <h1 className="text-xl font-bold dark:text-white">Task Manager</h1>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded bg-gray-300 dark:bg-gray-600"
            >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </header>
    );
};

export default Header;
