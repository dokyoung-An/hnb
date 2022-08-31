const vrImage = document.querySelector(".vrproduction-slide-img");


function animationImg () {
    vrImage.classList.toggle("active");   
}

setInterval(animationImg,1000);

window.addEventListener('scroll',()=> {
    let vrInfo = document.querySelector(".vr-info-description2");
    let vrInfoPosition = vrInfo.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
  if(vrInfoPosition<screenPosition) {
        vrInfo.classList.add('active');

  } else {
     vrInfo.classList.remove('active')
  }
});