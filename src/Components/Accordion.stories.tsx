import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, type AccordionProps } from "./Accordion";

const meta = {
	title: "Components/Surfaces/Accordion",
	component: Accordion,
	tags: [],
	parameters: {},
	argTypes: {
		disableGutters: { control: "boolean", },
		defaultExpanded: { control: false },
		disabled: { control: "boolean"},
		square: { control: "boolean"},
	}
} satisfies Meta<AccordionProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		disableGutters: false,
		defaultExpanded: false,
		disabled: false,
		square: false,
	},
};
