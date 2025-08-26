import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox, { type CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

type PropPickList = "color" | "defaultChecked" | "indeterminate" | "disabled" | "required" | "size";

type CheckboxBaseProps = Pick<MuiCheckboxProps, PropPickList>;

export interface CheckboxProps extends CheckboxBaseProps {
	label: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps): React.ReactNode {
	const control = <MuiCheckbox {...rest} />;
	return <FormControlLabel control={control} label={label} />;
}
