/* eslint-disable @typescript-eslint/no-var-requires */

const tailwindcss = require('./tailwind.config.js')

module.exports = {
  plugins: {
    tailwindcss:
      process.env.NODE_ENV === 'parsecss'
        ? {
            ...tailwindcss,
            important: '.popupsmart-preflight',
            corePlugins: { preflight: false },
          }
        : {},
    autoprefixer: {},
  },
}
