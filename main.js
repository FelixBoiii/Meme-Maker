let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function memeGenerator(img, topText, bottomText, topTextSize, bottomTextSize){
  let fontSize;

  // size canvas to image
  canvas.width = img.width;
  canvas.height = img.height;

  //clears canvas
  ctx.clearRect(0,0, canvas.width, canvas.height)
}

function init(){
  topTextInput = document.getElementById('top-text');
  bottomTextInput = document.getElementById('bottom-text');
  topTextSizeInput = document.getElementById('top-text-size-input');
  bottomTextSizeInput = document.getElementById('bottom-text-size-input');
  imageInput = document.getElementById('image-input');
  generateBtn = document.getElementById('generate-btn');
  canvas = document.getElementById('meme-canvas');

  ctx = canvas.getContext('2d');

  canvas.width = canvas.height = 0;

  //default text
  topTextInput.value = bottomTextInput.value = 'Demo\nText';

}

init();
