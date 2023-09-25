import "./main.scss";
import logo from "./matthieuGravy.svg";

document.querySelector("#app").innerHTML = `
  <div>

      <img src="${logo}" class="logo vanilla" alt="Matthieu Gravy" />
      <h1><span class="col-2">M</span>atthieu <span class="w-600"><span class="col-2">G</span>ravy</span></h1>

    <p>
    <span>Web dev junior</spans>| <span>JS enthousiast </spans>  | <span>Ubuntu lover </spans>  | <span>#BeCode trainee </spans>   
    <br />
    </p>
    <div class="button-box">
    <a class="button" href="https://www.linkedin.com/in/matthieugravy/" target="_blank">
    Linkedin
  </a>
  <a class="button " href="https://github.com/matthieuGravy" target="_blank">
   gitHub
</a>
</div>

  </div>
`;


