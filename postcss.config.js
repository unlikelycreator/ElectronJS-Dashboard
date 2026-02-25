// postcss.config.js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},   // ← this line fixes it
    autoprefixer: {},             // optional, but v4 has some built-in prefixing
  },
}