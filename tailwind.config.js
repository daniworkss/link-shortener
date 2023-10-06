/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens :{
        'mobile' : '375px',
        'tablet': '768px',
        'laptop': '1200px',
        'desktop': '1440px'
      },
      colors:{
        // advance-stats color
        'advancestat-bg':'#eff0f6',
        // primary
        'cyan': 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        // secondary
        'red': 'hsl(0, 87%, 67%)',
        // neutral
       'Gray': 'hsl(0, 0%, 75%)',
       'Grayish-Violet': 'hsl(257, 7%, 63%)',
       'Vdark-Blue': 'hsl(255, 11%, 22%)',
      'Vdark-Violet': 'hsl(260, 8%, 14%)'

      }
    },
    
  },
  plugins: [],
}
