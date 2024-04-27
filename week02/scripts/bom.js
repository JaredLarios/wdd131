// Drag Variables
let drag = {
    index: null,
    id: null,
    element: null};
let indexDrop
let mylist;

// Get Web Element
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

// Get Index to Drag and Drop
const getIndex = (list, target) => {
    for(let i = 0; i < list.length; i += 1) {
        if (list[i] === target) { return i }
    }
}

// DOM Event
button.addEventListener('click', postElement);
document.addEventListener("dragstart", ({target}) => {
    // Save Elements From Target
    drag.element = target;
    drag.id = target.id;
    mylist = target.parentNode.children;

    // Get Index From Drag Element
    drag.index = getIndex(mylist, drag.element)
});
document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("drop", ({target}) => {
    // If Droped over a dropzone and ID is not the same of itself
    if(target.className == "dropzone" && target.id !== drag.id) {
        // Drag Element Swaped from DropZone Element
        drag.element.remove( drag.element );
        indexDrop = getIndex(mylist, target)

        // If Drag Element index is less than Drop Index 
        if(drag.index > indexDrop) {
            target.before( drag.element );
        } else {
            target.after( drag.element );
        }
    }
});