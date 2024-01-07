

let UserResult=document.querySelector(".user img")
,compResult=document.querySelector(".comp img")
,choiceImg=document.querySelectorAll(".option_img")
,fImage=document.getElementById("first")
,sImage=document.getElementById("second"),
result=document.getElementById("result");

let count1=0,count2=0;

//loop through each option image elements
choiceImg.forEach((image,index)=>{
    image.addEventListener("click",e=>{
        fImage.style.animation="none"
        sImage.style.animation="none"
        image.classList.add("active");
        
      
//loop through each option image again
        choiceImg.forEach((image2,index2)=>{
//if the current index doesn't match the clicked index
//remove the "active" class from the other option images
           index !== index2 && image2.classList.remove("active");
        });
        //get the source of the clicked option imageOrientation
        let imageSrc =e.target.src;
        
        UserResult.src=imageSrc;
      //generate a random number between 0 and 2
      let randomNumber=Math.floor(Math.random()*3);
      //create an array of CPU image option 
      let rock=document.images[2].src;
      let paper=document.images[3].src;
      let scissors=document.images[4].src;
      let cpuImages=[rock,paper,scissors];
      //set the CPU image to a random option from the array
      compResult.src=cpuImages[randomNumber];

      //assign a letter value to the CPU option(R for rock,P for paper,S for scissors) 
      let cpuValue=["R","P","S"][randomNumber];
      //assign a letter Value to the clicked option (based on index)
      let userValue=["R","P","S"][index];

      //create an outcome with all possible outcomes
      let outcomes={
        PR:"Draw",
        RP:"Computer",
        RS:"You",
        PP:"Draw",
        PR:"You",
        PS:"Computer",
        SS:"Draw",
        SR:"Computer",
        SP:"You"
        
      };

      //create an object outcome value based on user and CPU options
      let outComeValue=outcomes[userValue+cpuValue];
      result.textContent=userValue===cpuValue? "Match Draw" :`${outComeValue} Won!!`;
      
      let compScore=document.getElementById("compscore");
      let myScore=document.getElementById("myscore");

      
     
      if(outComeValue==="Computer"){
        count1++;
         compScore.innerHTML=count1;
      }
      else if(outComeValue==="You"){
        count2++;
        myScore.innerHTML=count2;
      }
      else{
        
      }
      
    });
    
});





