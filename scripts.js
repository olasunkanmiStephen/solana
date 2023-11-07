const slides = document.querySelector('.flow');
const images = slides.querySelector('img')
const currentImages = 0;
const scroll = document.querySelector('.flow')
const back = document.querySelector('.rt')
const next = document.querySelector('.tr')
const pay = document.querySelector('#pay')
const gam = document.querySelector('#gam')
const nft = document.querySelector('#nft')
const defi = document.querySelector('#defi')
const dao = document.querySelector('#dao')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')

// const learn = document.querySelector('.learn');
// const tog = document.querySelector('.fa-bars');
// const build = document.querySelector('.build');
// const solution = document.querySelector('.solution');
// const network = document.querySelector('.network');
// const community = document.querySelector('.com');
// const learnin = document.querySelector('.learn');
// const togul = document.querySelector('.fa-bars');
// const buildin = document.querySelector('.build');
// const solutionin = document.querySelector('.solution');
// const networkin = document.querySelector('.network');
// const communityin = document.querySelector('.com');


pay.addEventListener('click', () => {
    one.style.display = 'block'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'none'
    five.style.display = 'none'
});

nft.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'block'
    four.style.display = 'none'
    five.style.display = 'none'
});

gam.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'block'
    three.style.display = 'none'
    four.style.display = 'none'
    five.style.display = 'none'
});

defi.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'block'
    five.style.display = 'none'
});

dao.addEventListener('click', () => {
    one.style.display = 'none'
    two.style.display = 'none'
    three.style.display = 'none'
    four.style.display = 'none'
    five.style.display = 'block'
});


next.addEventListener("click", () => {
    scroll.style.scrollBehaviour = "smooth";
    scroll.scrollLeft += 330;
});

back.addEventListener("click", () => {
    scroll.style.scrollBehaviour = "smooth";
    scroll.scrollLeft -= 450;
});

window.addEventListener('scroll', function(){
    // document.querySelector('.learn-inner').style.display = 'none'

    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    
    if(window.pageYOffset >= navHeight){
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    }
});

function googleTranslateElementInit(){
    new google.translate.TranslateElement({pagelanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}


