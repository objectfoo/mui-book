import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';
import type { Decorator } from "@storybook/react-vite";
import { CreateTheme } from "./CustomTheme/AggregateTheme";

export const ContentThemeProvider: Decorator = (Story, ctx) => {
	const mode = ctx.globals?.backgrounds?.value === "dark" ? "dark" : "light";
	return (
		<ThemeProvider theme={CreateTheme({ mode, contrastThreshold: 4.5 })}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	);
};
