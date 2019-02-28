let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

/*function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
    let fontSize;
    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    //ctx.drawImage(img, 0, 0);
    img.onload = function(){
       ctx.drawImage(img, 0, 0);
       ctx.fillStyle = 'white';
       ctx.strokeStyle = 'black';
       ctx.textAlign = 'center';
       // Top text font size
       fontSize = canvas.width * topTextSize;
       ctx.font = fontSize + 'px Impact';
       ctx.lineWidth = fontSize / 30;
       // Draw top text
       ctx.textBaseline = 'top';
       topText.split('\n').forEach(function(t, i) {
           ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
           ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
       });
       // Bottom text font size
       fontSize = canvas.width * bottomTextSize;
       ctx.font = fontSize + 'px Impact';
       ctx.lineWidth = fontSize / 30;
       // Draw bottom text
       ctx.textBaseline = 'bottom';
       bottomText.split('\n').reverse().forEach(function(t, i) { // .reverse() because it's drawing the bottom text from the bottom up
           ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
           ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
       });
    }
    // Text style: white with black borders

}*/

function redrawMeme(image, topLine, bottomLine) {
    // Get Canvas2DContext
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext("2d");
    if (image != null)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // clear previous
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (image != null)
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Text attributes
    ctx.font = '30pt Impact';
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';

    if (topLine != null) {
        ctx.fillText(topLine, canvas.width / 2, 40);
        ctx.strokeText(topLine, canvas.width / 2, 40);
    }

    if (bottomLine != null) {
        ctx.fillText(bottomLine, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomLine, canvas.width / 2, canvas.height - 20);
    }
}

function init() {
    // Initialize variables
    topTextInput = document.getElementById('top_text');
    bottomTextInput = document.getElementById('bottom_text');
    topTextSizeInput = document.getElementById('top_text-size-input');
    bottomTextSizeInput = document.getElementById('bottom_text-size-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    imageInput = document.getElementById('image-input');
    //imageInput.addEventListener('change', handleImage, false);
    //ctx = canvas.getContext('2d');
    canvas.width = canvas.height = 0;

    // Default/Demo text
    //topTextInput.value = bottomTextInput.value = 'Demo\nText';
    // Generate button click listener

    /*generateBtn.addEventListener('click', function() {
      let reader = new FileReader();
      reader.onload = function() {
          let img = new Image;
          img.src = reader.result;
          generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
      };
      reader.readAsDataURL(imageInput.files[0]);
        // Read image as DataURL using the FileReader API

    });*/
}



/*function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}*/


function download_image2() {
    var canvas = document.getElementById("meme-canvas");
    var link = document.createElement("a");
    var imgData = canvas.toDataURL({
        format: 'png',
        multiplier: 4
    });
    var strDataURI = imgData.substr(22, imgData.length);
    var blob = dataURLtoBlob(imgData);
    var objurl = URL.createObjectURL(blob);
    link.download = "meme.png";
    link.href = objurl;
    link.click();
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}



function handleFileSelect(evt) {
  var file = evt.target.files[0];
  //image upload
  var reader = new FileReader();
  reader.onload = function(fileObject) {
    var data = fileObject.target.result;
    // Create an image object
    var image = new Image();
    image.onload = function() {
      window.imageSrc = this;
      //generateMeme(window.imageSrc, null, null, 0.15, 0.15);
       redrawMeme(window.imageSrc, window.top_text, window.bottom_text);
    }
    // Set image data to background image.
    image.src = data;
    console.log(fileObject.target.result);
  };
  reader.readAsDataURL(file)
}

function textChangeListener (evt) {
  var id = evt.target.id;
  var text = evt.target.value;

  if (id == "top_text") {
      window.topLineText = text;
  } else {
    window.bottomLineText = text;
  }
  redrawMeme(window.imageSrc, window.top_text, window.bottom_text);
  //generateMeme(window.imageSrc, window.top_text, window.bottom_text, 0.15, 0.15);
}

init();
