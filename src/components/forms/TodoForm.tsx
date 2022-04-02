import { FormButtonsContainer } from '../containers/FormButtonsContainer';
import { FormContainer } from '../containers/FormContainer';
import { FormInput } from '../UI/FormInput';
import { ActionButton } from '../UI/ActionButton';

interface TodoFormProps {
	children?: React.ReactNode;
}
export const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
	return (
		<FormContainer>
			<FormInput
				value="78"
				label="Title"
				id="taskTitle"
				type="text"
				placeholder="well well here  we go"
				rows={1}
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<FormInput
				value="34"
				label="Description"
				id="taskTitle"
				multiline
				rows={5}
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<FormButtonsContainer>
				<ActionButton label="Cancel" />
				<ActionButton label="Submit" variant="contained" type="submit" />
			</FormButtonsContainer>
		</FormContainer>
	);
};
