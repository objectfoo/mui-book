import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, type AccordionProps } from "./Accordion";

const meta = {
	title: "Surfaces/Accordion",
	component: Accordion,
	tags: ["autodocs", "surfaces"],
	parameters: { layout: "centered" },
	argTypes: {
		disableGutters: {
			control: "boolean",
			type: "boolean",
			name: "disable gutters"
		}
	}
} satisfies Meta<AccordionProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Default: Story = {
	args: {
		disableGutters: false,
	},
};
