import { ACTIVE_RECIPE, CREATE_RECIPE, MODIFY_RECIPE, REMOVE_ACTIVE_RECIPE, REMOVE_RECIPE } from '../ActionTypes';

const initialState = {
    recipies: [
        {id: '8383jidkjk$*9smeis' ,date: 'August 19, 2020 11:49:09 AM', dish: 'Mint Mojito', chef: 'nikhil', ingredientsArray:['mint', 'water', 'mojito paste', 'pudina leaf'], description: 'The Mint Mojito is so relaxing while people are stressed out, it provides positive vive while having.', image: 'https://data.thefeedfeed.com/recommended/post_3966940.jpeg'},
        {id: '234edfstedsf@445e&', date: 'August 20, 2020 11:39:45 AM', dish: 'Paneer Pakoda', chef: 'khushi', ingredientsArray:['paneer', 'besan', 'spices', 'oil'], description: 'The Paneer Pakoda is an Indian spicy and crispy dish which is made of paneer inside the basen, it is kind of tasty.', image: 'https://www.manjulaskitchen.com/wp-content/uploads/paneer_pakoras.jpg'},
      ],
      activerecipe: null
}

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_RECIPE:
            return {
                ...state,
                activerecipe: state.recipies.find(r => r.id === action.payload)
            }
        case REMOVE_ACTIVE_RECIPE:
            return {
                ...state,
                activerecipe: null
            }
        case CREATE_RECIPE:
            const createRecipiesDuplicate = [...state.recipies];
            createRecipiesDuplicate.push(action.payload);
            return {
                ...state,
                recipies: createRecipiesDuplicate
            }
        case MODIFY_RECIPE:
            const modifyRecipiesDuplicate = [...state.recipies];
            const mrecipeindex = modifyRecipiesDuplicate.findIndex(r => r.id === action.payload.id);
            modifyRecipiesDuplicate[mrecipeindex] = action.payload;
            return {
                ...state,
                recipies: modifyRecipiesDuplicate
            }
        case REMOVE_RECIPE:
            const RemoveRecipiesDuplicate = [...state.recipies];
            const FilterRecipiesDuplicate = RemoveRecipiesDuplicate.filter(r => r.id !== action.payload);
            return {
                ...state,
                recipies: FilterRecipiesDuplicate
            }
        default:
            return state;
    }
}

export default RecipeReducer;