import type { Meta, StoryObj } from "@storybook/react-vite";
import { FocusAndContrast } from "./FocusAndContrast";

const meta = {
	title: "Focus and Contrast",
	component: FocusAndContrast,
	tags: [],
	parameters: {},
	argTypes: {},
} satisfies Meta<typeof FocusAndContrast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FocusAndContrastTest: Story = {
	args: { },
};
