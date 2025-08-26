import MuiSwitch, { type SwitchProps as MuiSwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

type MuiSwitchBaseProps = Pick<
	MuiSwitchProps,
	"color" | "defaultChecked" | "disabled" | "edge" | "size"
>;


export interface SwitchProps extends MuiSwitchBaseProps {
	label: string;
}

export default function Switch({ label, ...rest }: SwitchProps): React.ReactNode {
	return (
		<FormControlLabel control={<MuiSwitch {...rest} />} label={label} />
	);
}
