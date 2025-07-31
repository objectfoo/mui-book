import CssBaseline from "@mui/material/CssBaseline";
import { type Theme, ThemeProvider, createTheme, type ThemeOptions } from '@mui/material/styles';
import type { Decorator } from "@storybook/react-vite";
import { A11yFocusOverrides, BaseTheme } from "./CustomTheme";

export const ContentThemeProvider: Decorator = (Story) => {
	return (
		<ThemeProvider theme={CreateWhsTheme()}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	);
};

function CreateWhsTheme(): Theme {
	const options: ThemeOptions = BaseTheme({
		palette: {
			primary: {
				main: "#3557FF",
			},
		},
	});

	return createTheme(options, A11yFocusOverrides());
}
