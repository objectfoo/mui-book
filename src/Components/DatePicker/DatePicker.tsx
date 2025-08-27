import { DatePicker as MuiDatePicker, type DatePickerProps as MuiDatePickerProps } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { type ReactNode } from "react";

type DatePickerBaseProps = Pick<MuiDatePickerProps, "label" | "disabled" | "readOnly">;

export interface DatePickerProps extends DatePickerBaseProps {
	label: string;
}

export function DatePicker({ ...rest }: DatePickerProps): ReactNode {
	return <MuiDatePicker {...rest} defaultValue={DateTime.local()} />;
}
