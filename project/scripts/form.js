// DOM Elements
const myName = document.querySelector('#name');
const form = document.querySelector('form');

// set local storage values
const setName = (name) => localStorage.setItem("MyName", name);

// Render DOM Elements
form.addEventListener('submit', () => {
    setName(myName.value)
})