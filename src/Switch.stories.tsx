import type { Meta, StoryObj } from "@storybook/react-vite";
import MuiSwitch, { type SwitchProps as MuiSwitchProps } from "./Switch";

const meta = {
	title: "Inputs/Switch",
	component: MuiSwitch,
	tags: ["autodocs", "input"],
	parameters: {},
	argTypes: {
		label: { type: "string" },
	},
} satisfies Meta<MuiSwitchProps>;

export default meta;

type Story = StoryObj<typeof meta>;

// Stories
export const Medium: Story = {
	args: {
		label: "Medium Switch",
		size: "medium",
		color: "primary",
	},
};

export const Small: Story = {
	args: {
		label: "Small Switch",
		size: "small",
		color: "primary",
	},
};

