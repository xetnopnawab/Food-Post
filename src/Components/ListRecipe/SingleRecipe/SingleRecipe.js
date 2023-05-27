import React from 'react';
import { withRouter } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      padding: "10px 1.5rem"
    },
    imageSpace: {
      marginRight: '1rem'
    }
  }));


function SingleRecipe(props) {
    const classes = useStyles();
    const { id, dish, description, image} = props.recipe;
    return (
        <div>
        <Button
        onClick={() => props.history.push(`/recipeinfo/${id}`)}
        variant="contained"
        color="secondary"
        className={classes.button}
        title={description}
        >
        <img className={classes.imageSpace} height={50} src={image} alt={dish} />
        {dish}
        </Button>
        </div>
    )
}

export default withRouter(SingleRecipe);
