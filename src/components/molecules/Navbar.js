import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fed8b1',
    color: 'black',
    justifyContent: 'center',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <Router>
        <AppBar className={classes.root} color="secondary">
          <ToolBar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Express Delivery</Typography>

            <Link to="/home">
              <Button variant="">Home</Button>
            </Link>

            <Link to="/login">
              <Button>Login</Button>
            </Link>

            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </ToolBar>
        </AppBar>
      </Router>
    </>
  );
}
