window.addEventListener("load",function(){
  
  let falling_egg = function(imageObject,left){
    let image1 =setInterval(() => {

        left = Math.random() * window.innerWidth;
        if(left <(window.innerWidth-imageObject.width)){
           imageObject.style.left=left+"px";
            falling_egg_top (this.document.images[0],0);
            clearInterval(image1);
        }
        else{
           imageObject.style.left= 0+"px";
             falling_egg_top (this.document.images[0],0);
             clearInterval(image1);
        }
    }, 1000);
  ///////////////////////////////
    
  let falling_egg_top =function (imageObject,top){
    let image1 =setInterval(() => {

        top = top+10;

        if(top >(window.innerHeight-imageObject.height)) { 
          imageObject.style.top= 0+"px";
          clearInterval(image1);
        }
        else{
          
         imageObject.style.top=top+"px";
         // clearInterval(image1);
        }
    }, 100);
  }  
  
  }
  //////////////////////////
  // let basket_move = function(imageObject,left){
  //   imageObject.onkeydown= function(event){
  //     if(event.key == 'ArrowRight'){
  //       document.style.left= left+10;
      
  //     }
  //     else if( event.key ==  'ArrowLeft'){
  //       document.style.left=left-10;
  //     }  

  //   }

  // }
  let catchEgg = function () {
  let image_sources = ["egg.png", "Uovo_sorridente.png"];
  let basket_image = document.images[1];
  let egg_image = document.images[0];

  let checkCollision = setInterval(() => {
    let eggRect = egg_image.getBoundingClientRect();
    let basketRect = basket_image.getBoundingClientRect();

    if (
      eggRect.left < basketRect.right &&
      eggRect.right > basketRect.left &&
      eggRect.bottom > basketRect.top &&
      eggRect.top < basketRect.bottom
    ) {
      console.log("Caught the egg!");
      egg_image.classList.add("hidden");
      clearInterval(checkCollision);
      
    }
    else {
      egg_image.src = image_sources[1];
      egg_image.style.bottom =0;
      setTimeout(()=>egg_image.classList.add("hidden"),500);
      
      // egg_image.classList.add("hidden");
     
    }
  }, 6000);
};



///////////////////////////////////////////////
  falling_egg (this.document.images[0],Math.random()*window.innerWidth);
  catchEgg();
  
  
 


})