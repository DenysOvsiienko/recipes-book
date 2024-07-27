import{a as P,i as l,S as x,A as O}from"./assets/vendor-9805b4a6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const w=P.create({baseURL:"https://dummyjson.com"});async function $(i,e){const t={limit:i,skip:e};return(await w.get("/recipes",{params:t})).data}async function k(i){return(await w.get(`/recipes/${i}`)).data}async function q(i,e,t){const r={q:i,limit:e,skip:t};return(await w.get("/recipes/search",{params:r})).data}async function A(i,e,t){const r={limit:e,skip:t};return(await w.get(`/recipes/meal-type/${i}`,{params:r})).data}function h(i){return i.map(({id:e,name:t,image:r,cookTimeMinutes:s,mealType:c})=>`
      <li class="recipes-list-item" data-id="${e}">
  <img
    class="recipe-list-item-image"
    src="${r}"
    alt="${t}"
    width="368px"
    loading="lazy"
  />
  <h3 class="recipe-list-item-title">${t}</h3>
  <div class="recipe-info-wrapper">
    <div class="recipe-cooking-time">
      <p class="recipe-cooking-time-icon">&#9200;</p>
      <p class="recipe-cooking-time-text">${s} Minutes</p>
    </div>
    <div class="recipe-meal-type">
      <p class="recipe-meal-type-icon">&#127860;</p>
      <p class="recipe-meal-type-text">${c.join(", ")}</p>
    </div>
  </div>
</li>
        `).join("")}function j(i){const{name:e,cuisine:t,difficulty:r,image:s,ingredients:c,instructions:p,cookTimeMinutes:v,mealType:M,prepTimeMinutes:R,servings:m,caloriesPerServing:F}=i;return`
   <h3 class="recipe-modal-title">${e}</h3>
<div class="image-ingredients-wrapper">
  <img
    class="recipe-modal-image"
    src="${s}"
    alt="${e}"
  />
  <div class="recipe-modal-ingredients-list">
    ${c.map(I=>`
    <p class="recipe-modal-ingredients-list-item">${I}</p>
    `).join("")}
  </div>
</div>
<div class="description-wrapper">
  <div class="description-first-box">
    <p class="recipe-modal-cuisine">Cuisine: ${t}</p>
  </div>
  <div class="recipe-modal-cooking-time">
    <p class="recipe-cooking-time-icon">
          &#9200;
        </p>
    <p class="recipe-modal-cooking-time-text">
      Cooking time ${v} minutes
    </p>
  </div>
  <div class="description-second-box">
    <p class="recipe-modal-instructions-title">Instructions</p>
    <p class="recipe-modal-instructions">${p.join(" ")}</p>
  </div>
</div>
  `}const B=i=>i.map(t=>`<div class="hero-recipes-swiper-slide">
  <div class="hero-slide-left-container">
    <div class="hero-random-recipe-mark">
  <p>&#128220;</p>
  <p class="hero-random-recipe-mark-text">Hot Recipes</p>
</div>
    <h3 class="hero-random-recipe-title">${t.name}</h3>
    <p class="hero-random-recipe-desc">
      Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
      tempor incididunt
    </p>
    <div class="hero-random-recipe-info-wrapper">
      <div class="hero-random-recipe-info">
        <p class="recipe-cooking-time-icon">
          &#9200;
        </p>
        <p class="hero-random-recipe-cooking-time-text">
          ${t.cookTimeMinutes} Minutes
        </p>
      </div>
      <div class="hero-random-recipe-info">
        <p class="recipe-meal-type-icon">
        &#127860;
        </p>
        <p class="hero-random-recipe-meal-type-text">
          ${t.mealType.join(", ")}
        </p>
      </div>
    </div>
    <button class="hero-random-recipe-modal-btn" type="button" data-id="${t.id}">View Recipe</button>
  </div>
  <img class="hero-slide-img" src="${t.image}" />
