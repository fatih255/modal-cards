import tailwindcss from './tailwind.config.js'
export const plugins = {
  cssnano: {},
  tailwindcss:
    process.env.NODE_ENV === 'parsecss'
      ? { ...tailwindcss, important: true, corePlugins: { preflight: false } }
      : {},
  autoprefixer: {},
}
