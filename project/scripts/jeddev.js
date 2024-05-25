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