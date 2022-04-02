import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface ActionButtonProps {
	label: string;
	variant?: 'text' | 'contained' | 'outlined' | undefined;
	type?: 'button' | 'submit' | 'reset' | undefined;
	sx?: SxProps<Theme>;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export const ActionButton = (props: ActionButtonProps) => {
	return (
		<Button
			sx={{ margin: 1 }}
			variant="outlined"
			type="button"
			color="primary"
			{...props}
		>
			{props.label}
		</Button>
	);
};
