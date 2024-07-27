//iziToast library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
//Swiper library
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { getRecipeById } from './DummyJSON-Recipes-API';
import {
  markupHeroRecipesSliders,
  createRecipeModalWindow,
} from './render-functions';

document.addEventListener('DOMContentLoaded', () => {
  getRandomSlidersRecipes();
});

const recipeSwiperWrapperElem = document.querySelector(
  '.hero-recipes-swiper-wrapper'
);
const recipeModalBackdrop = document.querySelector('.recipe-modal-backdrop');
const recipeModalWindowContentElem = document.querySelector(
  '.recipe-modal-content'
);

const getRandomSlidersRecipes = async () => {
  const getRandomIdArray = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 50) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };
  const randomIds = getRandomIdArray();
  const fetchPromises = randomIds.map(id => getRecipeById(id));
  try {
    const data = await Promise.all(fetchPromises);
    const markupRecipe = markupHeroRecipesSliders(data);
    recipeSwiperWrapperElem.insertAdjacentHTML('beforeend', markupRecipe);
    const randomRecipeBtnElems = document.querySelectorAll(
      '.hero-random-recipe-modal-btn'
    );
    randomRecipeBtnElems.forEach(btn =>
      btn.addEventListener('click', async event => {
        recipeModalWindowContentElem.innerHTML = '';
        const data = await getRecipeById(event.target.dataset.id);
        const recipeMarkup = createRecipeModalWindow(data);
        recipeModalWindowContentElem.insertAdjacentHTML(
          'afterbegin',
          recipeMarkup
        );
        recipeModalBackdrop.classList.remove('is-closed');
        recipeModalBackdrop.addEventListener('click', event => {
          if (
            event.target.classList.contains('recipe-modal-backdrop') ||
            event.target.classList.contains('recipe-modal-close-btn-icon') ||
            event.target.classList.contains(
              'recipe-modal-close-btn' || event.key === 'Escape'
            ) ||
            event.target.classList.contains('recipe-modal-close-btn-icon')
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
        console.log(event.target.dataset.id);
      })
    );
  } catch (error) {
    iziToast.error({
      message: 'Error',
      position: 'topRight',
    });
    console.log(error);
  } finally {
    const recipesSwiper = new Swiper('.hero-recipes-swiper', {
      modules: [Autoplay],
      loop: true,
      touch: true,
      direction: 'horizontal',
      speed: 2000,
      spaceBetween: 100,
      slidesPerView: 1,
      wrapperClass: 'hero-recipes-swiper-wrapper',
      slideClass: 'hero-recipes-swiper-slide',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
    });
  }
};
