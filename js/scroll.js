let shad = () =>{
  let nav = document.getElementById("navu");
  let img = document.getElementsByClassName("vst")[0];
  let mybutton = document.getElementById("myBtn");
  let Darkbutton = document.getElementById("drk");

  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    nav.style.boxShadow = "rgba(0, 0, 0, 0.62) 0px 9px 19px -19px";
    nav.style.transition = "all 0.5s ease-in-out";
    img.classList.add("active_img");

  } else if(document.body.scrollTop < 350 || document.documentElement.scrollTop < 350) {
    nav.style.boxShadow = "";
    img.classList.remove("active_img");

  } 

  let skl = document.getElementById("skillz");
    let a= document.getElementsByClassName("skl")[0];
    let b= document.getElementById("navu");

    // console.log(a);
  if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
    a.classList.add("active");
  } else if(document.body.scrollTop < 1450 || document.documentElement.scrollTop < 1450) {
    a.classList.remove("active");

  } 

  if (document.body.scrollTop > 3512 || document.documentElement.scrollTop > 3512) {
    b.classList.add("dsp");
  } else if(document.body.scrollTop < 3512 || document.documentElement.scrollTop < 3512) {
    b.classList.remove("dsp");
  } 



 
    if (document.body.scrollTop > 3520 || document.documentElement.scrollTop > 3520) {
      mybutton.style.display = "block";
      Darkbutton.style.display = "none"
    } else {
      mybutton.style.display = "none";
      Darkbutton.style.display = "block"

    }



}

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


let hght = () =>{
  let a = document.getElementsByClassName("main1")[0];
  a.classList.remove("temp");
}

setTimeout(hght, 3000);

let hght2 = () =>{
  document.getElementById("body_bg").style.overflowY="visible";
}

setTimeout(hght2, 4500);


            //Get the button

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//    console.log("nope");

//   } else {
//    luxy.init();
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes