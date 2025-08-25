import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';
import type { Decorator } from "@storybook/react-vite";
import { CreateTheme } from "./CustomTheme/AggregateTheme";

export const ContentThemeProvider: Decorator = (Story) => {
	return (
		<ThemeProvider theme={CreateTheme()}>
			<CssBaseline />
			<Story />
		</ThemeProvider>
	);
};
