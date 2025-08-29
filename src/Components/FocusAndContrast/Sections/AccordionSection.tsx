import { Accordion } from "../../Accordion";
import MuiTypography from "@mui/material/Typography";

export function AccordionSection(): React.ReactNode {
	return (
		<div>
			<MuiTypography variant="h2" gutterBottom>Accordion</MuiTypography>
			<Accordion />
		</div>
	);
}
