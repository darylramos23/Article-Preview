'use strict'

const shareButton = document.querySelector('.share-container');
const shareLink = document.querySelector('.links');
let hidden = true;
let x = window.matchMedia('(max-width: 600px)');
const openShareLink = function(){
  if (hidden===true){
    shareLink.classList.remove('hidden');

    if (x.matches){


    } else{
      document.querySelector('.share-icon-container').style.
      backgroundColor = 'hsl(217, 19%, 35%)';
      document.querySelector('.share-icon').style.filter = 'brightness(100)';

    }
    

    hidden=false;
  }else{
    shareLink.classList.add('hidden');

    if (x.matches){


    } else{
      document.querySelector('.share-icon-container').style.backgroundColor = 'hsl(210, 46%, 95%)';
      document.querySelector('.share-icon').style.filter = 'none';

    }
    
    hidden = true;
  }
}


shareButton.addEventListener('click',openShareLink);
