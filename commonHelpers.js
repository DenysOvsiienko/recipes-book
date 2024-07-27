import{a as I,i as l,S as P,A as O}from"./assets/vendor-9805b4a6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}})();const w=I.create({baseURL:"https://dummyjson.com"});async function $(t,e){const i={limit:t,skip:e};return(await w.get("/recipes",{params:i})).data}async function k(t){return(await w.get(`/recipes/${t}`)).data}async function q(t,e,i){const r={q:t,limit:e,skip:i};return(await w.get("/recipes/search",{params:r})).data}async function A(t,e,i){const r={limit:e,skip:i};return(await w.get(`/recipes/meal-type/${t}`,{params:r})).data}function v(t){return t.map(({id:e,name:i,image:r,cookTimeMinutes:s,mealType:c})=>`
      <li class="recipes-list-item" data-id="${e}">
              <img
                class="recipe-list-item-image"
                src="${r}"
                alt="${i}"
                width="368px"
                loading="lazy"
              />
              <h3 class="recipe-list-item-title">${i}</h3>
              <div class="recipe-info-wrapper">
                <div class="recipe-cooking-time">
                  <div class="recipe-cooking-time-icon">
                    <svg width="24" height="24">
                      <use href="./img/icons.svg#icon-timer"></use>
                    </svg>
                  </div>
                  <p class="recipe-cooking-time-text">${s} Minutes</p>
                </div>
                <div class="recipe-meal-type">
                  <div class="recipe-meal-type-icon">
                    <svg width="24" height="24">
                      <use href="./img/icons.svg#icon-forkKnife"></use>
                    </svg>
                  </div>
                  <p class="recipe-meal-type-text">${c.join(", ")}</p>
                </div>
              </div>
            </li>
        `).join("")}function j(t){const{name:e,cuisine:i,difficulty:r,image:s,ingredients:c,instructions:p,cookTimeMinutes:f,mealType:M,prepTimeMinutes:R,servings:m,caloriesPerServing:K}=t;return`
   <h3 class="recipe-modal-title">${e}</h3>
<div class="image-ingredients-wrapper">
  <img
    class="recipe-modal-image"
    src="${s}"
    alt="${e}"
  />
  <div class="recipe-modal-ingredients-list">
    ${c.map(H=>`
    <p class="recipe-modal-ingredients-list-item">${H}</p>
    `).join("")}
  </div>
</div>
<div class="description-wrapper">
  <div class="description-first-box">
    <p class="recipe-modal-cuisine">Cuisine: ${i}</p>
  </div>
  <div class="recipe-modal-cooking-time">
    <div class="recipe-cooking-time-icon">
      <svg width="24" height="24">
        <use href="./img/icons.svg#icon-timer"></use>
      </svg>
    </div>
    <p class="recipe-modal-cooking-time-text">
      Cooking time ${f} minutes
    </p>
  </div>
  <div class="description-second-box">
    <p class="recipe-modal-instructions-title">Instructions</p>
    <p class="recipe-modal-instructions">${p.join(" ")}</p>
  </div>
</div>
  `}const B=t=>t.map(i=>`<div class="hero-recipes-swiper-slide">
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
    <h3 class="hero-random-recipe-title">${i.name}</h3>
    <p class="hero-random-recipe-desc">
      Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
      tempor incididunt
    </p>
    <div class="hero-random-recipe-info-wrapper">
      <div class="hero-random-recipe-info">
        <div class="recipe-cooking-time-icon">
          <svg width="24" height="24">
            <use href="./img/icons.svg#icon-timer"></use>
          </svg>
        </div>
        <p class="hero-random-recipe-cooking-time-text">
          ${i.cookTimeMinutes} Minutes
        </p>
      </div>
      <div class="hero-random-recipe-info">
        <div class="recipe-meal-type-icon">
          <svg width="24" height="24">
            <use href="./img/icons.svg#icon-forkKnife"></use>
          </svg>
        </div>
        <p class="hero-random-recipe-meal-type-text">
          ${i.mealType.join(", ")}
        </p>
      </div>
    </div>
    <button class="hero-random-recipe-modal-btn" type="button" data-id="${i.id}">View Recipe</button>
  </div>
  <img class="hero-slide-img" src="${i.image}" />
