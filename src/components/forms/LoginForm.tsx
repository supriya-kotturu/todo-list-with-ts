import { FormButtonsContainer } from '../containers/FormButtonsContainer';
import { FormContainer } from '../containers/FormContainer';
import { FormInput } from '../UI/FormInput';
import { ActionButton } from '../UI/ActionButton';

interface LoginFormProps {
	children?: React.ReactNode;
}
export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
	return (
		<FormContainer>
			<FormInput
				id="email"
				type="email"
				label="Email"
				placeholder="john.doe@gmail.com"
				value=""
				onChange={() => {}}
			/>
			<FormInput
				id="password"
				type="password"
				label="Password"
				value=""
				onChange={() => {}}
			/>
			<FormButtonsContainer>
				<ActionButton label="Cancel" />
				<ActionButton label="Submit" variant="contained" type="submit" />
			</FormButtonsContainer>
		</FormContainer>
	);
};
