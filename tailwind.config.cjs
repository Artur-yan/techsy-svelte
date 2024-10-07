/** @type {import('tailwindcss').Config} */

var colors = require('./src/twdPlugin/colors.cjs')
var fonts = require('./src/twdPlugin/fonts.cjs')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		test:{
			backgroundColor: "#DE3C4B",
		},

		fontSize: {
			xs: '0.75rem', // for small text like labels
			sm: '0.875rem', // for body copy
			base: '1rem', // 16
			lgbase: '1rem', // 17px
			lg: '1.125rem', // 18px
			'2xlg': '1.188rem', // 19px
			xl: '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '1.875rem',
			'4xl': '2.125rem', //34px
			'5xl': '2.25rem',
			'6xl': '2.5rem', // 40px
			'7xl': '3rem',
			'8xl': '4rem'
		},
		extend: {
			backgroundColor: {
				...colors,
				bgBlue: '#071E3F',
				bgPink: '#D83A47',
				bgRed: '#DE3C4B',
				bgDarkerRed: '#CB3644',
				bgGrey: '#EDF1F5',
				bgLightGrey: '#E6EBEF',
				bgWhiteSmoke: '#F5F5F5',
				bgWhiteGradient: 'linear-gradient(180deg, #ffffff 34.92%, rgba(255, 255, 255, 0.38) 100%)'
			},
			colors: {
				bgBlue: '#071E3F',
				bgRed: '#DE3C4B',
				GrayLight: '#C3CAD1'
			},
			fontFamily: {
				...fonts
			},
			textColor: {
				...colors,
				bgDarkBlue: '#042042',
				bgBlue: '#071E3F',
				LightRed: '#C63838',
				Red: '#DE3C4B',
				Grey: '#959DA7',
				Black: '#333333'
			},
			container: {
				padding: {
					DEFAULT: '1.5rem'
				}
			}
		}
	},
	plugins: [require('daisyui'),
	require('./src/twdPlugin/index.cjs')
		
	],
	tailwindcss: {},
	autoprefixer: {},
	...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
};
