// Get DOM Elements
const currentYear = document.querySelector('#year');
const lastModification = document.querySelector('#lastModification');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// Get Dates
const today = new Date()
const lastModificationDate = new Date(document.lastModified)

// Render to DOM Content
currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`

// Eevents Listener
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})