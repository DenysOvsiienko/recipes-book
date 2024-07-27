//iziToast library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getAllRecipes,
  getRecipeById,
  searchRecipes,
  getRecipesByMealType,
} from './DummyJSON-Recipes-API';
import { recipeMarkup, createRecipeModalWindow } from './render-functions';

const recipesSearchFormElem = document.querySelector('.recipes-search-form');
const recipesSearchInputElem =
  recipesSearchFormElem.elements.recipesSearchInput;
const loaderElem = document.querySelector('.loader');
const recipesListElem = document.querySelector('.recipes-list');
const loadMoreBtnElem = document.querySelector('.recipes-list-load-more-btn');
const recipeModalBackdrop = document.querySelector('.recipe-modal-backdrop');
const recipeModalWindowContentElem = document.querySelector(
  '.recipe-modal-content'
);
let searchType = '';
let currentSearchMealType = '';
let inputValue = '';
const limit = 9;
let currentPage = 1;
let totalPages = 0;

// Categories search
const categoriesListItems = document.querySelectorAll('.category-list-item');
categoriesListItems.forEach(category => {
  category.addEventListener('click', async event => {
    if (!event.target.closest('li.category-list-item')) return;
    const mealType = event.target.closest('li.category-list-item').dataset
      .mealtype;
    currentSearchMealType = mealType;
    try {
      currentPage = 1;
      searchType = 'mealType';
      loadMoreBtnElem.classList.remove('visually-hidden');
      const data = await getRecipesByMealType(mealType, limit);
      const markupRecipe = recipeMarkup(data.recipes);
      recipesListElem.innerHTML = '';
      recipesListElem.insertAdjacentHTML('beforeend', markupRecipe);
      document.querySelector('.recipes-search-form').scrollIntoView();
      if (data.total > limit) {
        loadMoreBtnElem.classList.remove('visually-hidden');
      } else {
        loadMoreBtnElem.classList.add('visually-hidden');
      }
    } catch (error) {
      iziToast.error({
        message: 'Error',
        position: 'topRight',
      });
      console.log(error);
    }
  });
});

// Get All Recipes
async function allRecipesData() {
  try {
    searchType = 'allRecipes';
    const data = await getAllRecipes(limit);
    const markupRecipe = recipeMarkup(data.recipes);
    recipesListElem.insertAdjacentHTML('beforeend', markupRecipe);
    if (data.total > limit) {
      loadMoreBtnElem.classList.remove('visually-hidden');
    }
  } catch (error) {
    iziToast.error({
      message: 'Error',
      position: 'topRight',
    });
    console.log(error);
  }
}
allRecipesData();

// Query Search Recipes
recipesSearchFormElem.addEventListener('submit', async event => {
  event.preventDefault();
  inputValue = recipesSearchInputElem.value.trim();
  if (!inputValue) {
    iziToast.warning({
      position: 'topRight',
      message: 'Please fill query field',
    });
    return;
  }
  currentPage = 1;
  recipesListElem.innerHTML = '';
  loaderElem.classList.remove('visually-hidden');
  try {
    searchType = 'querySearch';
    const data = await searchRecipes(inputValue, limit);
    if (!data.total) {
      iziToast.warning({
        position: 'topRight',
        message: 'No results',
      });
      loadMoreBtnElem.classList.add('visually-hidden');
      return;
    }
    const markupRecipe = recipeMarkup(data.recipes);
    recipesListElem.insertAdjacentHTML('beforeend', markupRecipe);
    if (data.total > 9) {
      loadMoreBtnElem.classList.remove('visually-hidden');
    } else {
      loadMoreBtnElem.classList.add('visually-hidden');
    }
  } catch (error) {
    iziToast.error({
      message: 'Error',
      position: 'topRight',
    });
    console.log(error);
  } finally {
    loaderElem.classList.add('visually-hidden');
    recipesSearchFormElem.reset();
  }
});

// Pagination Button
loadMoreBtnElem.addEventListener('click', async event => {
  if (searchType === 'allRecipes') {
    try {
      const data = await getAllRecipes(limit, currentPage * limit);
      const markupRecipe = recipeMarkup(data.recipes);
      totalPages = Math.ceil(data.total / limit);
      recipesListElem.insertAdjacentHTML('beforeend', markupRecipe);
      currentPage += 1;
      if (data.total > limit) {
        loadMoreBtnElem.classList.remove('visually-hidden');
      }
    } catch (error) {
      iziToast.error({
        message: 'Error',
        position: 'topRight',
      });
      console.log(error);
    }
    if (currentPage === totalPages) {
      loadMoreBtnElem.classList.add('visually-hidden');
    }
  } else if (searchType === 'querySearch') {
    try {
      const data = await searchRecipes(inputValue, limit, currentPage * limit);
      const markupRecipe = recipeMarkup(data.recipes);
      totalPages = Math.ceil(data.total / limit);
      recipesListElem.insertAdjacentHTML('beforeend', markupRecipe);
      currentPage += 1;
      if (data.total > limit) {
        loadMoreBtnElem.classList.remove('visually-hidden');
      }
    } catch (error) {
      iziToast.error({
        message: 'Error',
        position: 'topRight',
      });
      console.log(error);
    }
    if (currentPage === totalPages) {
      loadMoreBtnElem.classList.add('visually-hidden');
    }
  } else if (searchType === 'mealType') {
    try {
      const data = await getRecipesByMealType(
        currentSearchMealType,
        limit,
        currentPage * limit
      );
      const markupRecipe = recipeMarkup(data.recipes);
      totalPages = Math.ceil(data.total / limit);
      recipesListElem.insertAdjacentHTML('beforeend', markupRecipe);
      currentPage += 1;
      if (data.total > limit) {
        loadMoreBtnElem.classList.remove('visually-hidden');
      }
    } catch (error) {
      iziToast.error({
        message: 'Error',
        position: 'topRight',
      });
      console.log(error);
    }
    if (currentPage === totalPages) {
      loadMoreBtnElem.classList.add('visually-hidden');
    }
  }
});

document.addEventListener('click', onRecipe);

async function onRecipe(event) {
  if (!event.target.closest('li.recipes-list-item')) return;
  recipeModalWindowContentElem.innerHTML = '';
  const id = event.target.closest('li.recipes-list-item').dataset.id;
  const data = await getRecipeById(id);
  const recipeMarkup = createRecipeModalWindow(data);
  recipeModalWindowContentElem.insertAdjacentHTML('afterbegin', recipeMarkup);
  recipeModalBackdrop.classList.remove('is-closed');
  recipeModalBackdrop.addEventListener('click', event => {
    if (
      event.target.classList.contains('recipe-modal-backdrop') ||
      event.target
        .closest('BUTTON')
        .classList.contains('recipe-modal-close-btn' || event.key === 'Escape')
    ) {
      recipeModalBackdrop.classList.add('is-closed');
      recipeModalBackdrop.removeEventListener;
    }
  });
  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      recipeModalBackdrop.classList.add('is-closed');
      recipeModalBackdrop.removeEventListener;
    }
  });
}
