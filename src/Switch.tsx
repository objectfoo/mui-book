import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export interface SwitchControlProps {
	label: string;
	size?: "small" | "medium",
	color?: "info" | "primary" | "secondary" | "error" | "success";
}

export default function SwitchControl({ label, ...rest }: SwitchControlProps): React.ReactNode {
	return (
		<FormControlLabel
			control={<Switch {...rest} />} label={label}
		/>
	);
}
