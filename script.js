let smile = document.querySelector(".smile");
smile.addEventListener("click",function(dels){
    smile.style.backgroundColor = "red";
})
smile.addEventListener("dblclick",function(){
    smile.style.backgroundColor = "yellow";
});




const span = document.querySelector(".appear");
const text = span.textContent;  
span.textContent = "";         
let i = 0;

function showLetter() {
  if(i < text.length){
    span.textContent += text[i];  
    i++;
    span.classList.add("show")
    setTimeout(showLetter, 500); 
  }
}
showLetter();
const popup = document.getElementById("popup");


setTimeout(() => {
  popup.classList.add("show");

  
  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);

}, 5000);


AOS.init({
  
  startEvent: "DOMContentLoaded"
});

