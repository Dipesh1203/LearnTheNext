const container = document.getElementById('container');
const texts = [
    "We are the creators",
    "We are the representative's",
    "We are the developers"
];
let currentIndex = 0;

function addText() {
    const paragraph = document.createElement('p');
    paragraph.textContent = texts[currentIndex];
    container.appendChild(paragraph);
    currentIndex++;
    if (currentIndex === texts.length) {
        currentIndex = 0; // Reset to start from the beginning
    }
    setTimeout(removeText, 2000);
}

function removeText() {
    container.lastChild.remove();
    addText(); // After removing, immediately add the next text
}

addText(); // Start the process



document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.querySelector('.h1-left');
    const imgContainer = document.querySelector('.img-right');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const textContainerTop = textContainer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (textContainerTop < windowHeight / 2) {
            textContainer.classList.add('active');
            imgContainer.classList.add('slide-in');
        } else {
            textContainer.classList.remove('active');
            imgContainer.classList.remove('slide-in');
        }
    });
});


// window.addEventListener('scroll', () => {
//     const h1Left = document.querySelector('.h1-left');
//     const imgRight = document.querySelector('.img-right');
//     const scrollPosition = window.scrollY;

//     // Adjust these values based on when you want the animation to start
//     const h1LeftAnimationStart = 100; // Start showing when scrolled 100px
//     const imgRightAnimationStart = 300; // Start showing when scrolled 300px

//     if (scrollPosition > h1LeftAnimationStart) {
//         h1Left.classList.add('show');
//     }

//     if (scrollPosition > imgRightAnimationStart) {
//         imgRight.classList.add('show');
//     }
// });



const wrapper = document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    textgenerator.computedStyleMap.display = 'none';
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.validate')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()

let time;
setInterval(() => {
const a = new Date();
const hours = ('0' + (a.getHours() % 12 || 12)).slice(-2); // Get hours in double digits
const minutes = ('0' + a.getMinutes()).slice(-2); // Get minutes in double digits
const seconds = ('0' + a.getSeconds()).slice(-2); // Get seconds in double digits
const meridiem = a.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM or PM
time = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
document.getElementById('time').innerHTML = time;
}, 1000);

