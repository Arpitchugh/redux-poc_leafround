// Counter.js
import React from 'react';
import {
	Box,
	Button,
	CircularProgress,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from '@mui/material';

const Counter = ({
	posts,
	color,
	handleIncrement,
	handleDecrement,
	counter,
}) => {
	return (
		<Box>
			{posts.length === 0 ? (
				<CircularProgress /> // Show a loading indicator while fetching data
			) : (
				<TableContainer>
					<Box>
						<Button
							variant='contained'
							onClick={
								handleIncrement
							}
							style={{
								marginRight:
									'10px',
							}}
						>
							Increment
						</Button>
						<Button
							variant='contained'
							onClick={
								handleDecrement
							}
						>
							Decrement
						</Button>
						<p>Counter: {counter}</p>
					</Box>
					<Table>
						<TableBody>
							{posts.map(post => (
								<TableRow
									key={
										post.id
									}
								>
									<TableCell
										style={{
											backgroundColor:
												color,
										}}
									>
										{
											post.id
										}
									</TableCell>
									<TableCell
										style={{
											backgroundColor:
												color,
										}}
									>
										{
											post.title
										}
									</TableCell>
									<TableCell
										style={{
											backgroundColor:
												color,
										}}
									>
										{
											post.body
										}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</Box>
	);
};

export default Counter;
