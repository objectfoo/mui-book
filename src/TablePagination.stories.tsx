import type { Meta, StoryObj } from "@storybook/react-vite";
import { TablePagination, type TablePaginationProps } from "./TablePagination";

const meta = {
	title: "Navigation/TablePagination",
	component: TablePagination,
	tags: ["autodocs", "navigation"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		count: {
			control: "number",
			name: "Count",
			type: "number",
		},
		page: { control: false },
		rowsPerPage: { control: false },
	},
} satisfies Meta<TablePaginationProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const Default: Story = {
	args: {
		count: 200,
		page: 1,
		rowsPerPage: 20,
		onPageChange: () => { },
		onRowsPerPageChange: () => { }
	},
};

export const Fancy: Story = {
	args: {
		count: 200,
		page: 1,
		rowsPerPage: 20,
		onPageChange: () => { },
		onRowsPerPageChange: () => { }
	},
};
