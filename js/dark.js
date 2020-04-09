let i=true;
console.log(document.getElementById("hey").href);

let dark = () =>{
  console.log(document.getElementById("body_bg"));

  


  if(i==true)  
  {
    i=false;
    document.getElementById("hey").href = "../css/darkcol.css";
    document.getElementById("shpd").src = "../shop2.png";
    document.getElementById('y').textContent='🌙';
    document.getElementById("navu").classList.remove("navbar-light");
    document.getElementById("navu").classList.add("navbar-dark");


    // document.getElementById("body_bg").style.backgroundColor = "#121212";
    // document.getElementById("body_bg").style.color = "white";
    

    // let boxes = document.getElementsByClassName("card");
    // console.log(boxes);
    
    // for(let i=0 ; i<5 ; i++){
    //     boxes[i].style.backgroundColor = "#272727"; 
    //     document.getElementsByClassName("card-body")[i].style.backgroundColor = "#272727";
    //     document.getElementsByClassName("card-body")[i].style.backgroundColor = "#272727";
    //     document.getElementsByClassName("role")[i].style.backgroundColor = "#272727";

    //     boxes[i].style.boxShadow = "0px 0px 24px -5px rgb(0, 0, 0)"


    console.log(document.getElementById("hey").href);

    }
  else if(i == false){
    // document.getElementById("body_bg").style.backgroundColor = "#F1F1F1";
    // document.getElementById("body_bg").style.color = "black";
    i=true;
    document.getElementById("hey").href = "../css/colors.css";
    document.getElementById("shpd").src = "../shop.png";
    document.getElementById('y').textContent='☀️';
    document.getElementById("navu").classList.remove("navbar-dark");
    document.getElementById("navu").classList.add("navbar-light");



  }
  return i;
}