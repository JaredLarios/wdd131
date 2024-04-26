// Get Web Element
const LIMIT = 10
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// Append Element in list
const postElement = () => {
    let listLi = document.querySelectorAll('li').length
    // If not vale on input
    if (input.value.trim() !== '') {
        // Craete Web Elements
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        // Populate Web Elements
        li.textContent = input.value;
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