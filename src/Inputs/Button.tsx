import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "size" | "color" | "variant">;

export interface ButtonProps extends ButtonBaseProps {
	label: string;
}

export function Button({ label, ...rest }: ButtonProps): React.ReactNode {
	return <MuiButton {...rest}>{label}</MuiButton>;
}
