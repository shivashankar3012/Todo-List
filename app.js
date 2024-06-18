let ipt = document.querySelector("input");
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click",function(e){
  let list = document.createElement("li");
  list.innerText = ipt.value;
  let button = document.createElement("button");
  button.innerText = "Delete";
  button.classList.add("button");
  list.appendChild(button);
  ul.appendChild(list);
  ipt.value = "";
});
// let buttons = document.querySelectorAll(".button");
// for(let i =0 ;i<buttons.length;i++){
//   buttons[i].addEventListener("click", function(e){
//     e.preventDefault();
//     this.parentElement.remove();
//   });
// }
ul.addEventListener("click",function(e){
  if(e.target.nodeName == "BUTTON"){
    console.log("delete");
    e.target.parentElement.remove();
  }else{
    console.log("dont delete");
  }
  
})