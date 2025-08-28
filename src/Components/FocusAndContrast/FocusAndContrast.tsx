import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AccordionSection } from "./Sections/AccordionSection";
import { AppBarSection } from "./Sections/AppBarSection";
import { AvatarSection } from "./Sections/AvatarSection";

export type FocusAndContrastProps = {};

export function FocusAndContrast(): React.ReactNode {
	return <>
		<Typography variant="caption" component="h1" gutterBottom>Test page</Typography>
		<Stack direction="column" spacing={2}>
			<AccordionSection />
			<AppBarSection />
			<AvatarSection />
		</Stack>
	</>;
}

