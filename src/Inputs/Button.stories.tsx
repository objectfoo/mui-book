import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, type ButtonProps } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Inputs/Button",
	component: Button,
	tags: ["autodocs", "input"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	argTypes: {
		label: { type: "string" },
		size: {
			control: "select",
			options: ["small", "medium", "large"] satisfies ButtonProps["size"][],
		},
		variant: {
			control: "select",
			options: ["contained", "outlined", "text"] satisfies ButtonProps["variant"][],
		},
		color: {
			control: "select",
			options: [
				"error",
				"info",
				"inherit",
				"primary",
				"secondary",
				"success",
				"warning",
			] satisfies ButtonProps["color"][],
		}
	},
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Text: Story = {
	args: {
		variant: "text",
		label: "Text",
	},
};

export const Contained: Story = {
	args: {
		variant: "contained",
		label: "Contained",
	}
};

export const Outlined: Story = {
	args: {
		variant: "outlined",
		label: "Outlined",
	}
};
