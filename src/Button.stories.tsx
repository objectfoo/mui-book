import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, type ButtonProps } from "./Button";
import PsychologyIcon from "@mui/icons-material/PsychologyRounded";
import EngineeringIcon from "@mui/icons-material/EngineeringRounded";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Inputs/Button",
	component: Button,
	tags: ["autodocs", "input"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	argTypes: {
		label: { type: "string" },
		size: {
			control: "radio",
			options: ["small", "medium", "large"] satisfies ButtonProps["size"][],
		},
		color: {
			control: "select",
			options: [
				"error",
				"info",
				"inherit",
				"primary",
				"secondary",
				"success",
				"warning",
			] satisfies ButtonProps["color"][],
		},
		disabled: { control: "boolean", },
		disableElevation: { control: "boolean" },
		endIcon: {},
		fullWidth: { control: "boolean" },
		loading: { control: "boolean" },
		startIcon: { control: false },
		loadingIndicator: {},
		loadingPosition: {
			control: "radio",
			options: ["start", "center", "end"] satisfies ButtonProps["loadingPosition"][],
		},
		variant: {
			control: "radio",
			options: ["contained", "outlined", "text"] satisfies ButtonProps["variant"][],
		},
	},
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Default: Story = {
	parameters: {
		controls: { exclude: ["loadingIndicator", "startIcon", "endIcon"] }
	},
	args: {
		variant: "outlined",
		label: "Text",
		size: "medium",
		color: "primary",
		disabled: false,
		disableElevation: false,
		fullWidth: false,
		loading: false,
		loadingPosition: "start",
	},
};

export const StartIcon: Story = {
	args: {
		variant: "outlined",
		label: "Start Icon",
		startIcon: <PsychologyIcon />
	}
};

export const EndIcon: Story = {
	args: {
		variant: "outlined",
		label: "End Icon",
		endIcon: <EngineeringIcon />
	}
};

