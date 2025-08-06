import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, type CheckboxProps, colors, sizes } from "./Checkbox";

const meta = {
	title: "Components/Inputs/Checkbox",
	component: Checkbox,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		color: { options: colors },
		size: { options: sizes }
	},
} satisfies Meta<CheckboxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Checkbox",
		color: "primary",
		defaultChecked: true,
		disabled: false,
		indeterminate: false,
		required: false,
		size: "medium",
	},
};
