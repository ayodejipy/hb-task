const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'grey-soft': '#EBEBEB',
				'secondary': '#3DB0FF',
				'blue-aud': '#081494',
			},
			backgroundImage: {
				'signup-page': "url('/assets/female.png')",
			}
		},
	},
	plugins: [],
}
