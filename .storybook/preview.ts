import type { Preview, Decorator } from "@storybook/react-vite";
import { WithThemeProvider } from "../src/WhsThemeProvider";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				date: /Date$/i,
			},
		},
		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
};

export default preview;

export const decorators: Decorator[] = [
	WithThemeProvider
];
