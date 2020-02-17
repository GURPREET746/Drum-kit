//sound using click
var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var k=this.innerHTML;
     sound(k);
     buttonanim(k)
     });
}

// sound using keywords

document.addEventListener("keydown",function(event){
  sound(event.key);
  buttonanim(event.key)
})
function sound(key){
  switch (key) {
    case "w":
        var tom1=new Audio('tom-1.mp3');
        tom1.play();
    break;

    case "a":
       var kick=new Audio('kick-bass.mp3');
       kick.play();
    break;
    case "s":
       var tom2=new Audio('tom-2.mp3');
       tom2.play();
    break;
    case "d":
       var crash=new Audio('crash.mp3');
       crash.play();
    break;
    case "j":
       var tom3=new Audio('tom-3.mp3');
       tom3.play();
    break;
    case "k":
       var snare=new Audio('snare.mp3');
       snare.play();
    break;
    case "l":
       var tom4=new Audio('tom-4.mp3');
       tom4.play();
    break;

  }
}
function buttonanim(but){
  var activebutton=document.querySelector("."+but);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