</div>`).join("");document.addEventListener("DOMContentLoaded",()=>{C()});const N=document.querySelector(".hero-recipes-swiper-wrapper"),u=document.querySelector(".recipe-modal-backdrop"),b=document.querySelector(".recipe-modal-content"),C=async()=>{const i=(()=>{const r=[];for(;r.length<6;){const s=Math.floor(Math.random()*50)+1;r.includes(s)||r.push(s)}return r})().map(r=>k(r));try{const r=await Promise.all(i),s=B(r);N.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".hero-random-recipe-modal-btn").forEach(p=>p.addEventListener("click",async f=>{b.innerHTML="";const M=await k(f.target.dataset.id),R=j(M);b.insertAdjacentHTML("afterbegin",R),u.classList.remove("is-closed"),u.addEventListener("click",m=>{(m.target.classList.contains("recipe-modal-backdrop")||m.target.classList.contains("recipe-modal-close-btn-icon")||m.target.classList.contains("recipe-modal-close-btn")||m.target.classList.contains("recipe-modal-close-btn-icon"))&&(u.classList.add("is-closed"),u.removeEventListener)}),document.addEventListener("keyup",m=>{m.key==="Escape"&&(u.classList.add("is-closed"),u.removeEventListener)}),console.log(f.target.dataset.id)}))}catch(r){l.error({message:"Error",position:"topRight"}),console.log(r)}finally{new P(".hero-recipes-swiper",{modules:[O],loop:!0,touch:!0,direction:"horizontal",speed:2e3,spaceBetween:100,slidesPerView:1,wrapperClass:"hero-recipes-swiper-wrapper",slideClass:"hero-recipes-swiper-slide",keyboard:{enabled:!0,onlyInViewport:!0},autoplay:{delay:5e3,pauseOnMouseEnter:!0}})}},E=document.querySelector(".recipes-search-form"),V=E.elements.recipesSearchInput,T=document.querySelector(".loader"),d=document.querySelector(".recipes-list"),a=document.querySelector(".recipes-list-load-more-btn"),g=document.querySelector(".recipe-modal-backdrop"),S=document.querySelector(".recipe-modal-content");let y="",x="",L="";const o=9;let n=1,h=0;const W=document.querySelectorAll(".category-list-item");W.forEach(t=>{t.addEventListener("click",async e=>{if(!e.target.closest("li.category-list-item"))return;const i=e.target.closest("li.category-list-item").dataset.mealtype;x=i;try{n=1,y="mealType",a.classList.remove("visually-hidden");const r=await A(i,o),s=v(r.recipes);d.innerHTML="",d.insertAdjacentHTML("beforeend",s),document.querySelector(".recipes-search-form").scrollIntoView(),r.total>o?a.classList.remove("visually-hidden"):a.classList.add("visually-hidden")}catch(r){l.error({message:"Error",position:"topRight"}),console.log(r)}})});async function z(){try{y="allRecipes";const t=await $(o),e=v(t.recipes);d.insertAdjacentHTML("beforeend",e),t.total>o&&a.classList.remove("visually-hidden")}catch(t){l.error({message:"Error",position:"topRight"}),console.log(t)}}z();E.addEventListener("submit",async t=>{if(t.preventDefault(),L=V.value.trim(),!L){l.warning({position:"topRight",message:"Please fill query field"});return}n=1,d.innerHTML="",T.classList.remove("visually-hidden");try{y="querySearch";const e=await q(L,o);if(!e.total){l.warning({position:"topRight",message:"No results"}),a.classList.add("visually-hidden");return}const i=v(e.recipes);d.insertAdjacentHTML("beforeend",i),e.total>9?a.classList.remove("visually-hidden"):a.classList.add("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}finally{T.classList.add("visually-hidden"),E.reset()}});a.addEventListener("click",async t=>{if(y==="allRecipes"){try{const e=await $(o,n*o),i=v(e.recipes);h=Math.ceil(e.total/o),d.insertAdjacentHTML("beforeend",i),n+=1,e.total>o&&a.classList.remove("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}n===h&&a.classList.add("visually-hidden")}else if(y==="querySearch"){try{const e=await q(L,o,n*o),i=v(e.recipes);h=Math.ceil(e.total/o),d.insertAdjacentHTML("beforeend",i),n+=1,e.total>o&&a.classList.remove("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}n===h&&a.classList.add("visually-hidden")}else if(y==="mealType"){try{const e=await A(x,o,n*o),i=v(e.recipes);h=Math.ceil(e.total/o),d.insertAdjacentHTML("beforeend",i),n+=1,e.total>o&&a.classList.remove("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}n===h&&a.classList.add("visually-hidden")}});document.addEventListener("click",D);async function D(t){if(!t.target.closest("li.recipes-list-item"))return;S.innerHTML="";const e=t.target.closest("li.recipes-list-item").dataset.id,i=await k(e),r=j(i);S.insertAdjacentHTML("afterbegin",r),g.classList.remove("is-closed"),g.addEventListener("click",s=>{(s.target.classList.contains("recipe-modal-backdrop")||s.target.closest("BUTTON").classList.contains("recipe-modal-close-btn"))&&(g.classList.add("is-closed"),g.removeEventListener)}),document.addEventListener("keyup",s=>{s.key==="Escape"&&(g.classList.add("is-closed"),g.removeEventListener)})}
//# sourceMappingURL=commonHelpers.js.map
