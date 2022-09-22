import React from "react";
import { AppBar, Box, Grid, ListItem, ListItemText, Typography } from "@mui/material";

import useStyles from './styles';

//Images
import LogoTech from '../../images/Arquivos Logo TechCN/V04_DERIVACAO_COLORIDA+PRETO.png';
import { NavLink } from "react-router-dom";

const Menu = () => {

	const classes = useStyles();

	return (
		<AppBar className={classes.paper} color='secondary'>
			<Grid container className={classes.container}>
				<Grid item>
					<Box>
						<ListItem button key={'home'} className={classes.listItem} component={NavLink} to="/">
							<img src={LogoTech} alt="Logo Tech" className={classes.logo}/>
						</ListItem>
					</Box>
				</Grid>
				<Grid item>
					<Box ml={2}>
						<ListItem button key={'sopro'} className={classes.listItem} component={NavLink} to="/sopro">
							<ListItemText>
								<Typography variant="h2" color='primary'>Sopro</Typography>
							</ListItemText>
						</ListItem>
					</Box>
				</Grid>
				<Grid item>
					<Box ml={2}>
						<ListItem button key={'rotuladora'} className={classes.listItem} component={NavLink} to="/rotuladora">
							<ListItemText>
								<Typography variant="h2" color='primary'>Rotuladora</Typography>
							</ListItemText>
						</ListItem>
					</Box>
				</Grid>
				<Grid item>
					<Box ml={2}>
						<ListItem button key={'configurations'} className={classes.listItem} component={NavLink} to="/configurations">
							<ListItemText>
								<Typography variant="h2" color='primary'>Configurações</Typography>
							</ListItemText>
						</ListItem>
					</Box>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Menu;