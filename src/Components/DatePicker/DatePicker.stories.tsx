import { DatePicker, type DatePickerProps } from "./DatePicker";
import { MobileDatePicker } from "./MobileDatePicker";
import { StaticDatePicker } from "./StaticDatePicker";
import { WithDatePickerLocalizationProvider } from "./WithLocalizationProvider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Typography from "@mui/material/Typography";


const meta = {
	title: "mui-x/Date Pickers/DatePicker",
	component: DatePicker,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		disabled: { control: { type: "radio" }, options: [true, false] },
		readOnly: { control: { type: "radio" }, options: [true, false] },
	},
	decorators: [
		WithDatePickerLocalizationProvider,
	],
	subcomponents: { MobileDatePicker, StaticDatePicker }
} satisfies Meta<DatePickerProps>;


export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Date picker",
		disabled: false,
		readOnly: false,
	},
	render: (args) => {
		return (
			<Stack direction="column" spacing={5} alignItems="flex-start">
				<Stack direction="column" spacing={1.5}>
					<Typography variant="h5" component="h2">Default</Typography>
					<DatePicker {...args} />
				</Stack>
				<Stack direction="column" spacing={1.5}>
					<Typography variant="h5" component="h2">Mobile</Typography>
					<MobileDatePicker {...args} />
				</Stack>
				<Stack direction="column" spacing={1.5}>
					<Typography variant="h5" component="h2">Static</Typography>
					<Paper variant="outlined">
						<StaticDatePicker {...args} />
					</Paper>
				</Stack>
			</Stack>
		);
	}
};
