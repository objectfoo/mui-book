import MuiTablePagination, { type TablePaginationProps as MuiTablePaginationProps } from "@mui/material/TablePagination";
import { useEffect, useRef, useState } from "react";

type TablePaginationBaseProps = Pick<
	MuiTablePaginationProps,
	"count" | "page" | "onPageChange" | "rowsPerPage" | "onRowsPerPageChange"
>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TablePaginationProps extends TablePaginationBaseProps { }

const RowsPerPageOptions = [10, 25, 50];

export function TablePagination(props: TablePaginationProps): React.ReactNode {
	const lastCount = useRef(props.count);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	useEffect(() => {
		if (lastCount.current !== props.count) {
			setPage(0);
		}
	}, [props.count]);

	return <MuiTablePagination
		page={page}
		count={props.count}
		onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
		onPageChange={() => setPage(page + 1)}
		rowsPerPage={rowsPerPage}
		rowsPerPageOptions={RowsPerPageOptions}
	/>;
}

