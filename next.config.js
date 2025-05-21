const nextTranslate = require('next-translate-plugin');
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

module.exports = withMDX(
	nextTranslate({
		webpack: (config) => {
			config.module.rules.push({
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			});
			return config;
		},
		pageExtensions: ['page.js', 'page.mdx', '.mdx', '.js'],
		reactStrictMode: true,
		i18n: {
			locales: ['en', 'jp'],
			defaultLocale: 'en',
			localeDetection: false,
		},
	})
);
