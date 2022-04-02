import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface FormInputProps {
	id: string;
	label: string;
	value: string;
	type?: string;
	rows?: number;
	placeholder?: string;
	multiline?: boolean;
	onChange: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}
export const FormInput: React.FC<FormInputProps> = (
	props: FormInputProps
): JSX.Element => {
	return (
		<Box sx={{ padding: 1, margin: 1, justifyContent: 'center' }}>
			<TextField variant="outlined" color="primary" fullWidth {...props} />
		</Box>
	);
};
