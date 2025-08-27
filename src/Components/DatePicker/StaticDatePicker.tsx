import { DateTime } from "luxon";
import { StaticDatePicker as MuiStaticDatePicker, type StaticDatePickerProps as MuiStaticDatePickerProps } from "@mui/x-date-pickers";
import { type ReactNode } from "react";

type StaticDatePickerProps = Pick<MuiStaticDatePickerProps, "disabled" | "readOnly">

export interface DatePickerProps extends StaticDatePickerProps { }

export function StaticDatePicker({ ...rest }: DatePickerProps): ReactNode {
	return <MuiStaticDatePicker {...rest} defaultValue={DateTime.local()} />;
}