</div>`).join("");document.addEventListener("DOMContentLoaded",()=>{C()});const N=document.querySelector(".hero-recipes-swiper-wrapper"),u=document.querySelector(".recipe-modal-backdrop"),b=document.querySelector(".recipe-modal-content"),C=async()=>{const t=(()=>{const r=[];for(;r.length<6;){const s=Math.floor(Math.random()*50)+1;r.includes(s)||r.push(s)}return r})().map(r=>k(r));try{const r=await Promise.all(t),s=B(r);N.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".hero-random-recipe-modal-btn").forEach(p=>p.addEventListener("click",async v=>{b.innerHTML="";const M=await k(v.target.dataset.id),R=j(M);b.insertAdjacentHTML("afterbegin",R),u.classList.remove("is-closed"),u.addEventListener("click",m=>{(m.target.classList.contains("recipe-modal-backdrop")||m.target.classList.contains("recipe-modal-close-btn-icon")||m.target.classList.contains("recipe-modal-close-btn")||m.target.classList.contains("recipe-modal-close-btn-icon"))&&(u.classList.add("is-closed"),u.removeEventListener)}),document.addEventListener("keyup",m=>{m.key==="Escape"&&(u.classList.add("is-closed"),u.removeEventListener)}),console.log(v.target.dataset.id)}))}catch(r){l.error({message:"Error",position:"topRight"}),console.log(r)}finally{new x(".hero-recipes-swiper",{modules:[O],loop:!0,touch:!0,direction:"horizontal",speed:2e3,spaceBetween:100,slidesPerView:1,wrapperClass:"hero-recipes-swiper-wrapper",slideClass:"hero-recipes-swiper-slide",keyboard:{enabled:!0,onlyInViewport:!0},autoplay:{delay:5e3,pauseOnMouseEnter:!0}})}},E=document.querySelector(".recipes-search-form"),V=E.elements.recipesSearchInput,T=document.querySelector(".loader"),d=document.querySelector(".recipes-list"),a=document.querySelector(".recipes-list-load-more-btn"),y=document.querySelector(".recipe-modal-backdrop"),S=document.querySelector(".recipe-modal-content");let f="",H="",L="";const o=9;let n=1,g=0;const W=document.querySelectorAll(".category-list-item");W.forEach(i=>{i.addEventListener("click",async e=>{if(!e.target.closest("li.category-list-item"))return;const t=e.target.closest("li.category-list-item").dataset.mealtype;H=t;try{n=1,f="mealType",a.classList.remove("visually-hidden");const r=await A(t,o),s=h(r.recipes);d.innerHTML="",d.insertAdjacentHTML("beforeend",s),document.querySelector(".recipes-search-form").scrollIntoView(),r.total>o?a.classList.remove("visually-hidden"):a.classList.add("visually-hidden")}catch(r){l.error({message:"Error",position:"topRight"}),console.log(r)}})});async function z(){try{f="allRecipes";const i=await $(o),e=h(i.recipes);d.insertAdjacentHTML("beforeend",e),i.total>o&&a.classList.remove("visually-hidden")}catch(i){l.error({message:"Error",position:"topRight"}),console.log(i)}}z();E.addEventListener("submit",async i=>{if(i.preventDefault(),L=V.value.trim(),!L){l.warning({position:"topRight",message:"Please fill query field"});return}n=1,d.innerHTML="",T.classList.remove("visually-hidden");try{f="querySearch";const e=await q(L,o);if(!e.total){l.warning({position:"topRight",message:"No results"}),a.classList.add("visually-hidden");return}const t=h(e.recipes);d.insertAdjacentHTML("beforeend",t),e.total>9?a.classList.remove("visually-hidden"):a.classList.add("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}finally{T.classList.add("visually-hidden"),E.reset()}});a.addEventListener("click",async i=>{if(f==="allRecipes"){try{const e=await $(o,n*o),t=h(e.recipes);g=Math.ceil(e.total/o),d.insertAdjacentHTML("beforeend",t),n+=1,e.total>o&&a.classList.remove("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}n===g&&a.classList.add("visually-hidden")}else if(f==="querySearch"){try{const e=await q(L,o,n*o),t=h(e.recipes);g=Math.ceil(e.total/o),d.insertAdjacentHTML("beforeend",t),n+=1,e.total>o&&a.classList.remove("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}n===g&&a.classList.add("visually-hidden")}else if(f==="mealType"){try{const e=await A(H,o,n*o),t=h(e.recipes);g=Math.ceil(e.total/o),d.insertAdjacentHTML("beforeend",t),n+=1,e.total>o&&a.classList.remove("visually-hidden")}catch(e){l.error({message:"Error",position:"topRight"}),console.log(e)}n===g&&a.classList.add("visually-hidden")}});document.addEventListener("click",D);async function D(i){if(!i.target.closest("li.recipes-list-item"))return;S.innerHTML="";const e=i.target.closest("li.recipes-list-item").dataset.id,t=await k(e),r=j(t);S.insertAdjacentHTML("afterbegin",r),y.classList.remove("is-closed"),y.addEventListener("click",s=>{(s.target.classList.contains("recipe-modal-backdrop")||s.target.closest("BUTTON").classList.contains("recipe-modal-close-btn"))&&(y.classList.add("is-closed"),y.removeEventListener)}),document.addEventListener("keyup",s=>{s.key==="Escape"&&(y.classList.add("is-closed"),y.removeEventListener)})}
//# sourceMappingURL=commonHelpers.js.map
