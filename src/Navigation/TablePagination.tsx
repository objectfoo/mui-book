import MuiTablePagination, { type TablePaginationProps as MuiTablePaginationProps } from "@mui/material/TablePagination";

type TablePaginationBaseProps = Pick<
	MuiTablePaginationProps,
	"count" | "page" | "onPageChange" | "rowsPerPage" | "onRowsPerPageChange"
>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TablePaginationProps extends TablePaginationBaseProps { }

export function TablePagination(props: TablePaginationProps): React.ReactNode {
	return <MuiTablePagination {...props} />;
}

