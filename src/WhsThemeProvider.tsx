import CssBaseline from "@mui/material/CssBaseline";
import { type Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import type { Decorator } from "@storybook/react-vite";
import { A11yFocusOverrides, BaseTheme } from "./CustomTheme";

export const WithThemeProvider: Decorator = (Story) => {
	return (
		<ThemeProvider theme={CreateWhsTheme()}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	);
};

function CreateWhsTheme(): Theme {
	const colors = createTheme(BaseTheme({
		palette: {
			primary: {
				main: "#0078BF",
			},
		},
	}));
	return createTheme(colors, A11yFocusOverrides(colors));
}
