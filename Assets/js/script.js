let frame = document.getElementById("my_frame");
frame.addEventListener('scroll', changeBg());
var h = window.innerHeight;
console.log(h);
var temp1 = document.getElementById('sp1').offsetHeight;
let temp2 = document.getElementById('border').offsetHeight;
console.log(temp1,temp2);
let total_height = h-(temp1+temp2);
console.log(total_height);
frame.style.height = ((total_height) + "px");
function changeBg()
{
  var navbar = document.getElementById('border');
  var scrollValue = frame.scrollY;
  console.log(scrollValue);
  if(scrollValue < 70){
    navbar.classList.remove('bor');
  }
  else{
    navbar.classList.add('bor');
  }
  
}

function b1(){
    document.getElementById("btn-1").style.borderBottomColor = "#00a759";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b2(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "#00a759";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b3(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "#00a759";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b4(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "#00a759";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b5(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "#00a759";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b6(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "#00a759";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b7(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "#00a759";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b8(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "#00a759";
    document.getElementById("btn-9").style.borderBottomColor = "transparent";
}
function b9(){
    document.getElementById("btn-1").style.borderBottomColor = "transparent";
    document.getElementById("btn-2").style.borderBottomColor = "transparent";
    document.getElementById("btn-3").style.borderBottomColor = "transparent";
    document.getElementById("btn-4").style.borderBottomColor = "transparent";
    document.getElementById("btn-5").style.borderBottomColor = "transparent";
    document.getElementById("btn-6").style.borderBottomColor = "transparent";
    document.getElementById("btn-7").style.borderBottomColor = "transparent";
    document.getElementById("btn-8").style.borderBottomColor = "transparent";
    document.getElementById("btn-9").style.borderBottomColor = "#00a759";
}