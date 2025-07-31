import type { Preview, Decorator } from '@storybook/react-vite';
import { ContentThemeProvider } from "../src/ContentThemeProvider";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;

export const decorators: Decorator[] = [
	ContentThemeProvider
];
