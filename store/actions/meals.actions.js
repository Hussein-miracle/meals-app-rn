import { TOGGLE_FAVOURITE,SET_FILTERS } from "../types/meals.types";


export const toggleFavourite = (mealId) => {
  return {
    type:TOGGLE_FAVOURITE,
    payload:mealId,
  }
}


export const setFilters = (filterSettings) => {
  return {
    type:SET_FILTERS,
    payload:filterSettings
  }
}