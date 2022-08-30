let basic=document.getElementById('serviceimg');

const wp = document.getElementById('workperiod');
const tech = document.getElementById('technic');
const use = document.getElementById('use');
const sn = document.getElementById('sn');
const wpin = document.querySelector('.workperiodin')
const techin = document.querySelector('.technicin')
const usein = document.querySelector('.usein')

const basicName = document.getElementById('bas')
const standardName = document.getElementById('pre')
const premiumName = document.getElementById('sta')
const digitalName = document.getElementById('dig')

function onchangeImage1 (){
    basic.style.backgroundImage="url('./images/1 (1).jpg')";
    wp.innerHTML ="1 month";
    tech.innerHTML = "720 dgree PANORAMA";
    use.innerHTML = "VR viewer";
    sn.innerHTML = "BASIC";


}

function onchangeImage2 (){
    basic.style.backgroundImage="url('./images/1 (2).jpg')";
    wp.innerHTML ="1.5 month";
    tech.innerHTML = "Moving";
    use.innerHTML = "VR viewer";
    sn.innerHTML = "Standard";
    
}
function onchangeImage3 (){
    basic.style.backgroundImage="url('./images/1 (3).jpg')";
    wp.innerHTML ="1.5 month";
    tech.innerHTML = "Moving & Spot";
    use.innerHTML = "Hompage";
    sn.innerHTML = "Premium";
 
}
function onchangeImage4 (){
    basic.style.backgroundImage="url('./images/1 (4).jpg')";
    wp.innerHTML ="0.5 month";
    tech.innerHTML = "720 dgree PANORAMA";
    use.innerHTML = "VR viewer";
    sn.innerHTML = "Digital Twin";
 
}

basicName.addEventListener('click',onchangeImage1);
standardName.addEventListener('click',onchangeImage2);
premiumName.addEventListener('click',onchangeImage3);
digitalName.addEventListener('click',onchangeImage4);
   

