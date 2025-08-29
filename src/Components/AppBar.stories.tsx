import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppBar, type AppBarProps } from "./AppBar";

const meta = {
	title: "Components/Surfaces/AppBar",
	component: AppBar,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		color: {
			type: "string",
			control: "select",
			options: ["inherit", "primary", "secondary", "default", "transparent", "info", "success", "warning", "error"]
		},
		position: { type: "string", control: "select", options: ["fixed", "absolute", "sticky", "static", "relative"] },
		enableColorOnDark: {
			type: "boolean",
			description: "If true, the color prop is applied in dark mode."
		},
		disableGutters: { type: "boolean" },
		variant: { type: "string", control: "inline-radio", options: ["regular", "dense"] },
		onClick: { action: "clicked" },
	},
} satisfies Meta<AppBarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "App Bar",
		color: "primary",
		position: "static",
		enableColorOnDark: true,
		disableGutters: false,
		variant: "regular",
	},
};
