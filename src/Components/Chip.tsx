import MuiChip, { type ChipProps as MuiChipProps } from "@mui/material/Chip";

type ChipBaseProps = Pick<MuiChipProps, "color" | "size" | "variant">;

export interface ChipProps extends ChipBaseProps {
	label: string;
}

export function Chip({ label, ...rest }: ChipProps): React.ReactNode {
	return <MuiChip {...rest} label={label} />;
}
