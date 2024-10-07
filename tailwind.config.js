/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        wave: "wave 8s ease-in-out infinite", // Animação de 8 segundos
      },
      keyframes: {
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%", // Fundo duas vezes maior que a tela para movimento perceptível
      },
    },
  },
  plugins: [],
};
