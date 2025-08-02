import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import MuiRadioGroup, { type RadioGroupProps as MuiRadioGroupProps } from "@mui/material/RadioGroup";

type RadioGroupBaseProps = Pick<MuiRadioGroupProps, "row">;

export interface RadioGroupProps extends RadioGroupBaseProps {
	label: string;
}

export function RadioGroup({ label, row }: RadioGroupProps): React.ReactNode {
	return (
		<FormControl>
			<FormLabel id="pet-form">{label}</FormLabel>
			<MuiRadioGroup row={row} aria-labelledby="pet-form">
				<FormControlLabel value="cat" control={<Radio />} label="Cat" />
				<FormControlLabel value="dog" control={<Radio />} label="Dog" />
				<FormControlLabel value="rat" control={<Radio />} label="Rat" />
			</MuiRadioGroup>
		</FormControl>
	);
}

