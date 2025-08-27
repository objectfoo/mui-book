import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import type { Decorator } from "@storybook/react-vite";

export const WithDatePickerLocalizationProvider: Decorator = (Story) => {
	return (
		<LocalizationProvider dateAdapter={AdapterLuxon}>
			<Story />
		</LocalizationProvider>
	);
};

