/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "morado-oscuro": "#21092F",
      },
      spacing: {
        26: "6.6rem", // Esto asume que estás usando la escala predeterminada de 0.25rem para las unidades de espaciado.
      },
    },
  },
  plugins: [],
};
