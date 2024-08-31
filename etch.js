color="black";
let click=false;
document.addEventListener("DOMContentLoaded", function(){
 let container = document.querySelector(".container");

 document.querySelector("body").addEventListener("click", function(e){
if(e.target.tagname !="button")
    click =!click;
let draw=document.querySelector("#draw");
if(click){
    draw.innerHTML="now you can draw";
}
else{
    draw.innerHTML="now you cannot  draw";
}
 })
 
 container.style.gridTemplateColumns = "repeat(16,1fr)"
 container.style.gridTemplateRows = "repeat(16,1fr)"

 for(let i=0; i<256; i++){
    let div= document.createElement("div");
    div.addEventListener("mouseover",function(){
        colordiv.call(this);
    }
     
    )
    container.insertAdjacentElement("beforeend",div);
 }
})
function getsize(){
    let input=prompt("enter some value ");
    if(input == ""){
        message.innerHTML="please provide a number";
    }
    else if(input <0 || input>100){
        message.innerHTML="please provide a  valid number between 1 to 100"; 
    }
    else{
        message.innerHTML="Now you play";
    }
}

function colordiv(){
    if(click){
if(color ==="random"){
    this.style.backgroundColor=`hsl(${Math.random() * 360}, 100%, 50%)`
}
else{
    this.style.backgroundColor='black';
}
}
}
function setcolor(colorchoice){
 color = colorchoice;
}

function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div)=>div.style.backgroundColor="white");
}
