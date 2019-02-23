let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function memeGenerator(img, topText, bottomText, topTextSize, bottomTextSize){
  let fontSize;

  // size canvas to image
  canvas.width = img.width;
  canvas.height = img.height;

  //clears canvas
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //draw main image
  ctx.drawImage(img ,0 ,0);

  //text style: the border
  ctx.fillStyle  = 'white';
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';

  //top text sizes
  fontSize = canvas.width * topTextSize;
  ctx.font = fontSize + 'px Imact';
  ctx.lineWidth = fontSize / 20;

  //draw top text
  ctx.textBaseLine = 'top';
  topText.split('\n').forEach(function (t, i){
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
  });

  //bottom text sizes
  fontSize = canvas.width * bottomTextSize;
  ctx.font = fontSize + 'px Imact';
  ctx.lineWidth = fontSize / 20;

  //draw bottom text
  ctx.textBaseLine = 'bottom';
  bottomText.split('\n').reverse().forEach(function (t, i){
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height -  i * fontSize, canvas.width);
  });
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

  generateBtn.addEventListener('click', function(){
    let reader = new FileReader();
    reader.onload = function(){
      let img = new Image;
      img.scr = reader.result;
      memeGenerator(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
    };
    reader.readAsDataURL(imageInput.files[0]);
  });

}

init();
