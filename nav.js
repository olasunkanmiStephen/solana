const toggleButtons = document.querySelectorAll('.toggle');
const dotElements = document.querySelectorAll('.in');
const hid = document.querySelector('.hid')

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


hid.addEventListener('click', () =>{
  document.querySelector('nav ul').classList.toggle('visible')
  // document.querySelector('nav ul').style.display = 'block'
})
