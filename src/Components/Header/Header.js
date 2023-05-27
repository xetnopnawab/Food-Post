import React from 'react';

import { withRouter, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import GridOn from '@material-ui/icons/GridOn';
import GridOff from '@material-ui/icons/GridOff';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2rem"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkstyle: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

function Header(props) {
  const classes = useStyles();


  const GridSwitchHandler = () => {
      if(props.location.pathname === '/cardrecipe'){
        props.history.push('/listrecipe');
      } else if(props.location.pathname === '/listrecipe') {
        props.history.push('/cardrecipe');
      }
  }
  

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link className={classes.linkstyle} to="/" >

            <span role="img" aria-label="spoon1"  aria-labelledby="jsx-a11y/accessible-emoji">🥄</span>
            फीयुकFood
            <span role="img" aria-label="spoon2"  aria-labelledby="jsx-a11y/accessible-emoji">🍴</span>

          </Link>
          
          </Typography>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={GridSwitchHandler}
            >

            {props.location.pathname === '/cardrecipe' ? <GridOff /> : ''}
            {props.location.pathname === '/listrecipe' ? <GridOn /> : ''}
             
            
             
            
            
          </IconButton>
          <Button 
            onClick={ () => props.history.push('/addrecipe') }
            color="inherit">Add Recipe</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);