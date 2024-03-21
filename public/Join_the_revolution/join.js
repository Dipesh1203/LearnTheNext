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
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});