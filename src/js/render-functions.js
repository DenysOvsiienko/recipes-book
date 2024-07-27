export function recipeMarkup(recipes) {
  return recipes
    .map(
      ({ id, name, image, cookTimeMinutes, mealType }) => `
      <li class="recipes-list-item" data-id="${id}">
              <img
                class="recipe-list-item-image"
                src="${image}"
                alt="${name}"
                width="368px"
                loading="lazy"
              />
              <h3 class="recipe-list-item-title">${name}</h3>
              <div class="recipe-info-wrapper">
                <div class="recipe-cooking-time">
                  <div class="recipe-cooking-time-icon">
                    <svg width="24" height="24">
                      <use href="./img/icons.svg#icon-timer"></use>
                    </svg>
                  </div>
                  <p class="recipe-cooking-time-text">${cookTimeMinutes} Minutes</p>
                </div>
                <div class="recipe-meal-type">
                  <div class="recipe-meal-type-icon">
                    <svg width="24" height="24">
                      <use href="./img/icons.svg#icon-forkKnife"></use>
                    </svg>
                  </div>
                  <p class="recipe-meal-type-text">${mealType.join(', ')}</p>
                </div>
              </div>
            </li>
        `
    )
    .join('');
}

export function createRecipeModalWindow(recipe) {
  const {
    name: recipeName,
    cuisine,
    difficulty,
    image,
    ingredients,
    instructions,
    cookTimeMinutes,
    mealType,
    prepTimeMinutes,
    servings,
    caloriesPerServing,
  } = recipe;
  return `
   <h3 class="recipe-modal-title">${recipeName}</h3>
<div class="image-ingredients-wrapper">
  <img
    class="recipe-modal-image"
    src="${image}"
    alt="${recipeName}"
  />
  <div class="recipe-modal-ingredients-list">
    ${ingredients
      .map(
        ingredient => `
    <p class="recipe-modal-ingredients-list-item">${ingredient}</p>
    `
      )
      .join('')}
  </div>
</div>
<div class="description-wrapper">
  <div class="description-first-box">
    <p class="recipe-modal-cuisine">Cuisine: ${cuisine}</p>
  </div>
  <div class="recipe-modal-cooking-time">
    <div class="recipe-cooking-time-icon">
      <svg width="24" height="24">
        <use href="./img/icons.svg#icon-timer"></use>
      </svg>
    </div>
    <p class="recipe-modal-cooking-time-text">
      Cooking time ${cookTimeMinutes} minutes
    </p>
  </div>
  <div class="description-second-box">
    <p class="recipe-modal-instructions-title">Instructions</p>
    <p class="recipe-modal-instructions">${instructions.join(' ')}</p>
  </div>
</div>
  `;
}

export const markupHeroRecipesSliders = data => {
  const markup = data
    .map(
      recipe =>
        `<div class="hero-recipes-swiper-slide">
  <div class="hero-slide-left-container">
    <div class="hero-random-recipe-mark">
  <img
    class="hero-random-recipe-mark-img"
    src="../img/hero/recipe-mark@1x.png"
    srcset="
      ../img/hero/recipe-mark@1x.png 1x,
      ../img/hero/recipe-mark@2x.png 2x
    "
  />
  <p class="hero-random-recipe-mark-text">Hot Recipes</p>
</div>
    <h3 class="hero-random-recipe-title">${recipe.name}</h3>
    <p class="hero-random-recipe-desc">
      Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
      tempor incididunt
    </p>
    <div class="hero-random-recipe-info-wrapper">
      <div class="hero-random-recipe-info">
        <div class="hero-random-recipe-cooking-time-icon">
          <svg width="24" height="24">
            <use href="./img/icons.svg#icon-timer"></use>
          </svg>
        </div>
        <p class="hero-random-recipe-cooking-time-text">
          ${recipe.cookTimeMinutes} Minutes
        </p>
      </div>
      <div class="hero-random-recipe-info">
        <div class="hero-random-recipe-meal-type-icon">
          <svg width="24" height="24">
            <use href="./img/icons.svg#icon-forkKnife"></use>
          </svg>
        </div>
        <p class="hero-random-recipe-meal-type-text">
          ${recipe.mealType.join(', ')}
        </p>
      </div>
    </div>
    <button class="hero-random-recipe-modal-btn" type="button" data-id="${
      recipe.id
    }">View Recipe</button>
  </div>
  <img class="hero-slide-img" src="${recipe.image}" />
</div>`
    )
    .join('');
  return markup;
};
