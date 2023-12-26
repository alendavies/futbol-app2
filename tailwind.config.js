/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#14b8a6",
                    secondary: "#16181b",
                    accent: "#3c87ad",
                    neutral: "#171717",
                    info: "#273136",
                    "base-100": "#262626",
                    "base-content": "#525252",
                },
            },
        ],
    },
};
