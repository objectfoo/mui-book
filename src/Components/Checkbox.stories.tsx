import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, type CheckboxProps } from "./Checkbox";

const meta = {
	title: "Components/Inputs/Checkbox",
	component: Checkbox,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		color: {
			options: [
				"default",
				"primary",
				"secondary",
				"error",
				"info",
				"success",
				"warning",
			] satisfies CheckboxProps["color"][],
		},
		size: {
			options: ["small", "medium", "large"] satisfies CheckboxProps["size"][],
		}
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
