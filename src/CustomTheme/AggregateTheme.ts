import { createTheme, type Direction, type PaletteOptions, type TypographyVariantsOptions } from "@mui/material";

type MuiCreateThemeOptions = Parameters<typeof createTheme>[0];
type CreateThemeOptions = {
	mode?: PaletteOptions["mode"];
	direction?: Direction;
	tonalOffset?: PaletteOptions["tonalOffset"];
	contrastThreshold?: PaletteOptions["contrastThreshold"];
	htmlFontSize?: TypographyVariantsOptions["htmlFontSize"];
};


const fontFamily = ["Lato", "Helvetica", "Arial", "sans-serif"].join(", ");
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


export function CreateTheme(options: CreateThemeOptions = {}): ReturnType<typeof createTheme> {
	const lightMode = options.mode === "light";
	const themeOptions: MuiCreateThemeOptions = {
		cssVariables: true,
		direction: options.direction,

		// MARK: palette
		palette: {
			mode: lightMode ? "light" : "dark",
			contrastThreshold: options.contrastThreshold ?? 3,
			tonalOffset: options.tonalOffset ?? 0.2,
			primary: { main: "#0078BF" },
			secondary: { main: "#545456" },
			info: { main: "#0228D1" },
			success: { main: "#1A6500" },
			error: { main: "#B00020" },
			warning: { main: "#FFBF3F" },
			// if light mode use our presets else fallback to mui defaults
			...(lightMode && {
				text: {
					primary: "#000000DE",
					secondary: "#00000099",
					disabled: "#00000061",
				},
				action: {
					disabled: "rgba(0, 0, 0, 0.56)",
					disabledBackground: "rgba(0, 0, 0, 0.1)",
					hoverOpacity: 0.033,
				},
			}),
		},
		// MARK: typography
		typography: {
			htmlFontSize: options.htmlFontSize ?? 16,
			fontFamily,
			fontSize: 14,
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 600,
			fontWeightBold: 700,
			h1: {
				fontFamily,
				fontSize: 48,
				letterSpacing: 0.24992,
				fontWeight: 300,
			},
			h2: {
				fontFamily,
				fontSize: 36,
				letterSpacing: -0.13,
				fontWeight: 300,
			},
			h3: {
				fontFamily,
				fontSize: 28,
				fontWeight: 400,
			},
			h4: {
				fontFamily,
				fontSize: 22,
				letterSpacing: 0.25,
				fontWeight: 400,
			},
			h5: {
				fontFamily,
				fontSize: 20,
				letterSpacing: 0.25,
				fontWeight: 400,
			},
			h6: {
				fontFamily,
				fontSize: 18,
				letterSpacing: 0.25,
				fontWeight: 400,
			},
			subtitle1: {
				fontFamily,
				fontSize: 16,
				letterSpacing: 0.15,
				fontWeight: 400,
			},
			subtitle2: {
				fontFamily,
				fontSize: 14,
				letterSpacing: 0.1,
				fontWeight: 400,
			},
			body1: {
				fontFamily,
				fontSize: 16,
				letterSpacing: 0.15,
				fontWeight: 400,
			},
			body2: {
				fontFamily,
				fontSize: 14,
				letterSpacing: 0.1,
			},
			button: {
				fontFamily,
				fontSize: 14,
				letterSpacing: 0.45,
				fontWeight: 600,
			},
			caption: {
				fontFamily,
				fontSize: 12,
				letterSpacing: 0.53,
			},
			overline: {
				fontFamily,
				fontSize: 12,
				letterSpacing: 1.33,
			},
		},
		// MARK: A11Y
		components: {
			// experimental
			// MuiCssBaseline: {
			// 	styleOverrides: {
			// 		".Mui-focusVisible": {
			// 			outline: "2px solid #FFBF3F",
			// 			outlineOffset: "1px",
			// 		},
			// 	},
			// },
			MuiButtonBase: {
				defaultProps: { disableRipple: true },
				styleOverrides: {
					root: { outline: "revert" },
				},
			},
			MuiButton: {
				styleOverrides: {
					root: { outlineOffset: 2 },
				}
			},
			MuiFab: {
				styleOverrides: {
					root: { outlineOffset: 3 },
				}
			},
			MuiCheckbox: {
				styleOverrides: {
					root: { ...CheckboxAndRadioFocusStyles },
				},
			},
			MuiRadio: {
				styleOverrides: {
					root: { ...CheckboxAndRadioFocusStyles },
				},
			},
		}
	};

	return createTheme(themeOptions);
};
