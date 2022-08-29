// let counter = 1;
// const slideLoop = document.querySelectorAll('.slide img')

// setInterval(function(){
//     document.getElementById('radio'+ counter).checked = true;
//     counter++;
//     if(counter>7) {
//         counter =1;
//         // slideLoop.style.transition = 'none';
//     } 
// },2000);


const slideSlider = document.querySelector('slide-container');
const slideSlide = document.querySelector('.slide-slide');
const interval = 3000

let slidesSlides = document.querySelectorAll('.slide');


let index = 1;


const firstClone = slidesSlides[0].cloneNode(true);
const lastClone = slidesSlides[slidesSlides.length -1].cloneNode(true);

console.log(slidesSlides)
firstClone.id ='first-clone'
lastClone.id='last-clone'

slideSlide.append(firstClone);
slideSlide.prepend(lastClone);

const slideWidth = slidesSlides[index].clientWidth;
slideSlide.getElementsByClassName.transform = `translateX(${-slideWidth*index}px)`;

const startSlide = ( ) => {
    setInterval(() => {
        index++;
        slideSlide.style.transform = `translateX(${-slideWidth*(index-1)}px)`
        slideSlide.style.transition='.5s';
     }, interval);
};

slideSlide.addEventListener('transitionend', () =>{
    slidesSlides = document.querySelectorAll('.slide');

    if(slidesSlides[index].id === firstClone.id) {
        slideSlide.style.transition='none';
        index = 1;
        slideSlide.style.transform = `translateX(${-slideWidth*(index-1)}px)`;
         
    }
});

startSlide();






