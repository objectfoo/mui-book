import MuiSwitch, { type SwitchProps as MuiSwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export const colors: MuiSwitchProps["color"][] = [
	"primary",
	"secondary",
	"default",
	"info",
	"success",
	"error",
	"warning",
];

export const edges: MuiSwitchProps["edge"][] = ["start", "end"];
export const sizes: MuiSwitchProps["size"][] = ["medium", "small"];

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
