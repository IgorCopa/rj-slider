let images = [];
images.length = 5;
let slider;
let imgIndex;
let maxImgs;
let time;
let timeToChangePic;
let loadBarAdvancing;

const preLoading = () => {
    let p = 1;
    for(let i=0; i<5; i++){
        images[i] = new Image();
        images[i].src = `images/photo-${p}.jpg`;
        p++;
    }
}

const loading = (img) => {
    slider.style.backgroundImage=`url('${images[img].src}')`;
    slider.style.backgroundRepeat='no-repeat';
    slider.style.backgroundPosition='center';
}

const begin = () => {
    preLoading();
    slider = document.getElementById('slider');
    loadBarAdvancing = document.getElementById('load');
    imgIndex = 0;
    maxImgs = images.length-1;
    loading(imgIndex);
    changingTime = 0;
    loady();
}

const changePictures = (dir) => {
    changingTime = 0;
    imgIndex+=dir;
    if(imgIndex>maxImgs){
        imgIndex=0;
    }else if(imgIndex<0){
        imgIndex=maxImgs;
    }
    loading(imgIndex);
}

const loady = () => {
    changingTime++;
    if(changingTime >= 300){
        changingTime = 0;
        changePictures(1);
    }
    timeToChangePic = changingTime/3;
    loadBarAdvancing.style.width=`${timeToChangePic}%`;
    window.requestAnimationFrame(loady);
}

window.addEventListener("load", begin);