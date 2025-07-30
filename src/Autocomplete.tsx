import TextField from "@mui/material/TextField";
import MuiAutocomplete, { type AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";

type MuiAutocompleteBaseProps = Pick<
	MuiAutocompleteProps<string, false, false, false>,
	"disablePortal" | "autoComplete" | "autoHighlight" | "autoSelect"
>;

export interface AutocompleteProps extends MuiAutocompleteBaseProps {
	label: string;
}

export function Autocomplete({ label, ...rest }: AutocompleteProps): React.ReactNode {
	const options: string[] = [
		"Aa",
		"Ba",
		"Ca",
		"Da",
		"Ea",
		"Fa",
		"Ga",
		"Ha",
		"Ia",
	];

	return (
		<MuiAutocomplete
			{...rest}
			options={options}
			renderInput={(params) => <TextField {...params} label={label} />}
		/>

	);
}


// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import top100Films from './top100Films';

