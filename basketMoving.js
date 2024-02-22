window.addEventListener('keydown',function(event){
    let keyname =event.key;
    let image = this.document.images[1];
    let screen_width = this.window.innerWidth-image.width;
    let currentLeft = parseInt(image.style.left) || 0;
    //console.log (keyname);
    //console.log(document.images[1]);
      if(keyname == 'ArrowRight' &&currentLeft<=screen_width){
        image.style.left=(currentLeft+10)+"px";
      
      }
      if( keyname ==  'ArrowLeft' &&currentLeft>=0){
       image.style.left=(currentLeft-10)+"px";
      }  

})