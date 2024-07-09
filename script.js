let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchForms = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForms.classList.toggle('active');
}   

let cartItems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItems.classList.toggle('active');
}   

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForms.classList.remove('active');
}