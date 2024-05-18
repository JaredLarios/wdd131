/* Current Year */
const currentYear = document.querySelector("#year")
const today = new Date()

currentYear.innerHTML = `${today.getFullYear()}`

/* Last Modified */
const lastModified = document.querySelector("#lastModification")
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`

/* Dom Elements */
const selectOption = document.querySelector('#product-name');
const form = document.querySelector('form');
let counter = getCount() || 0;

/* List of Elements */
const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        averagerating: 4.5,
    },
    {
        id: 'fc-2050',
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        averagerating: 5.0
    }
];

/* Render in dom */
products.forEach(element => displayList(element));

form.addEventListener('submit', () => {
    counter = counter + 1;
    setCount(counter);
})

/* Display Element List */
function displayList(item) {
    let option = document.createElement('option');
    option.textContent = item.name;
    option.setAttribute('value', item.averagerating);
    option.setAttribute('id', item.id);
    selectOption.append(option);
}

/* Set Count in Local Storage */
function setCount(counter) {
    localStorage.setItem('coutner', counter);
}

/* Get Count in Local Storega */
function getCount() {
    return JSON.parse(localStorage.getItem('coutner'))
}