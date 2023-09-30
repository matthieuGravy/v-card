(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a="/v-card/assets/matthieuGravy-c38389c5.svg";document.querySelector("#app").innerHTML=`
  <section>
    <figure>
      <img src="${a}" class="logo vanilla" alt="Matthieu Gravy" />
      <h1><em class="col-2">M</em>atthieu <em class="w-600"><em class="col-2">G</em>ravy</em></h1>
    </figure>
    <article>
      <h2> Web developper Junior dynamique </h2>
      <p>brussel, Belgium</p>

      <div class="button-box">
        <a class="button" href="https://www.linkedin.com/in/matthieugravy/" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a class="button " href="https://github.com/matthieuGravy" target="_blank">
        <i class="fa-brands fa-github"></i>
        <a  class="button"  href ="https//pommepatate.be" target="_blank">
        <i class="fa-solid fa-globe"></i>
        <a/>
      </div>
    </article>
  </section>
`;
