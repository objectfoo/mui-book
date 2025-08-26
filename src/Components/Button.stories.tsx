import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, type ButtonProps } from "./Button";
import PsychologyIcon from "@mui/icons-material/PsychologyRounded";
import EngineeringIcon from "@mui/icons-material/EngineeringRounded";

const meta = {
	title: "Components/Inputs/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {},
	argTypes: {
		endIcon: { control: false },
		size: {
			control: "radio",
			options: ["small", "medium", "large"] satisfies ButtonProps["size"][],
		},
		color: {
			control: "select",
			options: ["error", "info", "inherit", "primary", "secondary", "success", "warning"] satisfies ButtonProps["color"][],
		},
		variant: {
			control: "radio",
			options: ["contained", "outlined", "text"] satisfies ButtonProps["variant"][],
		},
		loadingPosition: { control: "radio", options: ["start", "center", "end"] satisfies ButtonProps["loadingPosition"][] },
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

