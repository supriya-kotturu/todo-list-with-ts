import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material/styles';
import { FormContainer } from './FormContainer';

interface FormButtonsConatinerProps {
	children: React.ReactChild | React.ReactChild[];
	sx?: SxProps<Theme>;
}
export const FormButtonsContainer = (props: FormButtonsConatinerProps) => {
	return (
		<FormContainer
			sx={{ padding: 1, justifyContent: 'center', display: 'flex' }}
			{...props}
		>
			{props.children}
		</FormContainer>
	);
};
