const myName = document.querySelector('#name');

const getName = () => localStorage.getItem("MyName");
myName.textContent = getName();