import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete, type AutocompleteProps } from "./Autocomplete";

const meta = {
	title: "Components/Inputs/Autocomplete",
	component: Autocomplete,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
	},
} satisfies Meta<AutocompleteProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Autocomplete",
		autoComplete: true,
		autoHighlight: true,
		autoSelect: true,
		disablePortal: false,
	},
};
