import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip, type ChipProps } from "./Chip";

const meta = {
	title: "Section Name Missing/Chip",
	component: Chip,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		color: {
			control: "radio",
			options: [
				"default",
				"primary",
				"secondary",
				"info",
				"error",
				"warning",
				"success",
			] as ChipProps["color"][]
		},
		variant: {
			control: "radio",
			options: ["filled", "outlined"] as ChipProps["variant"][]
		}
	},
} satisfies Meta<ChipProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		label: "label",
		color: "primary",
		size: "medium",
		variant: "filled",
	},
};
