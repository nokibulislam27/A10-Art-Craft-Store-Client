import  { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    // Optimized useEffect with dependency array
    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark', isDarkMode); // Use classList.toggle
    }, [isDarkMode]); // Only re-run when isDarkMode changes

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center rounded-full p-1 md:p-2 text-white bg-gray-900 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:bg-white dark:text-black dark:hover:bg-opacity-10"
        >
            {isDarkMode ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M17.721 3.483a1 1 0 0 1 0 1.414L12.586 10l5.135 5.136a1 1 0 0 1-1.414 1.414L10 12.586l-5.135 5.135a1 1 0 0 1-1.414-1.414L8.586 10l-5.136-5.135a1 1 0 0 1 1.414-1.414L10 7.414l5.135-5.136z"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M10.728 4.586a1 1 0 0 1 1.414 0l6.364 6.364a1 1 0 1 1-1.414 1.414l-6.364-6.364a1 1 0 0 1 0-1.414zM11.828 1.707a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1-1.414 1.414l-4.95-4.95a1 1 0 0 1 0-1.414z"
                        />
                        </svg>
      )}
                </button>
            );
};

            export default ThemeToggle;
