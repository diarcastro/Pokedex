const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  safelist: [
    'bg-normal',
    'bg-fighting',
    'bg-flying',
    'bg-poison',
    'bg-ground',
    'bg-rock',
    'bg-bug',
    'bg-ghost',
    'bg-steel',
    'bg-fire',
    'bg-water',
    'bg-grass',
    'bg-electric',
    'bg-psychic',
    'bg-ice',
    'bg-dragon',
    'bg-dark',
    'bg-fairy',
    'bg-unknown',
    'bg-shadow',
  ],
  theme: {
    extend: {
      colors: {
        normal: colors.slate[50],
        fighting: colors.indigo[300],
        flying: colors.sky[300],
        poison: colors.lime[300],
        ground: colors.green[200],
        rock: colors.stone[300],
        bug: colors.violet[200],
        ghost: colors.rose[100],
        steel: colors.stone[200],
        fire: colors.yellow[300],
        water: colors.blue[300],
        grass: colors.emerald[300],
        electric: colors.yellow[200],
        psychic: colors.pink[100],
        ice: colors.sky[100],
        dragon: colors.purple[300],
        dark: colors.stone[400],
        fairy: colors.fuchsia[200],
        unknown: colors.stone[50],
        shadow: colors.zinc[200],
      },
    },
  },
  plugins: [],
}
