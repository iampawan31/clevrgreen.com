module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      headerTitle: '2.5rem',
    },
    colors: {
      primary: '#93c43b',
      alternate: '#363636',
      secondary: '#ffffff',
      typo: '#4a4a4a',
      lessGray: '#666666',
      black: '#000000',
      lessBlack: '#242424',
    },
    fontFamily: {
      body: ['Varela'],
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
}
