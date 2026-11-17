/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0d1117',
          panel: '#161b22',
          border: '#30363d',
          green: '#3fb950',
          amber: '#d29922',
          blue: '#58a6ff',
          dim: '#8b949e',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
