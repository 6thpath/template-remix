import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        inherit: 'inherit',
      },
      fontFamily: {
        primary: ['Nunito', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [aspectRatio, containerQueries, typography],
} satisfies Config
