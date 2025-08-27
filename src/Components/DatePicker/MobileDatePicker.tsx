import { MobileDatePicker as MuiMobileDatePicker, type MobileDatePickerProps as MuiMobileDatePickerProps } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { type ReactNode } from "react";

type MobileDatePickerBaseProps = Pick<MuiMobileDatePickerProps, "label" | "disabled" | "readOnly">;

export interface MobileDatePickerProps extends MobileDatePickerBaseProps { }

export function MobileDatePicker({ ...rest }: MobileDatePickerProps): ReactNode {
	return <MuiMobileDatePicker {...rest} defaultValue={DateTime.local()} />;
}
