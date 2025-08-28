import MuiAppBar, { type AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiTypography from "@mui/material/Typography";
import MuiToolbar, { type ToolbarProps as MuiToolbarProps } from "@mui/material/Toolbar";
import MuiIconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/MenuRounded";

type AppBarBaseProps = Pick<MuiAppBarProps, "color" | "position" | "enableColorOnDark">;
type ToolbarBaseProps = Pick<MuiToolbarProps, "variant" | "disableGutters" >;

export type AppBarProps = AppBarBaseProps & ToolbarBaseProps & {
	label: string;
	onClick?: () => void;
};

// TODO: add menu to the icon button
// TODO: add search field to the app bar

export function AppBar(props: AppBarProps): React.ReactNode {
	const { color, disableGutters, enableColorOnDark, position, variant, label } = props;
	return <>
		<MuiAppBar color={color} position={position} enableColorOnDark={enableColorOnDark}>
			<MuiToolbar variant={variant} disableGutters={disableGutters}>
				<MuiTypography variant="h5" component="div" sx={{ flexGrow: 1 }}>
					{label}
				</MuiTypography>
				<MuiIconButton color="inherit" aria-label="Menu button" onClick={() => { props.onClick?.(); }}>
					<MenuIcon />
				</MuiIconButton>
			</MuiToolbar>
		</MuiAppBar>
	</>;
}
