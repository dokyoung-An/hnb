let basic=document.getElementById('basic');
let standard=document.getElementById('standard');
let premium=document.getElementById('premium');
let digital=document.getElementById('digital');

const basicName=document.querySelector('.basic-name');
const standardName=document.querySelector('.standard-name');
const premiumName=document.querySelector('.premium-name');
const digitalName=document.querySelector('.digital-name');

const wp = document.getElementById('workperiod');
const tech = document.getElementById('technic');
const use = document.getElementById('use');
const sn = document.getElementById('sn');
const wpin = document.querySelector('.workperiodin')
const techin = document.querySelector('.technicin')
const usein = document.querySelector('.usein')

function onchangeImage1 (){
    basic.src="./images/1 (1).jpg";
    wp.innerHTML ="1 month";
    tech.innerHTML = "720 dgree PANORAMA";
    use.innerHTML = "VR viewer";
    sn.innerHTML = "BASIC";
    // wpin.innerHTML = "Working period";
    // techin.innerHTML="Technic";
    // usein.innerHTML="Homepage";

}

function onchangeImage2 (){
    basic.src="./images/1 (2).jpg";
    wp.innerHTML ="1.5 month";
    tech.innerHTML = "Moving";
    use.innerHTML = "VR viewer";
    sn.innerHTML = "Standard";
    // wpin.innerHTML = "Working period";
    // techin.innerHTML="Technic";
    // usein.innerHTML="Homepage";
}
function onchangeImage3 (){
    basic.src="./images/1 (3).jpg";
    wp.innerHTML ="1.5 month";
    tech.innerHTML = "Moving & Spot";
    use.innerHTML = "Hompage";
    sn.innerHTML = "Premium";
    // wpin.innerHTML = "Working period";
    // techin.innerHTML="Technic";
    // usein.innerHTML="Homepage";
}
function onchangeImage4 (){
    basic.src="./images/1 (4).jpg";
    wp.innerHTML ="0.5 month";
    tech.innerHTML = "720 dgree PANORAMA";
    use.innerHTML = "VR viewer";
    sn.innerHTML = "Digital Twin";
    // wpin.innerHTML = "Working period";
    // techin.innerHTML="Technic";
    // usein.innerHTML="Homepage";
}

basicName.addEventListener('click',onchangeImage1);
standardName.addEventListener('click',onchangeImage2);
premiumName.addEventListener('click',onchangeImage3);
digitalName.addEventListener('click',onchangeImage4);
   

// function chageImage(fileName) {
//     basic.setAttribute('src',fileName);
// }