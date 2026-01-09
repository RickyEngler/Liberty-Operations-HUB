import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3affbc',
        secondary: '#322b44',
        dark: '#201b2c',
        'dark-header': '#0e0c11',
      },
    },
  },
  plugins: [],
}
export default config
