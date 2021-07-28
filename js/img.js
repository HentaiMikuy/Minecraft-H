window.onload = init();

function init() {
    window.setInterval(changeImg,2000)
}

var pathArr = new Array (
    "img/topphotos_1.png",
    "img/topphotos_2.png",
    "img/topphotos_3.png",
    "img/topphotos_4.png",
    "img/topphotos_5.png"
);

var index = 0;

function changeImg(){
    img = document.getElementById("imgchange");
    index++;
    if(index>=pathArr.length){
        index = 0;
    }
    img.src = pathArr[index];
}
