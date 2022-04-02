import { FormButtonsContainer } from '../containers/FormButtonsContainer';
import { FormContainer } from '../containers/FormContainer';
import { FormInput } from '../UI/FormInput';
import { ActionButton } from '../UI/ActionButton';

interface SignupFormProps {
	children?: React.ReactNode;
}
export const SignupForm: React.FC<SignupFormProps> = (
	props: SignupFormProps
) => {
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
			<FormInput
				id="rePassword"
				type="password"
				label="Re-enter your Password"
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
