import { Typography as MuiTypography, type TypographyProps as MuiTypographyProps } from "@mui/material";

type TypographyBaseProps = Pick<MuiTypographyProps, "variant" | "color" | "paragraph">;

export interface TypographyProps extends TypographyBaseProps {
	label: string;
}

export function Typography({ label, ...rest }: TypographyProps): React.ReactNode {
	return <MuiTypography {...rest}>{label}</MuiTypography>;
}
