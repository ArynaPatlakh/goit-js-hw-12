import{a as c,S as l,i as d}from"./assets/vendor-b520ba41.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function u(i){c.defaults.baseURL="https://pixabay.com/api/";const r="44735338-079c6790302f7dc185545e42d";try{return(await c.get("https://pixabay.com/api/",{params:{key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15}})).data}catch{}}function p({largeImageURL:i,webformatURL:r,tags:o,likes:a,views:e,comments:t,downloads:n}){return`
    <li class="image">
    <a href="${i}" class='js-link'> 
      <img src="${r}" alt="${o}"> 
    </a>
      <div class="'params">
      <div><h3>Likes</h3><p>${a}</p></div>
      <div><h3>Views</h3><p>${e}</p></div>
      <div><h3>Comments</h3><p>${t}</p></div>
      <div><h3>Downloads</h3><p>${n}</p></div>
      </div>
      </li>
      `}function m(i){return i.map(p).join("")}//! All logic for Web-Site
const s={form:document.querySelector(".search-form"),input:document.querySelector("input"),list:document.querySelector(".gallery"),load:document.querySelector(".loader"),btnMore:document.querySelector(".load-more-btn"),preLoader:document.querySelector(".pre-loader")},f=new l(".gallery a ",{captionDelay:250,captionsData:"alt"});s.form.addEventListener("submit",h);async function h(i){i.preventDefault(),s.list.innerHTML="";const r=s.input.value.trim();r.length!==0&&r!==""&&(s.load.classList.remove("hidden"),await u(r).then(o=>{if(console.log(o),o.total===0)s.load.classList.add("hidden"),s.input.value="",s.list.textContent="",d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",position:"topRight",class:"error"});else{const a=m(o.hits);s.list.innerHTML=a,f.refresh(),s.input.value="",s.load.classList.add("hidden"),s.btnMore.classList.remove("hidden")}}).catch(o=>console.error(o)))}
//# sourceMappingURL=commonHelpers.js.map
