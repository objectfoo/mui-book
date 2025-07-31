import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox, { type CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

export const colors: MuiCheckboxProps["color"][] = [
	"default",
	"primary",
	"secondary",
	"error",
	"info",
	"success",
	"warning",
];

export const sizes: MuiCheckboxProps["size"][] = ["medium", "large", "small"];

type PropPickList = "color" | "defaultChecked" | "indeterminate" | "disabled" | "required" | "size";

type CheckboxBaseProps = Pick<MuiCheckboxProps, PropPickList>;

export interface CheckboxProps extends CheckboxBaseProps {
	label: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps): React.ReactNode {
	const control = <MuiCheckbox {...rest} />;
	return <FormControlLabel control={control} label={label} />;
}
