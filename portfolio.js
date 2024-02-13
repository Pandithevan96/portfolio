// windows.onscroll=()=>{
//     let header =document.querySelector("nav");
//     header.classList.toggle('sti',windows.screenY>100);
// };

const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
            
        }
        else{
            entry.target.classList.remove("show-items");
        }
        })
    });
    const scrollScale=document.querySelectorAll(".scroll-scale");
    scrollScale.forEach((el)=>observer.observe(el));

    const scrollBottom=document.querySelectorAll(".scroll-bottom");
    scrollBottom.forEach((el)=>observer.observe(el));

    const scrollLeft=document.querySelectorAll(".scroll-left");
    scrollLeft.forEach((el)=>observer.observe(el));

    const scrollRight=document.querySelectorAll(".scroll-right");
    scrollRight.forEach((el)=>observer.observe(el));

    const scrollFlipY=document.querySelectorAll(".scroll-flipy");
    scrollFlipY.forEach((el)=>observer.observe(el));

    const scrollFlipX=document.querySelectorAll(".scroll-flipx");
    scrollFlipX.forEach((el)=>observer.observe(el));

    const scrollAn=document.querySelectorAll(".scroll-an");
    scrollAn.forEach((el)=>observer.observe(el));

    const scrollZoom=document.querySelectorAll(".scroll-zoom");
    scrollZoom.forEach((el)=>observer.observe(el));

    const scrollRotx=document.querySelectorAll(".scroll-rotx");
    scrollRotx.forEach((el)=>observer.observe(el));

    const scrollRoty=document.querySelectorAll(".scroll-roty");
    scrollRoty.forEach((el)=>observer.observe(el));

    const scrollClose=document.querySelectorAll(".scroll-close");
    scrollClose.forEach((el)=>observer.observe(el));

    const scrollOpen=document.querySelectorAll(".scroll-open");
    scrollOpen.forEach((el)=>observer.observe(el));

    const scrollPrg=document.querySelectorAll(".b");
    scrollPrg.forEach((el)=>observer.observe(el));




var menu=document.getElementById("menu");

menu.onclick=function(){
    menu.classList.toggle("openmenu");
}

let showVal=document.querySelectorAll(".num");
let interval=1000;

const container = document.getElementById("skills");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAnimation();
     
    }
  });
});


observer2.observe(container);

function startAnimation() {
//   Your animation code here
  
setTimeout(()=>{
showVal.forEach((val)=>{

    let backBar=document.querySelectorAll(".bgbar");
    let startVal=0;
    let endVal=parseInt(val.getAttribute("data-val"));
    let skills=document.getElementById("skills");



    // let duration=Math.floor(interval/endVal);
    let counter=setInterval(function (){
        startVal +=1;
        val.textContent=`${startVal}%`;
        // backBar.forEach((b)=>{
        //     b.style.width=`${startVal}%`;
  
        // })

        if(startVal==endVal){
            clearInterval(counter);
        }

    },100)
})}
)
  setTimeout(() => {
    showVal.forEach((val) => {
      // Rest of your code
    });

    let circularProgress = document.querySelectorAll(".gradient"),
      progressValue = document.querySelectorAll(".prg-val"),
      speed = 100;
    let progressStartValue = 0;
    let progressEndValue;
    progressValue.forEach((val) => {
      progressEndValue = parseInt(val.getAttribute("data-value"));
    });
    let counter2 = setInterval(() => {
      progressStartValue++;
      progressValue.forEach((pv) => {
        pv.textContent = `${progressStartValue}%`;
      });
      circularProgress.forEach((cp) => {
        cp.style.background = `conic-gradient(#373737 ${
          progressStartValue * 3.6
        }deg,#ededed 0deg)`;
      });
      console.log(progressEndValue);
      if (progressStartValue == progressEndValue) {
        clearInterval(counter2);
      }
    }, speed);
  }, );
}
