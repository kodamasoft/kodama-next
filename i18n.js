module.exports = {
	locales: ['en', 'jp'],
	defaultLocale: 'en',
	extensionsRgx: /\.page\.(tsx|ts|js|jsx|mdx)$/,
	pages: {
		'*': ['common', 'release', 'projects'],
	},
};
