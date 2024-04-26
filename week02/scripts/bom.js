// Get Web Element
let dragged;
let id;
let index;
let indexDrop;
let mylist;

const LIMIT = 10
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// Append Element in list
const postElement = () => {
    let listLi = document.querySelectorAll('li').length
    console.log(listLi + 1)
    // If not vale on input
    if (input.value.trim() !== '') {
        // Craete Web Elements
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        // Populate Web Elements
        li.textContent = '↕ ' + input.value;
        li.setAttribute('draggable', 'true')
        li.setAttribute('class', 'dropzone')
        li.setAttribute('id',`${listLi}`)
        deleteButton.textContent = 'x';

        if (listLi >= LIMIT) {
            alert('You exceed the 10 books and chapters on this app.')
        } else {
            // Render DOM Element
            li.append(deleteButton);
            list.append(li);
        }
        
        deleteButton.addEventListener('click', () => {
            // Remove elements
            list.removeChild(li);
            input.focus();
        })

        input.value = '';
        input.focus();
    } else {
        // Focus input element if is empty
        input.focus();
    }
}

// DOM Event
button.addEventListener('click', postElement);

document.addEventListener("dragstart", ({target}) => {
    dragged = target;
    id = target.id;
    mylist = target.parentNode.children;
    for(let i = 0; i < mylist.length; i += 1) {
        if(mylist[i] === dragged){
        index = i;
        }
    }
});

document.addEventListener("dragover", (event) => event.preventDefault());

document.addEventListener("drop", ({target}) => {
    if(target.className == "dropzone" && target.id !== id) {
        dragged.remove( dragged );
    for(let i = 0; i < mylist.length; i += 1) {
        if(mylist[i] === target){
        indexDrop = i;
        }
    }
    console.log(index, indexDrop);
    if(index > indexDrop) {
        target.before( dragged );
    } else {
        target.after( dragged );
        }
    }
});