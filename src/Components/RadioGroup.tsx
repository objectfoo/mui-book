import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MuiRadioGroup, { type RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup";

// TODO: gather props for both radio and the group

type RadioGroupBaseProps = Pick<MuiRadioGroupProps, "color">;

export interface RadioGroupProps extends RadioGroupBaseProps {
	label: string;
}

export function RadioGroup({ label }: RadioGroupProps): React.ReactNode {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<MuiRadioGroup>
				<FormControlLabel value="cat" control={<Radio />} label="Cat" />
				<FormControlLabel value="dog" control={<Radio />} label="Dog" />
				<FormControlLabel value="rat" control={<Radio />} label="Rat" />
			</MuiRadioGroup>
		</FormControl>
	);
	// return <MuiRadioGroup {...rest}>{label}</MuiRadioGroup>;
}

