import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, type RadioGroupProps } from "./RadioGroup";


const meta = {
	title: "Inputs/RadioGroup",
	component: RadioGroup,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		row: { control: "boolean" },
	},
} satisfies Meta<RadioGroupProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Pet",
		row: false,
	},
};

// TODO: Add Radio sub-component story

