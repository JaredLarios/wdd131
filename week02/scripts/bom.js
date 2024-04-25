// Get Web Element
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Craete Web Elements
const li = document.createElement('li');
const deleteButton = document.createElement('button');

// Append Element in list
const postElement = () => {
    // If not vale on input
    if (input.value.trim() !== '') {
        // Populate Web Elements
        li.textContent = input.value;
        deleteButton.textContent = 'x';

        // Render DOM Element
        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();
    } else {
        // Focus input element if is empty
        input.focus();
    }
}

const deleteElement = () => {
    // Remove elements
    list.removeChild(li);
    input.focus();
}

// DOM Event
button.addEventListener('click', postElement);
deleteButton.addEventListener('click', deleteElement);
