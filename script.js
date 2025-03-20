const proBtn = document.querySelector('#proBtn');
const accBtn = document.querySelector('#accBtn');
const appBtn = document.querySelector('#appBtn');
const disBtn = document.querySelector('#disBtn');

const profile = document.querySelector('#profile');
const account = document.querySelector('#account');
const appearance = document.querySelector('#appearance');
const display = document.querySelector('#display');


proBtn.addEventListener('click',()=>{
    
    profile.classList.add('active');
    
    account.classList.remove('active');
    appearance.classList.remove('active');
    display.classList.remove('active');

    

});

accBtn.addEventListener('click',()=>{
    profile.classList.remove('active');
    appearance.classList.remove('active');
    display.classList.remove('active');

    account.classList.add('active');
    
});

appBtn.addEventListener('click',()=>{
    account.classList.remove('active');
    profile.classList.remove('active');
    display.classList.remove('active');

    appearance.classList.add('active');
    
});

disBtn.addEventListener('click',()=>{
    account.classList.remove('active');
    appearance.classList.remove('active');
    profile.classList.remove('active');

    display.classList.add('active');
    
});