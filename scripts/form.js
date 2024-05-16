/* Current Year */
const currentYear = document.querySelector("#year")
const today = new Date()

currentYear.innerHTML = `${today.getFullYear()}`

/* Last Modified */
const lastModified = document.querySelector("#lastModification")
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`