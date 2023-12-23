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
                    primary: "#21282d",
                    secondary: "#16181b",
                    accent: "#3c87ad",
                    neutral: "#7f97ab",
                    info: "#273136",
                },
            },
        ],
    },
};
