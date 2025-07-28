import type { Meta, StoryObj } from "@storybook/react-vite";
import { TablePagination, type TablePaginationProps } from "./TablePagination";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Navigation/TablePagination",
	component: TablePagination,
	tags: ["autodocs", "navigation"],
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	argTypes: {
		count: {
			control: "number",
			name: "Count",
			type: "number",
		}
	},
} satisfies Meta<TablePaginationProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Stories
 */
export const TablePaginationComponent: Story = {
	args: {
		count: 20,
		page: 1,
		rowsPerPage: 10,
		onPageChange: () => { },
		onRowsPerPageChange: () => { }
	},
};
