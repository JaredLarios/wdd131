/* Current Year */
const currentYear = document.querySelector("#currentyear")
const today = new Date()

currentYear.innerHTML = `${today.getFullYear()}`

/* Last Modified */
const lastModified = document.querySelector("#lastModified")
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`