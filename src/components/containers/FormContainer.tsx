import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';

interface FormContainerProps {
	children: React.ReactChild[] | React.ReactChild;
	sx?: SxProps<Theme>;
}

export const FormContainer: React.FC<FormContainerProps> = (
	props: FormContainerProps
) => {
	return (
		<Box
			component="form"
			sx={{ maxWidth: 500, padding: 4, margin: 'auto' }}
			noValidate
			autoCapitalize="off"
			autoComplete="off"
			{...props}
		>
			{props.children}
		</Box>
	);
};
