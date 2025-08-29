import { createTheme, type Direction, type PaletteOptions, type ThemeOptions, type TypographyVariantsOptions } from "@mui/material";

type CreateThemeOptions = {
	mode?: PaletteOptions["mode"];
	direction?: Direction;
	tonalOffset?: PaletteOptions["tonalOffset"];
	contrastThreshold?: PaletteOptions["contrastThreshold"];
	htmlFontSize?: TypographyVariantsOptions["htmlFontSize"];
};

export function CreateTheme(options: CreateThemeOptions = {}): ReturnType<typeof createTheme> {
	return createTheme({
		palette: CreatePalette(options),
		typography: CreateTypography(options),
		components: CreateComponents(options),
	});
};

function CreatePalette(options: CreateThemeOptions = {}): ThemeOptions["palette"] {
	const lightMode = options.mode === "light";
	return {
		mode: lightMode ? "light" : "dark",
		contrastThreshold: options.contrastThreshold ?? 3,
		tonalOffset: options.tonalOffset ?? 0.2,

		primary: { main: "#0078bf", },
		secondary: { main: "#545456", contrastText: "#FFF", },

		success: { light: "#84bd00", main: "#1a6500", dark: "#103e00" },
		warning: { light: "#ffd683", main: "#ffbf3f", dark: "#c77700" },
		error: { light: "#bf334c", main: "#b00020", dark: "#8C0019" },

		...(lightMode && { text: { primary: "#000000", secondary: "#494949", disabled: "#757575" } }),
		...(lightMode && { action: { disabled: "rgba(0, 0, 0, 0.56)", disabledBackground: "rgba(0, 0, 0, 0.1)", hoverOpacity: 0.033 } }),
	};
}

function CreateComponents(_options: CreateThemeOptions = {}): ThemeOptions["components"] {
	const CheckboxAndRadioFocusStyles = {
		"&.Mui-focusVisible": {
			outline: "5px auto Highlight",
			outlineOffset: -3,
		},
		"&.Mui-focusVisible.Mui-focusVisible": {
			overflow: "hidden", // fix funky outline positioning for safari radio buttons
			outline: "5px auto -webkit-focus-ring-color",
			outlineOffset: -3,
		},
	};
	return {
		MuiButtonBase: {
			defaultProps: { disableRipple: true },
			styleOverrides: { root: { outline: "revert" } },
		},
		MuiButton: { styleOverrides: { root: { outlineOffset: 2 } } },
		MuiFab: { styleOverrides: { root: { outlineOffset: 3 } } },
		MuiCheckbox: { styleOverrides: { root: { ...CheckboxAndRadioFocusStyles } } },
		MuiRadio: { styleOverrides: { root: { ...CheckboxAndRadioFocusStyles } } },
	}
}


const fontFamily = ["Lato", "Helvetica", "Arial", "sans-serif"].join(", ");

function CreateTypography(options: CreateThemeOptions = {}): ThemeOptions["typography"] {
	return {
		htmlFontSize: options.htmlFontSize ?? 16,
		fontFamily,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 700,
		fontWeightBold: 900,
		h1: { fontFamily, fontSize: 48, letterSpacing: 0.24992, fontWeight: 300 },
		h2: { fontFamily, fontSize: 36, letterSpacing: -0.13, fontWeight: 300 },
		h3: { fontFamily, fontSize: 28, fontWeight: 400 },
		h4: { fontFamily, fontSize: 22, letterSpacing: 0.25, fontWeight: 400 },
		h5: { fontFamily, fontSize: 20, letterSpacing: 0.25, fontWeight: 400 },
		h6: { fontFamily, fontSize: 18, letterSpacing: 0.25, fontWeight: 400 },
		body1: { fontFamily, fontSize: 16, letterSpacing: 0.15, fontWeight: 400 },
		body2: { fontFamily, fontSize: 14, letterSpacing: 0.1 },
		button: { fontFamily, fontSize: 14, letterSpacing: 0.45, fontWeight: 600 },
		caption: { fontFamily, fontSize: 12, letterSpacing: 0.53 },
		overline: { fontFamily, fontSize: 12, letterSpacing: 1.33 },
		subtitle1: { fontFamily, fontSize: 16, letterSpacing: 0.15, fontWeight: 400 },
		subtitle2: { fontFamily, fontSize: 14, letterSpacing: 0.1, fontWeight: 400 },
	};
}
