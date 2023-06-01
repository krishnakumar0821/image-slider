const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');
const imageContainerEl = document.querySelector('.image-container');

let currentImage = 1;

nextEl.addEventListener('click', ()=>{
    currentImage++;
    // console.log(currentImage);
    updateImage();
})

function updateImage(){
    imageContainerEl.style.transform=`translateX(-${currentImage * 500}px)`;
}