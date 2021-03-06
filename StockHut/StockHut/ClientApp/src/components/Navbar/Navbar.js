﻿import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink, Link } from "react-router-dom"

import TemporaryDrawer from "./NavDrawer";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    login: {
        color: 'white'
    }
}));

function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "green" }}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <TemporaryDrawer username={props.username} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} align="center">
                        StockHut
                    </Typography>
                    <Button color="inherit" onClick="window.location.reload();">
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} tag={Link} to="/">Logout</NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default ButtonAppBar;
