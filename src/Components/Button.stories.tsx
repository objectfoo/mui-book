import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, colors, loadingPositions, sizes, variants, type ButtonProps } from "./Button";
import PsychologyIcon from "@mui/icons-material/PsychologyRounded";
import EngineeringIcon from "@mui/icons-material/EngineeringRounded";

const meta = {
	title: "Components/Inputs/Button",
	component: Button,
	tags: [],
	parameters: {},
	argTypes: {
		endIcon: { control: false },
		size: { control: "radio", options: sizes },
		color: { control: "select", options: colors },
		variant: { control: "radio", options: variants },
		loadingPosition: { control: "radio", options: loadingPositions },
		label: { type: "string" },
		startIcon: { control: false },
		loading: { control: "boolean" },
		disabled: { control: "boolean", },
		fullWidth: { control: "boolean" },
		disableElevation: { control: "boolean" },
	},
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: { controls: { exclude: ["loadingIndicator", "startIcon", "endIcon"] } },
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

// TODO: Create an icon selector control and get rid of the start icon/end icon stories?
export const StartIcon: Story = {
	parameters: { controls: { exclude: ["loadingIndicator", "startIcon", "endIcon"] } },
	args: {
		...Default.args,
		label: "Start Icon",
		startIcon: <PsychologyIcon />
	}
};

export const EndIcon: Story = {
	parameters: { controls: { exclude: ["loadingIndicator", "startIcon", "endIcon"] } },
	args: {
		...Default.args,
		label: "End Icon",
		endIcon: <EngineeringIcon />
	}
};

