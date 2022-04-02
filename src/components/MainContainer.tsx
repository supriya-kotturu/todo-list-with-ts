import React from 'react';
import Container from '@mui/material/Container';

import { MenuBar } from './UI/MenuBar';
import { TodoCard } from './UI/TodoCard';
import { TodoForm } from './forms/TodoForm';
import { LoginForm } from './forms/LoginForm';
import { SignupForm } from './forms/SignupForm';

interface ContainerProps {
	children?: React.ReactNode;
}

export const MainContainer: React.FC<ContainerProps> = (): JSX.Element => {
	return (
		<>
			<MenuBar />
			<div style={{ marginTop: '5rem' }}></div>
			<Container maxWidth="md">
				<TodoCard />
				<TodoForm />
				<LoginForm />
				<SignupForm />
			</Container>
		</>
	);
};
