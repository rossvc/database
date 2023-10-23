import React from "react";
import { Typography, Link, Box } from "@mui/material";

export default function Footer() {
	return (
		<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
			<Typography variant="h6" align="center" gutterBottom>
			MFAH
			</Typography>
			<Typography
			variant="subtitle1"
			align="center"
			color="text.secondary"
			component="p"
			>
			Main Address: 1001 Bissonnet, Houston, Texas 77005 |
			MFAH Information Line: 713.639.7300
			</Typography>
			<Typography variant="body2" color="text.secondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="/">
					MFAH
					</Link>{' '}
					{new Date().getFullYear()}
					{'. The Museum of Fine Arts, Houston. All rights reserved.'}
			</Typography>
		</Box>
	);
}