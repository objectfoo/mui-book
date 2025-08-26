import { Typography as MuiTypography, Box, type TypographyProps as MuiTypographyProps } from "@mui/material";

type TypographyBaseProps = Pick<MuiTypographyProps, "variant" | "color" | "paragraph">;

export interface TypographyProps extends TypographyBaseProps {
	label: string;
}

const variants: MuiTypographyProps["variant"][] = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"body1",
	"body2",
	"button",
	"caption",
	"overline",
	"subtitle1",
	"subtitle2",
];

export function Typography({ label, ...rest }: TypographyProps): React.ReactNode {
	return (
		<Box sx={{
			display: "grid",
			gridTemplateColumns: "max-content auto",
			rowGap: "32px",
			alignItems: "center"
		}}>
			{variants.map((v) => (
				<>
					<MuiTypography variant="body2" component="div" sx={{ pr: 3, textTransform: "uppercase" }}>{v}</MuiTypography>
					<MuiTypography {...rest} variant={v}>{label}</MuiTypography>
				</>
			))}
		</Box>
	);
}
