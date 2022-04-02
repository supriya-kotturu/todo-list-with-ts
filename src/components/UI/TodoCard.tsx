import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { theme } from '../../theme';

export const TodoCard = () => {
	return (
		<Card
			sx={{
				boxShadow: 4,
				borderRadius: 4,
				overflow: 'breakword',
			}}
		>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: theme.palette.primary.main, padding: 0.4 }}
						aria-label=""
						src=""
					>
						W
					</Avatar>
				}
				action={<IconButton aria-label=""></IconButton>}
				title="Win your life back!"
				subheader="prooven techniques to get your shit together"
			/>
			<CardContent sx={{ paddingX: 4 }}>
				<Typography color="GrayText">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque
					necessitatibus quos natus numquam facere omnis accusamus quam delectus
					cumque ea, reprehenderit similique optio? Corrupti eligendi excepturi
					quos in ad.
				</Typography>
			</CardContent>
		</Card>
	);
};
