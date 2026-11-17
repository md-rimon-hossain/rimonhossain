/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#3b82f6",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9", // Headings (White/Bright)
          200: "#e2e8f0",
          300: "#cbd5e1", // Subheadings (Light Grey)
          400: "#94a3b8", // Body Text (Muted Grey)
          500: "#64748b", // Meta Info (Dark Grey)
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a", // Card/Section Background (Dark)
          950: "#020617", // Main Background (Darker)
        },
      },
    },
  },
  plugins: [],
};
