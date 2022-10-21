const tailwindcss = require('./tailwind.config.js')
module.exports = {
  plugins: {
    cssnano: {},
    tailwindcss: process.env.NODE_ENV === 'parsecss' ? { ...tailwindcss, important: true, corePlugins: { preflight: false } } : {},
    autoprefixer: {},
  },
}
