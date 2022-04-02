import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Box from '@mui/material/Box';

export const MenuBar: React.FC = (): JSX.Element => {
	return (
		<Box style={{ backgroundColor: 'white' }} component="div">
			<AppBar
				position="fixed"
				color="inherit"
				elevation={0}
				sx={{ height: '80px' }}
			>
				<Toolbar>
					<IconButton edge="start" color="primary" aria-label="menu">
						<AddTaskIcon />
					</IconButton>
					<Typography variant="h5" color="primary">
						todo list
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
