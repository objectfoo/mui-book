import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, type AvatarProps } from "./Avatar";

const meta = {
	title: "Components/Data Display/Avatar",
	component: Avatar,
	tags: [],
	parameters: { },
	argTypes: {
		label: { type: "string" },
		variant: { type: "string", control: "inline-radio", options: ["circular", "rounded", "square"] },
	},
} satisfies Meta<AvatarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "AA",
		variant: "circular",
		sx: { bgcolor: "primary.main" },
	},
};
