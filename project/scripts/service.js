const grid = document.querySelector('.grid');

const listServices = [
    {
        title: "Software Development",
        content: "We make apps and software solutions for you.",
        img: "./images/software-dev-small.webp",
    },
    {
        title: "Web Development",
        content: "You can have your own page or your online services.",
        img: "./images/web-small.webp",
    },
    {
        title: "UIX Design",
        content: "We build and design your UI interfaces.",
        img: "./images/uix-small.webp",
    },
    {
        title: "Front-End",
        content: "We have expertise in front-end development.",
        img: "./images/frontend-small.webp",
    },
    {
        title: "Back-End",
        content: "We can deploy and handle your backend service.",
        img: "./images/backend-small.webp",
    },
    {
        title: "DataBase",
        content: "We build, handle and manage your DB's.",
        img: "./images/database-small.webp",
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