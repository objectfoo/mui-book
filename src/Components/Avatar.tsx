import MuiAvatar, { type AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/PersonRounded";

type AvatarBaseProps = Pick<
	MuiAvatarProps,
	"variant"
	| "sx"
>;

export interface AvatarProps extends AvatarBaseProps {
	label?: string;
	sampleIcon?: boolean;
}

export function Avatar({ label, sampleIcon, ...rest }: AvatarProps): React.ReactNode {
	return <>
		<MuiAvatar {...rest}>
			{sampleIcon === true ? <PersonIcon /> : label}
		</MuiAvatar>
	</>;
}

