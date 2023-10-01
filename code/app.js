
const section = document.querySelector(".griddd");


// window.onscroll = function(){
//     let value = scrollY;
//     console.log(value)
//    if(screenY = 1000){
//     // section.style.backgroundColor = "blue"
//     console.log("it matches")
// } 
// }

window.addEventListener("scroll", () => {
    // (window.scrollY)
const scrollchange = scrollY;
console.log(scrollchange);



if(window.matchMedia("(min-width: 962px)").matches){
if(scrollchange >= 5024){

section.style.backgroundColor = "gray";
section.style.transition = ".4s"
}
if(scrollchange < 5024){

section.style.backgroundColor = "transparent";
section.style.transition = ".4s"
}
}
if(window.matchMedia("(max-width: 962px)").matches){
if(scrollchange >= 5604){

section.style.backgroundColor = "gray";
section.style.transition = ".4s"
}
if(scrollchange < 5604){

section.style.backgroundColor = "transparent";
section.style.transition = ".4s"
}
}

// if(scrollchange < 5616){

// section.style.backgroundColor = "black";
// section.style.transition = ".4s"
// }
})
