import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography, type TypographyProps, } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Components/Data Display/Typography",
	component: Typography,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		color: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"textPrimary",
				"textSecondary",
				"textDisabled",
				"error",
				"info",
				"success",
			] satisfies TypographyProps["color"][],
		},
	},
} satisfies Meta<TypographyProps>;

export default meta;

/**
 * Stories
 */
export const Default: StoryObj<typeof meta> = {
	args: {
		label: "This is some text.",
		paragraph: false,
		color: "textPrimary",
	},
};
