const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `C:/Users/최지원/Documents/Documents/With JS/images/${imgNumber + 1}.jpg`;
    body.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    
    return number;
    
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();