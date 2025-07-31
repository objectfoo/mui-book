import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material";

type PropPickList = "size" | "color" | "variant" | "disabled" | "disableElevation" | "endIcon" | "fullWidth" |
	"href" | "loading" | "loadingPosition" | "startIcon";

type ButtonBaseProps = Pick<MuiButtonProps, PropPickList>;

export const colors: MuiButtonProps["color"][] = ["error", "info", "inherit", "primary", "secondary", "success", "warning"];
export const sizes: MuiButtonProps["size"][] = ["medium", "large", "small"];
export const variants: MuiButtonProps["variant"][] = ["contained", "outlined", "text"];
export const loadingPositions: MuiButtonProps["loadingPosition"][] = ["start", "center", "end"];

export interface ButtonProps extends ButtonBaseProps {
	label: string;
}

export function Button({ label, ...rest }: ButtonProps): React.ReactNode {
	return <MuiButton {...rest}>{label}</MuiButton>;
}
