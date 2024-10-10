let slide=document.querySelectorAll(".brand");
let cards=document.querySelectorAll(".card");

let c=0;

slide.forEach(function(slides,index){
  slides.style.left=`${index*100}%`
})

function myfun(){
  slide.forEach(function(curVal){
    curVal.style.transform=`translate(-${c*100}%)`
  })
}

setInterval(function(){
  c++;
  if(c==slide.length){
    c=0;
  }
  myfun();
}, 2000)

cards.forEach(function(card){
  card.addEventListener("click",function(){
    window.open("https://www.wakefit.co/","_blank")
  })
})
