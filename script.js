let div1= document.querySelector(".div1");
let div2= document.querySelector(".div2");
let div3= document.querySelector(".div3");
let div4= document.querySelector(".div4");
let div5= document.querySelector(".div5");
let h1= document.querySelector(".h1-1");
let h2= document.querySelector(".h1-2");
let h3= document.querySelector(".h1-3");
let h4= document.querySelector(".h1-4");
let h5= document.querySelector(".h1-5");

div1.addEventListener("mouseover",()=>{
    div1.style.width="55%"
    div2.style.width="10%"
    div3.style.width="10%"
    div4.style.width="10%"
    div5.style.width="10%"

    h1.style.display="block"
    h2.style.display="none"
    h3.style.display="none"
    h4.style.display="none"
    h5.style.display="none"

})
div2.addEventListener("mouseover",()=>{
    div1.style.width="10%"
    div2.style.width="55%"
    div3.style.width="10%"
    div4.style.width="10%"
    div5.style.width="10%"

    h1.style.display="none"
    h2.style.display="block"
    h3.style.display="none"
    h4.style.display="none"
    h5.style.display="none"

})
div3.addEventListener("mouseover",()=>{
    div1.style.width="10%"
    div2.style.width="10%"
    div3.style.width="55%"
    div4.style.width="10%"
    div5.style.width="10%"

    h1.style.display="none"
    h2.style.display="none"
    h3.style.display="block"
    h4.style.display="none"
    h5.style.display="none"

})
div4.addEventListener("mouseover",()=>{
    div1.style.width="10%"
    div2.style.width="10%"
    div3.style.width="10%"
    div4.style.width="55%"
    div5.style.width="10%"

    h1.style.display="none"
    h2.style.display="none"
    h3.style.display="none"
    h4.style.display="block"
    h5.style.display="none"

})
div5.addEventListener("mouseover",()=>{
    div1.style.width="10%"
    div2.style.width="10%"
    div3.style.width="10%"
    div4.style.width="10%"
    div5.style.width="55%"

    h1.style.display="none"
    h2.style.display="none"
    h3.style.display="none"
    h4.style.display="none"
    h5.style.display="block"

})