import type { Meta, StoryObj } from "@storybook/react-vite";
import MuiSwitch, { type SwitchProps as MuiSwitchProps } from "./Switch";

const meta = {
	title: "Components/Inputs/Switch",
	component: MuiSwitch,
	tags: [],
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
		label: "Medium",
		size: "medium",
		color: "primary",
		defaultChecked: true,
		disabled: false,
		edge: "start",
	},
};

export const Small: Story = {
	args: {
		...Medium.args,
		label: "Small",
		size: "small",
	},
};

