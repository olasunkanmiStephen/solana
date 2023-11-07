const toggleButtons = document.querySelectorAll('.toggle');
const kl1 = document.querySelector('.kl1');
const kl2 = document.querySelector('.kl2');
const kl3 = document.querySelector('.kl3');
const kl4 = document.querySelector('.kl4');
const kl5 = document.querySelector('.kl5');
const dotElements = document.querySelectorAll('.in');
const hid = document.querySelector('.hid')
const rotate = document.querySelector('.r1')
const rotate1 = document.querySelector('.r2')
const rotate2 = document.querySelector('.r3')
const rotate3 = document.querySelector('.r4')
const rotate4 = document.querySelector('.r5')

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dotElements.forEach((dot, dotIndex) => {
      if (index === dotIndex){
        
        // dot.style.visibility = 'visible'
        dot.classList.toggle('visible')
      }else{
        // dot.style.visibility = 'hidden'
        dot.classList.remove('visble')
      }
    })
  })
})


kl1.addEventListener('click', () =>{
  rotate.classList.toggle('angle-down')
})

kl2.addEventListener('click', () =>{
  rotate1.classList.toggle('angle-down')
})

kl3.addEventListener('click', () =>{
  rotate2.classList.toggle('angle-down')
})

kl4.addEventListener('click', () =>{
  rotate3.classList.toggle('angle-down')
})

kl5.addEventListener('click', () =>{
  rotate4.classList.toggle('angle-down')
})



hid.addEventListener('click', () =>{
  document.querySelector('nav ul').classList.toggle('visible')
  // document.querySelector('nav ul').style.display = 'block'
})