import type { Preview, Decorator } from "@storybook/react-vite";
import { ContentThemeProvider } from "../src/ContentThemeProvider";
import "@fontsource/lato/latin.css";
import "@fontsource/lato/latin-italic.css";


const preview: Preview = {
	parameters: {
		backgrounds: {
			options: {
				dark: { name: 'Dark', value: "#121212" },
				light: { name: 'Light', value: "#ffffff" },
			}
		},
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	initialGlobals: {
		background: "light",
	},
};

export default preview;

export const decorators: Decorator[] = [
	ContentThemeProvider
];
