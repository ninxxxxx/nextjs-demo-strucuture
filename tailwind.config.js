// tailwind.config.js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ]
  // ...
}
