import MuiTypography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { AppBar } from "../../AppBar";
import { Default } from "../../AppBar.stories";

export function AppBarSection(): React.ReactNode {
	return (
		<div>
			<MuiTypography variant="h2" gutterBottom>AppBar</MuiTypography>
			<Stack spacing={1}>
				<AppBar {...Default.args} variant="regular" />
				<AppBar {...Default.args} variant="dense" label="App Bar dense" />
			</Stack>
		</div>
	);
}
