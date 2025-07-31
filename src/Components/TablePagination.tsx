import MuiTablePagination, { type TablePaginationProps as MuiTablePaginationProps } from "@mui/material/TablePagination";
import { useEffect, useRef, useState } from "react";

type PropPickList = "count" | "page" | "onPageChange" | "rowsPerPage" | "onRowsPerPageChange" | "rowsPerPageOptions";
type TablePaginationBaseProps = Pick<MuiTablePaginationProps, PropPickList>;

export interface TablePaginationProps extends TablePaginationBaseProps { }

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
		onPageChange={(_, newPage) => setPage(newPage)}
		rowsPerPage={rowsPerPage}
		rowsPerPageOptions={props.rowsPerPageOptions}
	/>;
}

