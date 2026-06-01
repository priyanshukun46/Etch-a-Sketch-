let input = prompt("number of boxes : ");
let app = document.querySelector(".app");
const z = input*input;
const w = 500 / input;
const h = 500 / input;


for (let i = 0; i < z; i++){
  let div = document.createElement("div");
  div.style.border = "1px solid black";
  div.style.width = `${w}px`;
  div.style.height = `${h}px`;
  div.className = "innerbox";
  app.appendChild(div);
  
}