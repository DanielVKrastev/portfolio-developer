// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {}, 
  },
  safelist: [
    {
      pattern: /(bg|hover:bg)-(yellow|cyan|green|indigo|sky|orange)-(500|600)/,
    },
  ],
};
