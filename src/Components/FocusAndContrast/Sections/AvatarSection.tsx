import Stack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { Avatar } from "../../Avatar";

export function AvatarSection(): React.ReactNode {
	return (
		<div>
			<MuiTypography variant="h2" gutterBottom>Avatar</MuiTypography>
			<Stack direction="column" spacing={1}>
				<Stack spacing={1} direction="row">
					<Stack direction="row" spacing={2}>
						<Avatar label="A" />
						<Avatar label="B" variant="rounded" />
						<Avatar label="C" variant="square" />
						<Avatar sampleIcon={true} />
					</Stack>
					<Stack direction="row" spacing={2}>
						<Avatar label="A" sx={{ bgcolor: "primary.main" }} />
						<Avatar label="B" variant="rounded" sx={{ bgcolor: "primary.main" }} />
						<Avatar label="C" variant="square" sx={{ bgcolor: "primary.main" }} />
						<Avatar sampleIcon={true} sx={{ bgcolor: "primary.main" }} />
					</Stack>
				</Stack>
				<Stack spacing={1} direction="row">
					<Stack direction="row" spacing={2}>
						<Avatar label="A" sx={{ bgcolor: "info.main" }} />
						<Avatar label="B" variant="rounded" sx={{ bgcolor: "info.main" }} />
						<Avatar label="C" variant="square" sx={{ bgcolor: "info.main" }} />
						<Avatar sampleIcon={true} sx={{ bgcolor: "info.main" }} />
					</Stack>
					<Stack direction="row" spacing={2}>
						<Avatar label="A" sx={{ bgcolor: "success.main" }} />
						<Avatar label="B" variant="rounded" sx={{ bgcolor: "success.main" }} />
						<Avatar label="C" variant="square" sx={{ bgcolor: "success.main" }} />
						<Avatar sampleIcon={true} sx={{ bgcolor: "success.main" }} />
					</Stack>
				</Stack>
				<Stack spacing={1} direction="row">
					<Stack direction="row" spacing={2}>
						<Avatar label="A" sx={{ bgcolor: "error.main" }} />
						<Avatar label="B" variant="rounded" sx={{ bgcolor: "error.main" }} />
						<Avatar label="C" variant="square" sx={{ bgcolor: "error.main" }} />
						<Avatar sampleIcon={true} sx={{ bgcolor: "error.main" }} />
					</Stack>
					<Stack direction="row" spacing={2}>
						<Avatar label="A" sx={{ bgcolor: "warning.main" }} />
						<Avatar label="B" variant="rounded" sx={{ bgcolor: "warning.main" }} />
						<Avatar label="C" variant="square" sx={{ bgcolor: "warning.main" }} />
						<Avatar sampleIcon={true} sx={{ bgcolor: "warning.main" }} />
					</Stack>
				</Stack>
			</Stack>
		</div>
	);
}
