import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker, type DatePickerProps } from "./DatePicker";
import { WithDatePickerLocalizationProvider } from "./WithLocalizationProvider";

const meta = {
	title: "mui-x/Date Pickers/DatePicker",
	component: DatePicker,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
	},
	decorators: [
		WithDatePickerLocalizationProvider,
	],
} satisfies Meta<DatePickerProps>;


export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "label",
	},
};
