import{a as h,S as m,i as l}from"./assets/vendor-b520ba41.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function d(r){r.key="44735338-079c6790302f7dc185545e42d";try{return(await h.get("https://pixabay.com/api/",{params:r})).data}catch{}}function f({largeImageURL:r,webformatURL:o,tags:a,likes:n,views:e,comments:s,downloads:c}){return`
    <li class="image">
    <a href="${r}" class='js-link'> 
      <img src="${o}" alt="${a}"> 
    </a>
      <div class="'params">
      <div><h3>Likes</h3><p>${n}</p></div>
      <div><h3>Views</h3><p>${e}</p></div>
      <div><h3>Comments</h3><p>${s}</p></div>
      <div><h3>Downloads</h3><p>${c}</p></div>
      </div>
      </li>
      `}function u(r){return r.map(f).join("")}//! All logic for Web-Site
const t={form:document.querySelector(".search-form"),input:document.querySelector("input"),list:document.querySelector(".gallery"),load:document.querySelector(".loader"),btnMore:document.querySelector(".load-more-btn"),preLoader:document.querySelector(".pre-loader")},p=new m(".gallery a ",{captionDelay:250,captionsData:"alt"}),i={q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};//!======================================= SUBMIT ================
t.form.addEventListener("submit",g);async function g(r){r.preventDefault(),t.list.innerHTML="",t.btnMore.classList.add("hidden"),i.page=1;const o=t.input.value.trim();o.length!==0&&o!==""&&(t.load.classList.remove("hidden"),i.q=o,await d(i).then(a=>{if(a.total===0)t.load.classList.add("hidden"),t.input.value="",t.list.textContent="",l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",position:"topRight",class:"error"});else{const n=u(a.hits);t.list.innerHTML=n,i.maxPage=Math.ceil(a.totalHits/i.per_page),p.refresh(),t.input.value="",t.load.classList.add("hidden"),t.btnMore.classList.remove("hidden")}}).catch(a=>console.error(a)))}//!======================================= LOAD-MORE ==========================
t.btnMore.addEventListener("click",y);async function y(){i.page+=1,t.preLoader.classList.remove("hidden"),t.btnMore.disabled=!0,await d(i).then(r=>{const o=u(r.hits);t.list.insertAdjacentHTML("beforeend",o),p.refresh(),i.page===i.maxPage?(t.btnMore.classList.add("hidden"),l.show({message:"We're sorry, but you've reached the end of search results",backgroundColor:"#EF4040",messageColor:"white",position:"topRight",class:"error"})):(t.btnMore.disabled=!1,t.preLoader.classList.add("hidden"));const e=document.querySelector(".image").getBoundingClientRect().height;window.scrollBy({top:e*2.5,behavior:"smooth"})}).catch(r=>console.error(r))}
//# sourceMappingURL=commonHelpers.js.map
