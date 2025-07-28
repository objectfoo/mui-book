import type { ThemeOptions, Theme, SvgIconTypeMap, CSSInterpolation } from "@mui/material";

/**
 * Whs Palette and Typography customizations
 */
export { default as BaseTheme } from "./BaseTheme";

/**
 * Highlight is for firefox and -webkit-focus-ring-color is for chrome and edge
 * I had to put the styles in two selectors because focus ring color is not supported by
 * styled components automatic vendor prefixing and I couldn't make an object with
 * outline in it twice. Apply more precedence to the webkit styles so we can get
 * chrome and edge, then if -webkit-focus-ring-color is unknown to the browser it
 * will fallback to Highlight for firefox.
 */
const CheckboxAndRadioFocusStyles: CSSInterpolation = {
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

/**
 * Component Accessibility override
 */
export const A11yFocusOverrides = (_theme: Theme): ThemeOptions => {
	return {
		components: {
			MuiButtonBase: {
				defaultProps: {
					disableRipple: true,
				},
				styleOverrides: {
					root: {
						outline: "revert",
					},
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
					root: {
						...CheckboxAndRadioFocusStyles,
					},
				},
			},
			MuiRadio: {
				styleOverrides: {
					root: {
						...CheckboxAndRadioFocusStyles,
					},
				},
			},
			MuiChip: {
				styleOverrides: {
					clickable: {
						"&.Mui-focusVisible": {
							outlineOffset: 2,
							outline: "5px auto Highlight",
						},
						"&.Mui-focusVisible.Mui-focusVisible": {
							outlineOffset: 2,
							outline: "5px auto -webkit-focus-ring-color",
						},
					},
				},
			},
		},
	};
};

/**
 * Optional classes for @webmdhs-svg-icons
 * @description optional class names to mimic \@mui SvgIcon
 * 
 * sizes: sm md lg + "inherit"
 * 
 * colors: primary secondary action disabled info success warning error + "inherit"
 * 
 * @example
 * <AdvocateIcon className="whs-icon" /> // inherit font size and color
 * <AdvocateIcon className="whs-icon-sm-info" />
 * <AdvocateIcon className="whs-icon-primary-lg" />
 * @param {Theme} theme - mui theme
 * @returns {ThemeOptions}
 */
export const WhsIconStyles = (theme: Theme): ThemeOptions => {
	return {
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					"[class^='whs-icon']": {
						fontSize: "inherit",
						color: "inherit",
						width: "1em",
						height: "1em",
						display: "inline-block",
						"&[class*='-sm']": { fontSize: "1.25em" },
						"&[class*='-md']": { fontSize: "1.5em" },
						"&[class*='-lg']": { fontSize: "2.1875em" },
						"&[class*='-primary']": { color: theme.palette.primary.main },
						"&[class*='-secondary']": { color: theme.palette.secondary.main },
						"&[class*='-action']": { color: theme.palette.action.active },
						"&[class*='-disabled']": { color: theme.palette.action.disabled },
						"&[class*='-info']": { color: theme.palette.info.main },
						"&[class*='-success']": { color: theme.palette.success.main },
						"&[class*='-warning']": { color: theme.palette.warning.main },
						"&[class*='-error']": { color: theme.palette.error.main },
					},
				},
			},
			MuiScopedCssBaseline: {
				styleOverrides: {
					root: {
						"& [class^='whs-icon']": {
							fontSize: "inherit",
							color: "inherit",
							width: "1em",
							height: "1em",
							display: "inline-block",
							"&[class*='-sm']": { fontSize: "1.25em" },
							"&[class*='-md']": { fontSize: "1.5em" },
							"&[class*='-lg']": { fontSize: "2.1875em" },
							"&[class*='-primary']": { color: theme.palette.primary.main },
							"&[class*='-secondary']": { color: theme.palette.secondary.main },
							"&[class*='-action']": { color: theme.palette.action.active },
							"&[class*='-disabled']": { color: theme.palette.action.disabled },
							"&[class*='-info']": { color: theme.palette.info.main },
							"&[class*='-success']": { color: theme.palette.success.main },
							"&[class*='-warning']": { color: theme.palette.warning.main },
							"&[class*='-error']": { color: theme.palette.error.main },
						},
					}
				}
			},
		},
	};
};


export type SvgFontSize = SvgIconTypeMap["props"]["fontSize"]
export type SvgColor = SvgIconTypeMap["props"]["color"];

/**
 * Create class name string for WhsIconsStyles theme options.
 * @example AssembleWhsIconClass("whs-icon", "medium", "action") // "whs-icon-md-primary"
 * @param {string} base - should be "whs-icon" to work with WhsIconStyles
 * @param {SvgFontSize} size - mui SvgFontSize
 * @param {SvgColor} color - foreground color - mui SvgFontSize
 * @returns {string}
 */
export default function AssembleWhsIconClass(base: string, size?: SvgFontSize, color?: SvgColor): string {
	let selector = `${base}`;

	if (size !== "inherit" && size !== undefined) {
		// convert mui size variant to className shorthand
		const sizeKey = size === "small" ? "sm" : size === "medium" ? "md" : "lg";
		selector = `${selector}-${sizeKey}`;
	}
	if (color !== "inherit") {
		selector = `${selector}-${color}`;
	}
	return selector;
}
