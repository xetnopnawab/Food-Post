import React from "react";
import { withRouter } from 'react-router';


import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import More from '@material-ui/icons/More';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "0 1rem 1rem 0"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
      marginLeft: 'auto'
  }
}));

function SingleRecipe(props) {
  const classes = useStyles();
  const { id, date, dish, chef, description, image} = props.recipe;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {chef.substr(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={dish}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={dish}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={() => props.history.push(`/recipeinfo/${id}`)}
          color="secondary"
          className={classes.button}
          startIcon={<More />}
        >
          Recipe Detail
        </Button>
      </CardActions>
      <Button></Button>
    </Card>
  );
}

export default withRouter(SingleRecipe);
