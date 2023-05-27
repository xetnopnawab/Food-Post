import {REMOVE_RECIPE, ACTIVE_RECIPE, CREATE_RECIPE, REMOVE_ACTIVE_RECIPE, MODIFY_RECIPE } from '../ActionTypes';

export const GetActiveRecipie = (id) => {
    return {
        type: ACTIVE_RECIPE,
        payload: id
    }      
}

export const RemoveActiveRecipie = () => {
    return {
        type: REMOVE_ACTIVE_RECIPE
    }      
}

export const CreateRecipe = (recipe) => {
    return {
        type: CREATE_RECIPE,
        payload: recipe
    }      
}

export const ModifyRecipe = (modifiedrecipe) => {
    return {
        type: MODIFY_RECIPE,
        payload: modifiedrecipe
    }      
}

export const DeleteRecipe = (id) => {
    return {
        type: REMOVE_RECIPE,
        payload: id
    }      
}