import React from "react";
import { Typography, Link, Box } from "@mui/material";

export default function Footer() {
	return (
		<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
			<Typography variant="h6" align="center" gutterBottom>
			Footer
			</Typography>
			<Typography
			variant="subtitle1"
			align="center"
			color="text.secondary"
			component="p"
			>
			More information about the Musuem 
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="/">
					Musuem
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
			</Typography>
		</Box>
	);
}