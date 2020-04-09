let shad = () =>{
  let nav = document.getElementById("navu");
  let img = document.getElementsByClassName("vst")[0];
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

  if (document.body.scrollTop >3512 || document.documentElement.scrollTop >3512) {
    b.classList.add("dsp");
  } else if(document.body.scrollTop < 3512 || document.documentElement.scrollTop < 3512) {
    b.classList.remove("dsp");
  } 

}



let hght = () =>{
  // let a = document.getElementsByClassName("main1")[0];
  // a.classList.remove("temp");
  document.getElementById("body_bg").style.overflowY="visible";
}

setTimeout(hght, 4500);

