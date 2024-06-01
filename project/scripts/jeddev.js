/* Current Year */
const currentYear = document.querySelector("#year")
const today = new Date()

currentYear.innerHTML = `${today.getFullYear()}`

/* Last Modified */
const lastModified = document.querySelector("#lastModification")
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`

/* Menu */
const menu = document.querySelector("#menu");
const dropdown = document.querySelector("nav > ul")

menu.addEventListener('click', () => {
    dropdown.classList.toggle("open");
})

/* Get DOM Elements */
const main = document.querySelector('header');

/* Get Item from local Storage */
const getMyName = () => localStorage.getItem("MyName");

/* If is name render fixed box */
if (getMyName()) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');

    h3.textContent = `Hey ${getMyName()}!`
    p.textContent = `You will received in the next days an email!`

    div.setAttribute('class','popup');
    h3.setAttribute('class','h-pop');
    p.setAttribute('class', 'p-pop');

    div.appendChild(h3);
    div.appendChild(p);
    main.appendChild(div);
}