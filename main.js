import "./main.scss";
import logo from "./matthieuGravy.svg";

document.querySelector("#app").innerHTML = `
  <section>
    <figure>
      <img src="${logo}" class="logo vanilla" alt="Matthieu Gravy" />
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
