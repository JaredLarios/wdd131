const currentYear = document.querySelector('#year')
const lastModification = document.querySelector('#lastModification')

const today = new Date()
const lastModificationDate = new Date(document.lastModified)

currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`