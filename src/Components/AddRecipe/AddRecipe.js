import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import moment from 'moment';
import { connect } from 'react-redux';

import { CreateRecipe, ModifyRecipe } from '../../Store/Actions';

import {TextField, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: "2rem"
    },
    textfields: {
        width: "100%",
        marginBottom: "1rem"
    },
    buttonSpace: {
        marginLeft: "1rem"
    }
  }));

function AddRecipe(props) {
    const classes = useStyles();
    const initialState = {
        dish: '',
        chef: '',
        image: '',
        description: '',
        ingredients: ''
    }

    const [state, setstate] = useState(initialState);


    useEffect(() => {
        if(props.activerecipe){
            let recipedata = {...props.activerecipe};
            let ingredients = recipedata.ingredientsArray.join(); 
            delete recipedata.ingredientsArray;
            setstate({...recipedata, ingredients});
        }
        return () => {
            if(props.match.url === '/addrecipe'){
                setstate({ dish: '', chef: '', image: '',
                        description: '', ingredients: ''
                    })
            }
        }
    }, [props.activerecipe])


    const ChangeHandler = (e) => {
        e.persist();
        setstate(prevstate => ({...prevstate, [e.target.name]: e.target.value}));
    }

    const SubmitRecipeHandler = async (e) => {
        e.preventDefault();


        if(state.chef.trim() === '' || state.dish.trim() === ''){
            return alert('Input fields must not empty');
        }



        const { date, id, dish, chef, ingredients, description, image } = await state;
        
        if(props.match.url === '/addrecipe') {
            const Recipe = await { dish, chef, description, image }
            Recipe.id = await v4();
            Recipe.date = await moment().format('LLLL');
            Recipe.ingredientsArray = await ingredients.split(',');
            await props.CreateRecipe(Recipe);
            props.history.push('/');
        } else {
            const Recipe = await { date, id, dish, chef, description, image }
            Recipe.ingredientsArray = await ingredients.split(',');
            await props.ModifyRecipe(Recipe); 
            props.history.goBack();
        }    
    }

    return (
        <Grid container className={classes.root}>
        <Grid item sm={2}></Grid>
        <Grid container item sm={8}>
        
        <form onSubmit={SubmitRecipeHandler}>

        <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Name" 
                variant="outlined" 
                name='dish'
                onChange={ChangeHandler}
                value={state.dish}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Chef Name" 
                variant="outlined" 
                name='chef'
                onChange={ChangeHandler}
                value={state.chef}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Ingredients" 
                variant="outlined" 
                name='ingredients'
                onChange={ChangeHandler}
                value={state.ingredients}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Image URL" 
                type="url"
                variant="outlined" 
                name='image'
                onChange={ChangeHandler}
                value={state.image}
            />
            <TextField
                className={classes.textfields}
                color="secondary"
                label="Recipe Descripton" 
                variant="outlined" 
                name='description'
                onChange={ChangeHandler}
                value={state.description}
            />
            <Button 
                type="submit"
                variant="contained" 
                color="secondary">Save Recipe</Button>
            <Button 
                onClick={ () => props.history.goBack() }
                className={classes.buttonSpace} 
                variant="contained" 
                color="primary">Back</Button>

        </form>
            
        </Grid>
        <Grid item sm={2}></Grid>
       
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        activerecipe: state.RecipeReducer.activerecipe
    }
}

const mapDispatchToProps = ({
    CreateRecipe,
    ModifyRecipe
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
