
export const primary = {
  lightest: '',
  light: '',
  main: '#80b500',
  dark: '',
  darkest: ''
}

export const secondary = {
  lightest: '',
  light: '',
  main: '#f7f5eb',
  dark: '',
  darkest: ''
}

export const neutral = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#071c1f',
  // #1C2536
  900: '#111927'
}

export const divider = '#D5E6FB'


export const createPalette = () => {

  return {
      primary,
      secondary,
      neutral,
      divider
  }
}