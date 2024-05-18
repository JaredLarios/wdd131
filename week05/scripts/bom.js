// Get Web Element
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

// Display chapter 
chapterArray.forEach( chapter => {
    displayList(chapter);
});

// Get Index to Drag and Drop
const getIndex = (list, target) => {
    for(let i = 0; i < list.length; i += 1) {
        if (list[i] === target) { return i }
    }
}

// DOM Event to Add element in list
button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

// Display Element list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    console.log('I like to copu code instead of typing it out myself and trying to understand it.')
}

// Set the list of Chapters in local storage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

// Get the list of Chapters in local storage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'))
}

// Delete chapter in list and update array in local storage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chapterArray = chapterArray.filter(item => item !== chapter)
    setChapterList()
}