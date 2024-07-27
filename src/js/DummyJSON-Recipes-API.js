//Axios library
import axios from 'axios';

const dummyJSONapi = axios.create({
  baseURL: 'https://dummyjson.com',
});

//GET all recipes
export async function getAllRecipes(limit, skip) {
  const params = {
    limit,
    skip,
  };
  const result = await dummyJSONapi.get(`/recipes`, { params });
  return result.data;
}

//GET recipes by ID
export async function getRecipeById(id) {
  const result = await dummyJSONapi.get(`/recipes/${id}`);
  return result.data;
}

//Search recipes
export async function searchRecipes(query, limit, skip) {
  const params = {
    q: query,
    limit,
    skip,
  };
  const result = await dummyJSONapi.get(`/recipes/search`, { params });
  return result.data;
}

//GET all recipes tags
export async function getRecipesTags() {
  const result = await dummyJSONapi.get(`/recipes/tags`);
  return result.data;
}

//GET recipes by a meal type
export async function getRecipesByMealType(mealType, limit, skip) {
  const params = {
    limit,
    skip,
  };
  const result = await dummyJSONapi.get(`/recipes/meal-type/${mealType}`, {
    params,
  });
  return result.data;
}
