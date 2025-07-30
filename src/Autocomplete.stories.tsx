import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete, type AutocompleteProps } from "./Autocomplete";

const meta = {
	title: "Section Name Missing/autocomplete",
	component: Autocomplete,
	tags: ["autodocs", "section-tag-missing"],
	parameters: {},
	argTypes: {
		label: { type: "string" },
	},
} satisfies Meta<AutocompleteProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "label",
	},
};
