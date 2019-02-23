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
  topTextInput = document.getElementById('top-text')
}

init();
