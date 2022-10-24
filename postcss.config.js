/* eslint-disable @typescript-eslint/no-var-requires */

const tailwindcss = require('./tailwind.config.js')

module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nested',
    tailwindcss:
      process.env.NODE_ENV === 'parsecss'
        ? {
          ...tailwindcss,
          important: true,
          corePlugins: { preflight: false },
        }
        : {},
    autoprefixer: {},
  },
}
