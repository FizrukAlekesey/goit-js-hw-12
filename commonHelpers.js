import{S as y,i as n,a as g}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const a={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),loadmore:document.querySelector(".loadmore-button")},f=new y(".gallery a",{captionDelay:250,overlayOpacity:.8,scrollZoom:!1});f.on("show.simplelightbox",function(){});n.settings({timeout:2500,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",titleSize:25,messageSize:25,backgroundColor:"rgba(255, 182, 66, 0.8)"});function b(e){return e.map(t=>`<li class="card">
            <a href="${t.largeImageURL}" class="big gallery-link">
              <img
                src="${t.previewURL}"
                alt="${t.tags}"
                title="${t.tags}"
                class="card-img"
            /></a>
            <ul class="card-title">
              <li class="card-text-blok">
                <h2 class="card-title-text">Likes</h2>
                <p class="card-text-value">${t.likes}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Views</h2>
                <p class="card-text-value">${t.views}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Comments</h2>
                <p class="card-text-value">${t.comments}</p>
              </li>
              <li class="card-text-blok">
                <h2 class="card-title-text">Downloads</h2>
                <p class="card-text-value">${t.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}function d(e){switch(e){case"outdata":n.warning({title:"Error",message:"Введіть данні для пошуку!"});break;case"nodata":n.warning({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});break;default:console.log(e),n.error({title:"Error",message:"Щось пішло не так. Ми працюемо над вирішенням питання!"});break}}function L(){const e=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({left:0,top:Math.ceil(e*2),behavior:"smooth"})}function p(e){a.loader.classList.remove("loader"),a.gallery.insertAdjacentHTML("beforeend",b(e)),f.refresh()}g.defaults.baseURL="https://pixabay.com/api";const c={key:"44806307-d12e03f2029e8f4cd22b76ce7",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1};async function h(){return(await g.get("/",{params:c})).data}a.searchForm.addEventListener("submit",x);let s,i;function x(e){e.preventDefault(),s=1,i=1;const t=e.target.searchtext.value.trim().toLowerCase();if(!t){d("outdata");return}c.q=t,c.page=s,a.gallery.innerHTML="",a.loader.classList.add("loader"),h().then(l=>{if(i=Math.ceil(l.totalHits/c.per_page),i===0){d("nodata");return}p(l.hits),i>s&&(s+=1,v())}).catch(l=>{a.loadmore.classList.remove("loader"),d(l)}).finally(a.searchForm.reset())}function v(){a.loadmore.style.setProperty("--lmb-dispay","block"),a.loadmore.addEventListener("click",()=>{if(a.loader.classList.add("loader"),c.page=s,h().then(e=>{p(e.hits),L()}).catch(e=>{a.loader.classList.remove("loader"),d(e)}),i===s){a.loadmore.style.setProperty("--lmb-dispay","none");return}else s+=1})}
//# sourceMappingURL=commonHelpers.js.map
