const grid = document.querySelector('.grid');

const listServices = [
    {
        title: "Software Development",
        content: "",
        img: "./images/team-small.webp",
    },
    {
        title: "Web Developement",
        content: "",
        img: "./images/team-small.webp",
    },
    {
        title: "UIX Design",
        content: "",
        img: "./images/team-small.webp",
    },
    {
        title: "Front-End",
        content: "",
        img: "./images/team-small.webp",
    },
    {
        title: "Back-End",
        content: "",
        img: "./images/team-small.webp",
    },
    {
        title: "API",
        content: "",
        img: "./images/team-small.webp",
    }
];

displayCard(listServices);

function displayCard(itemList) {
    grid.innerHTML = ``;
    itemList.forEach(item => {
        let card = document.createElement('div');
        let title = document.createElement('h3');
        let content = document.createElement('p');
        let img = document.createElement('img');

        title.textContent = item.title;
        content.textContent = item.content;
        img.setAttribute("src", item.img);
        img.setAttribute("alt", item.title);
        img.setAttribute("loading", "lazy");

        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(img);

        grid.appendChild(card);
    });
}