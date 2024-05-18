/* Current Year */
const currentYear = document.querySelector("#year")
const today = new Date()

currentYear.innerHTML = `${today.getFullYear()}`

/* Last Modified */
const lastModified = document.querySelector("#lastModification")
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`

/* Dom Elements */
const test = document.querySelector('#count');
let counter = getCount() || 0;
test.textContent = `${counter}`;

/* Get Count in Local Storega */
function getCount() {
    return JSON.parse(localStorage.getItem('coutner'))
}