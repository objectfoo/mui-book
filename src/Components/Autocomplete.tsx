import TextField from "@mui/material/TextField";
import MuiAutocomplete, { type AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";

type PropPickList = "disablePortal" | "autoComplete" | "autoHighlight" | "autoSelect";

type MuiAutocompleteBaseProps = Pick<MuiAutocompleteProps<string, false, false, false>, PropPickList>;

export interface AutocompleteProps extends MuiAutocompleteBaseProps {
	label: string;
}

export function Autocomplete({ label, ...rest }: AutocompleteProps): React.ReactNode {
	const options: string[] = ["Aa", "Ba", "Ca", "Da", "Ea", "Fa", "Ga", "Ha", "Ia"];
	return (
		<MuiAutocomplete
			{...rest}
			sx={{ maxWidth: 300 }}
			options={options}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>
	);
}
