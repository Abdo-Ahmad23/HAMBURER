
AOS.init();
// declaration
let moonIcon=document.getElementById("moonIcon");
let body=document.querySelector("body");
let toggleNavIcon=document.getElementById("toggleNavIcon");
let header=document.querySelector("header");
let btnLearnMore1=document.getElementById("btnLearnMore1");
let hiddenoptions=document.getElementById("hiddenoptions");
// header operations
moonIcon.addEventListener("click",()=>{

    if(moonIcon.innerHTML==`<i class="fa-solid fa-moon"></i>`){
        moonIcon.innerHTML=`<i class="fa-solid fa-sun text-warning"></i>`;
        body.classList.add("dark");
        body.classList.remove("blue");
        header.classList.add("dark");
        header.classList.remove("blue");
        console.log("dark");

    }
    else 
    {
        moonIcon.innerHTML=`<i class="fa-solid fa-moon"></i>`;
        body.classList.remove("dark");
        body.classList.add("blue");
        header.classList.remove("dark");
        header.classList.add("blue");
        console.log("blue");
    }


});
toggleNavIcon.addEventListener("click",()=>{
    if(toggleNavIcon.innerHTML==`<i class="navbar-toggler-icon text-white"></i>`)
    {
        toggleNavIcon.innerHTML=`<i class="fa-solid fa-xmark text-white"></i>`;
        toggleNavIcon.innerHTML=`<i class="navbar-toggler-icon text-white"></i>`;

    }
    else 
    {
        toggleNavIcon.innerHTML=`<i class="navbar-toggler-icon text-white"></i>`;
    }




});
function myfunction(){
    if(window.scrollY>=82)
    {
        header.classList.add("after100");
        console.log(window.scrollY)
    }
    else
    {
        header.classList.remove("after100");

    }
}
// second section operations
window.addEventListener("scroll",myfunction);
$(document).ready(function(){
    $("#btnLearnMore1").click(function(){
       if($("#btnLearnMore1").text()=="Learn More")
       {
        $("#btnLearnMore1").text("Learn Less");
       }
       else 
       {
        $("#btnLearnMore1").text("Learn More");
       }
      $("#Icon1").toggle(1000);
      $("#Icon2").toggle(1000);
      $("#Icon3").toggle(1000);
    });
  });
console.log(Math.sqrt(1000000000*100));
//   Third Section operation


