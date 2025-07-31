import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, type RadioGroupProps } from "./RadioGroup";


const meta = {
	title: "Section Name Missing/RadioGroup",
	component: RadioGroup,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
	},
} satisfies Meta<RadioGroupProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "label",
	},
};
