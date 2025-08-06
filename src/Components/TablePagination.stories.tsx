import type { Meta, StoryObj } from "@storybook/react-vite";
import { TablePagination, type TablePaginationProps } from "./TablePagination";

const meta = {
	title: "Components/Navigation/TablePagination",
	component: TablePagination,
	tags: [],
	parameters: {},
	argTypes: {
		count: {
			control: "number",
			name: "Count",
			type: "number",
		},
		page: { control: false },
		rowsPerPage: { control: false },
		rowsPerPageOptions: { control: false },
	},
} satisfies Meta<TablePaginationProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		count: 200,
		page: 1,
		rowsPerPage: 20,
		rowsPerPageOptions: [20],
		onPageChange: () => { },
		onRowsPerPageChange: () => { }
	},
};

export const Fancy: Story = {
	args: {
		count: 200,
		page: 1,
		rowsPerPage: 20,
		rowsPerPageOptions: [10, 25, 50],
		onPageChange: () => { },
		onRowsPerPageChange: () => { }
	},
};
