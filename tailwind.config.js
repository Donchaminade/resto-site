module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {
    colors: { brand: '#ff6a1a', ink: '#1d1d1d', cream: '#fff8f3', night: '#2b2226', muted: '#7a7a7a' },
    fontFamily: { serif: ['"Playfair Display"', 'serif'], sans: ['Poppins', 'sans-serif'], script: ['"Dancing Script"', 'cursive'] },
    boxShadow: { card: '0 10px 40px -12px rgba(0,0,0,.15)' },
  } },
};
