import { TOGGLE_FAVOURITE , SET_FILTERS} from "../types/meals.types";
import { MEALS } from "../../data/dummy";

const initialState = {
  meals:MEALS,
  filteredMeals:MEALS,
  favouriteMeals:[]
}

const mealsReducer = (state = initialState,action) => {
  switch(action.type){
    case TOGGLE_FAVOURITE: 
    const mealId = action.payload;

    const existingIndex = state.favouriteMeals.findIndex((item) => item.id === mealId);

    if(existingIndex >= 0){
      const updated = [...state.favouriteMeals].filter((m) => m.id !== mealId);
      return {
        ...state,
        favouriteMeals:updated,
      }
    }else{
      const meal = state.meals.find((m) => m.id === mealId);
      // console.log(meal,'me')
      const favouriteMeals = [meal,...state.favouriteMeals];
      return {
        ...state,
        favouriteMeals,
      }
    }



    case SET_FILTERS:
      const appliedFilters = action.payload;

      const filteredMeals = state.meals.filter((meal) => {
        if(appliedFilters.glutenFree && !meal.isGlutenFree){
          return false;
        }

        if(appliedFilters.lactoseFree && !meal.isLactoseFree){
          return false;
        }

        if(appliedFilters.vegan && !meal.isVegan){
          return false;
        }

        if(appliedFilters.vegitarian && !meal.isVegitarian){
          return false;
        }

        return true;
      });

      return {
        ...state,
        filteredMeals:[...filteredMeals]
      }

    default:
      return state;
  
  }
}

export default mealsReducer;