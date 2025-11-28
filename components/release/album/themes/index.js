// Theme loader utility
// Loads theme components with fallback to default

import DefaultTheme from './default';
import BlankTheme from './blank';
import YggdrasilTheme from './yggdrasil';

// Theme registry - add new themes here
const themeRegistry = {
	default: DefaultTheme,
	blank: BlankTheme,
	yggdrasil: YggdrasilTheme,
};

export function getTheme(themeName = 'default') {
	const theme = themeRegistry[themeName] || DefaultTheme;

	// Merge with default theme to ensure all components are available
	// Custom theme components override defaults
	const mergedTheme = {
		...DefaultTheme,
		...theme,
		// Deep merge components - custom components override defaults
		// IMPORTANT: theme.components must come AFTER DefaultTheme.components to override
		components: {
			...DefaultTheme.components,
			...(theme.components || {}),
		},
	};

	return mergedTheme;
}

export function getThemeComponent(themeName, componentName) {
	const theme = getTheme(themeName);
	return (
		theme.components?.[componentName] ||
		DefaultTheme.components[componentName]
	);
}
