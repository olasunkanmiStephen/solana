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


// next.addEventListener("click", () => {
//     scroll.style.scrollBehaviour = "smooth";
//     scroll.scrollLeft += 330;
// });

// back.addEventListener("click", () => {
//     scroll.style.scrollBehaviour = "smooth";
//     scroll.scrollLeft -= 450;
// });

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

let slideIndex = 0;
let autoSlideInterval;

function showSlides() {
  const slides = document.querySelectorAll('.ror');
  const slideshow = document.querySelector('.flow');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = '100%';
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides[slideIndex].style.display = 'flex';

  const offset = -slideIndex * 100;
  slideshow.style.transform = `translateX(-${offset}%)`;
}

// Set the automatic slide change interval
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlides();
  }, 5000); // Change slide every 5 seconds
}

// Event listeners for manual navigation
next.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Stop the automatic slideshow
  showSlides(); // Show the next slide
  startAutoSlide(); // Restart automatic slideshow after manual change
});

back.addEventListener('click', () => {
  clearInterval(autoSlideInterval); // Stop the automatic slideshow

  slideIndex -= 2; // Move back 2 slides to show the previous slide
  if (slideIndex < 0) {
    slideIndex = slides.length - 2;
  }

  showSlides(); // Show the previous slide
  startAutoSlide(); // Restart automatic slideshow after manual change
});

// Initial start of automatic slideshow
startAutoSlide();


// let slideIndex = 0;
// let autoSlideInterval;

// function showSlides() {
//   const slides = document.querySelectorAll('.ror');
//   const slideshow = document.querySelector('.ror');
  
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.width = '100%';
//     slides[i].style.display = 'none';
//   }

//   slideIndex++;

//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   slides[slideIndex].style.display = 'flex';

//   const offset = slideIndex * 100;
//   slideshow.style.transform = `translateX(${offset}% * -100%)`;
// }

// // Set the automatic slide change interval
// function startAutoSlide() {
//   autoSlideInterval = setInterval(() => {
//     showSlides();
//   }, 5000); // Change slide every 5 seconds
// }

// // Event listeners for manual navigation
// next.addEventListener('click', () => {
//   clearInterval(autoSlideInterval); // Stop the automatic slideshow
//   showSlides(); // Show the next slide
//   startAutoSlide(); // Restart automatic slideshow after manual change
// });

// back.addEventListener('click', () => {
//   clearInterval(autoSlideInterval); // Stop the automatic slideshow

//   slideIndex -= 2; // Move back 2 slides to show the previous slide
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 2;
//   }

//   showSlides(); // Show the previous slide
//   startAutoSlide(); // Restart automatic slideshow after manual change
// });

// // Initial start of automatic slideshow
// startAutoSlide();



// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   const slides = document.getElementsByClassName("ror");
  
//   // Hide all slides
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   // Move to the next slide
//   slideIndex++;
  
//   // If the index is greater than the number of slides, start from the first slide
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
  
//   // Display the current slide
//   slides[slideIndex - 1].style.display = "flex";
  
//   // Change slide every 2 seconds (2000 milliseconds)
//   setTimeout(showSlides, 4000);
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   const slides = document.getElementsByClassName("ror");

//   // Move to the next slide
//   slideIndex++;

//   // Reset back to the first slide if end is reached
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   // Calculate the translation value to slide the images
//   const translateValue = -slideIndex * 100 + "%";
  
//   // Apply the transform to the slideshow container
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.transform = `translateX(${translateValue})`;
//   }

//   // Change slide every 2 seconds (2000 milliseconds)
//   setTimeout(showSlides, 2000);
// }


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   const slides = document.querySelectorAll('.ror');
//   const slideshow = document.querySelector('.how');
  
//   slideIndex++;

//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   const offset = -slideIndex * 100;
//   slideshow.style.transform = `translateX(${offset}%)`;

//   setTimeout(showSlides, 2000); // Change slide every 2 seconds
// }

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   const slides = document.querySelectorAll('.ror');
//   const slideshow = document.querySelector('.ror');
  
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.width = '100%';
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }

//   slideIndex++;

//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }

//   slides[slideIndex].style.display = 'flex';

//   const offset = -slideIndex * 100;
//   slideshow.style.transform = `translateX(${offset}%)`;

//   setTimeout(showSlides, 5000); // Change slide every 2 seconds
// }
