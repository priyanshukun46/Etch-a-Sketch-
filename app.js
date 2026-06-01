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
  div.id = `id${i}`;
  app.appendChild(div);
  
}

const divs = document.querySelectorAll(".innerbox");

divs.forEach(div => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "black";
  });
});
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  divs.forEach(div => {
    div.style.backgroundColor = "";
  })
    

});