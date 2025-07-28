import type { Meta, StoryObj } from "@storybook/react-vite";
import MuiSwitch, { type SwitchControlProps } from "./Switch";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Inputs/Switch",
	component: MuiSwitch,
	tags: ["autodocs", "input"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			controls: {
				exclude: ["sx"]
			}
		}
	},
	argTypes: {
		// https://storybook.js.org/docs/api/doc-blocks/doc-block-argtypes
		label: { type: "string" },
	},
} satisfies Meta<SwitchControlProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Switch: Story = {
	args: {
		label: "Switch",
		size: "medium",
		color: "primary",
	},
};
