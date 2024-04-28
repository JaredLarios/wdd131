// get DOM Elements
const currentYear = document.querySelector('#year')
const lastModification = document.querySelector('#lastModification')

// Get Dates
const today = new Date()
const lastModificationDate = new Date(document.lastModified)

// Render to DOM Content
currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`