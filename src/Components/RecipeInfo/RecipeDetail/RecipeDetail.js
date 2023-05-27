import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { DeleteRecipe } from '../../../Store/Actions';

import { makeStyles } from '@material-ui/core/styles';
import {Paper, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    flex: '1 0 auto',
  },
  buttons: {
    marginTop: "2rem",
    textAlign: "right",
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  ingredients: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgba(245, 0, 87, .05)"

  },
  ingButtons: {
      marginTop: "1rem",
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  addrecipe: {
      padding: "1rem",
      height: "100%",
      display: "flex",
      flexDirection: 'column',
      alignItems: "center"
  }
}));



function RecipeDetail(props) {
  const classes = useStyles();

  const [state, setstate] = useState({
    id: '',
    date : '', 
    dish: '', 
    chef : '', 
    description : '', 
    ingredientsArray: []
  });

  const random = () => Math.floor(Math.random()*3);
  const badgeColor = [ 'primary', 'secondary', 'default'];
  const badgeVarient = [ 'outlined', 'contained', 'text'];
  const ingredientBadges = state.ingredientsArray.map( ingredient => (
    <Button key={ingredient} variant={badgeVarient[random()]} color={badgeColor[random()]}>{ingredient}</Button>
    ) );

    useEffect(() => {
      if(props.activerecipe){
        setstate({...props.activerecipe});
      }
  }, [props])

  const DeleteRecipeHandler = async () => {
      await props.DeleteRecipe(state.id);
      props.history.push('/');
  }
    
    return (
        <CardContent className={classes.content}>
      <Typography component="h3" variant="h3">{state.dish}</Typography>
      <Typography variant="subtitle1" color="textSecondary">{state.chef}</Typography>
      <Typography variant="subtitle2" color="textSecondary">{state.date}</Typography>
      <br />
      <Typography variant="body1" color="textSecondary">{state.description}</Typography>

      <Paper elevation={3} className={classes.ingredients}>
      <Typography component="h4" variant="h4"> 
        <span role="img" aria-label="ingredient" aria-labelledby="jsx-a11y/accessible-emoji">🍝</span>
        Ingredients
        <div className={classes.ingButtons}>{ingredientBadges}</div>        
      </Typography>

      </Paper>

    <div className={classes.buttons}>
    <Button
        onClick={ () => props.history.push(`${props.match.url}/edit`)} 
        variant="contained" color="primary">      
    Edit
    </Button>
    <Button
      onClick={DeleteRecipeHandler} 
      variant="contained" color="secondary">Delete</Button>
    <Button 
      onClick={ () => props.history.goBack()}
      variant="contained">Back</Button>
    </div>
    </CardContent>
    )
}

const mapStateToProps = state => {
  return {
    activerecipe: state.RecipeReducer.activerecipe
  }
}

const mapDispatchToProps = ({
  DeleteRecipe
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
