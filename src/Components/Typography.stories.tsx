import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography, colors, type TypographyProps, } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Data Display/Typography",
	component: Typography,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		color: { control: "select", options: colors },
		variant: { control: false },

	},
} satisfies Meta<TypographyProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Default: Story = {
	args: {
		label: "This is some text.",
		paragraph: false,
		color: "textPrimary",
	},
};
