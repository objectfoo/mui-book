import type { ThemeOptions, SimplePaletteColorOptions } from "@mui/material";
import { getContrastRatio } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

const ContrastThreshold = 4.5 as const;

const BaseTheme = (options: ThemeOptions): ThemeOptions => {
	let primary;

	if (options.palette?.primary !== undefined) {
		primary = options.palette.primary as SimplePaletteColorOptions;
		if (primary.contrastText === undefined) {
			primary.contrastText = getContrastRatio(primary.main, "#FFF") >= ContrastThreshold ? "#FFF" : "#000";
		}
	}
	return deepmerge(DefaultTheme, options);
};

export default BaseTheme;

const DefaultTheme: ThemeOptions = {
	palette: {
		mode: "light",
		contrastThreshold: ContrastThreshold,
		primary: {
			main: "#0078bf",
		},
		secondary: {
			main: "#545456",
			contrastText: "#FFF",
		},
		text: {
			primary: "#000000",
			secondary: "#494949",
			disabled: "#757575",
		},
		warning: {
			light: "#ffd683",
			main: "#ffbf3f",
			dark: "#c77700",
			contrastText: "#000",
		},
		error: {
			light: "#bf334c",
			main: "#b00020",
			dark: "#8C0019",
			contrastText: "#FFF",
		},
		success: {
			light: "#84bd00",
			main: "#1a6500",
			dark: "#103e00",
			contrastText: "#FFF"
		},
		action: {
			disabled: "rgba(0, 0, 0, 0.56)",
			disabledBackground: "rgba(0, 0, 0, 0.1)",
			hoverOpacity: 0.033,
		},
	},
	typography: {
		fontFamily: ["Lato", "Helvetica", "Arial", "sans-serif"].join(", "),
		fontWeightMedium: 600,
		h1: {
			fontSize: "48px",
			letterSpacing: "0.24992px",
			fontWeight: 300,
		},
		h2: {
			fontSize: "36px",
			letterSpacing: "-0.13px",
			fontWeight: 300,
		},
		h3: {
			fontSize: "28px",
			fontWeight: 400,
		},
		h4: {
			fontSize: "22px",
			letterSpacing: "0.25px",
			fontWeight: 400,
		},
		h5: {
			fontSize: "20px",
			letterSpacing: "0.25px",
			fontWeight: 400,
		},
		h6: {
			fontSize: "18px",
			letterSpacing: "0.25px",
			fontWeight: 400,
		},
		subtitle1: {
			fontSize: "16px",
			letterSpacing: "0.15px",
			fontWeight: 400,
		},
		subtitle2: {
			fontSize: "14px",
			letterSpacing: "0.1px",
			fontWeight: 400,
		},
		body1: {
			fontSize: "16px",
			letterSpacing: "0.15px",
			fontWeight: 400,
		},
		body2: {
			fontSize: "14px",
			letterSpacing: "0.1px",
		},
		button: {
			fontSize: "14px",
			letterSpacing: "0.45px",
			fontWeight: 600,
		},
		caption: {
			fontSize: "12px",
			letterSpacing: "0.53px",
		},
		overline: {
			fontSize: "12px",
			letterSpacing: "1.33px",
		},
	},
};
