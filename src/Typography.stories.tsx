import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography, type TypographyProps } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Data Display/Typography",
	component: Typography,
	tags: ["autodocs", "data-display"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	argTypes: {
		label: { type: "string" },
		paragraph: { type: "boolean" },
		color: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"textPrimary",
				"textSecondary",
				"info",
				"error",
				"success",
				"warning",
			] satisfies TypographyProps["color"][],
		},
		variant: {
			control: "select",
			options: [
				"body1",
				"body2",
				"button",
				"caption",
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"h6",
				"overline",
				"subtitle1",
				"subtitle2",
			] satisfies TypographyProps["variant"][],
		},

	},
} satisfies Meta<TypographyProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Text: Story = {
	args: {
		label: "This is some text, rendered in a page.",
		variant: "body1",
		paragraph: false,
		color: "textPrimary",
	},
};
