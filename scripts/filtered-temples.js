// Get DOM Elements
const currentYear = document.querySelector('#year');
const lastModification = document.querySelector('#lastModification');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

const grid = document.querySelector('.grid')
const home = document.querySelector('#home');
const old = document.querySelector('#old');
const news = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');
const listFilters = [home, old, news, large, small]

// Get Dates
const today = new Date()
const lastModificationDate = new Date(document.lastModified)

// Render to DOM Content
currentYear.innerHTML = `${today.getFullYear()}`
lastModification.innerHTML = `Last Modification: ${lastModificationDate}`

// Temples object
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Coban Guatemala",
        location: "Coban, Guatemala",
        dedicated: "Construction",
        area: 8794,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/4b129a33b4b311ee9c99eeeeac1e820ae5a7a3bb/full/320%2C/0/default"
    },
    {
        templeName: "Guatemala City",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 17609,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/800x1280/guatemala-lds-temple-82739-wallpaper.jpg"
    },
    {
        templeName: "Quetzaltenango Guatemala",
        location: "Quezaltenango, Guatemala",
        dedicated: "2011, December, 11 ",
        area: 21086,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/800x500/quetzaltenango-guatemala-temple-lds-893073-wallpaper.jpg"
    },
];

// By defautl call home cards
craeteTempleCard(temples);

// Reset Class for options
const resetOpts = () => listFilters.forEach((element) => {
    if ( element.getAttribute('class') === 'active' ) {
        element.classList.toggle('active')
    }
})

// Eevents Listener
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
home.addEventListener('click', () => {
    resetOpts();
    home.classList.toggle('active');
    let filterTemples = temples;
    craeteTempleCard(filterTemples);
});
old.addEventListener('click', () => {
    resetOpts();
    old.classList.toggle('active');
    let filterTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear()  < 1900);
    craeteTempleCard(filterTemples);
});
news.addEventListener('click', () => {
    resetOpts();
    news.classList.toggle('active');
    let filterTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    craeteTempleCard(filterTemples);
});
small.addEventListener('click', () => {
    resetOpts();
    small.classList.toggle('active');
    let filterTemples = temples.filter(temple => temple.area < 10000);
    craeteTempleCard(filterTemples);
});
large.addEventListener('click', () => {
    resetOpts();
    large.classList.toggle('active');
    let filterTemples = temples.filter(temple => temple.area > 90000);
    craeteTempleCard(filterTemples);
});

// Creating Cards
function craeteTempleCard(filterTemples) {
    grid.innerHTML = ``;
    filterTemples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class='label'>Location: </span> ${temple.location}`
        dedication.innerHTML = `<span class='label'>Dedicated: </span> ${temple.dedicated}`
        area.innerHTML = `<span class='label'>Size: </span> ${temple.area} sq ft.`
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`)
        img.setAttribute("loading", "lazy")

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        grid.appendChild(card);
    });
}