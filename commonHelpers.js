import{i as n,a as g,S as y}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();n.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});const a={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadmore:document.querySelector(".loadmore-button")};function p(r){return r.map(e=>`<li class="card">
            <a href="${e.largeImageURL}" class="big gallery-link">
              <img
                src="${e.previewURL}"
                alt="${e.tags}"
                title="${e.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${e.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${e.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${e.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${e.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}function d(r){switch(r){case"outdata":n.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":n.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:n.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}g.defaults.baseURL="https://pixabay.com/api";const c={key:"44806307-d12e03f2029e8f4cd22b76ce7",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function h(){const r=await g.get("/",{params:c});return console.log(r.data),r.data}a.searchForm.addEventListener("submit",b);let o,i;function b(r){r.preventDefault(),o=1,i=1;const e=r.target.searchtext.value.trim();if(!e){d("outdata");return}c.q=e,c.page=o,a.gallery.innerHTML="",a.loader.classList.add("loader"),h().then(l=>{if(a.loader.classList.remove("loader"),i=Math.ceil(l.totalHits/c.per_page),i===0){d("nodata");return}a.gallery.insertAdjacentHTML("beforeend",p(l.hits)),m.refresh(),i>o&&(o+=1,L())}).catch(l=>{a.loadmore.classList.remove("loader"),d(l)}).finally(a.searchForm.reset())}function L(){a.loadmore.addEventListener("click",()=>{if(a.loader.classList.add("loader"),c.page=o,h().then(r=>{a.loader.classList.remove("loader"),a.gallery.insertAdjacentHTML("beforeend",p(r.hits)),m.refresh()}).catch(r=>{a.loadmore.classList.remove("loader"),d(r)}),i===o){console.log("vse");return}else o+=1})}const m=new y(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});m.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
