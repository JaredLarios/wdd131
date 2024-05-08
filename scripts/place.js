/* Current Year */
const currentYear = document.querySelector("#year")
const today = new Date()

currentYear.innerHTML = `${today.getFullYear()}`

/* Last Modified */
const lastModified = document.querySelector("#lastModification")
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`

/* Wind Chill Factor */
let temp = 10; // Celius
let wind = 5; // km/h
let windChill = 0;
let cond = "Partialy Cloudy";

const temperature = document.querySelector('#temp');
const windKm = document.querySelector("#wind")
const conditions = document.querySelector("#cond")
const windChillRes = document.querySelector("#windChill")

temperature.innerHTML = `${temp}°C`
windKm.innerHTML = `${wind} km/h`
conditions.innerHTML = cond

const calculateWindChill = (t, v, type) => {
    const tempType = {
        f: {
            a: 35.74,
            b: 0.6215,
            c: 35.75,
            d: 0.4275,
        },
        c: {
            a: 13.12,
            b: 0.6215,
            c: 11.37,
            d: 0.3965,
        },
    }

    const {a, b, c, d} = tempType[type]


    const result = Math.round(
        (a + (b * t))-(c * v ** 0.16) + (d*t* v**0.16)
    );
    return result
};

windChill = calculateWindChill(temp, wind, "c")
windChillRes.innerHTML = `${windChill} km/h`