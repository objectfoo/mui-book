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
	const control = (
		<MuiSwitch
			{...rest}
		/>
	);

	return (
		<FormControlLabel control={control} label={label} />
	);
}
