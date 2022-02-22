const h1 = document.getElementById('main-title');

h1.textContent = 'SomeNew Title';
h1.style.color = 'white';
h1.style.backgroundColor = 'red';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed)';


//const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItem of listItemElements) {
    console.dir(listItem);
}

//
//next section
//

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const btn = document.querySelector('button');

//section.style.backgroundColor = 'green';
section.className = 'red-bg';

btn.addEventListener('click', () => {
    /*if (section.className === 'red-bg visible') {
        section.className = 'red-bg invisible';
    } else {
        section.className = 'red-bg visible';
    }*/

    //section.classList.toggle('visible');
    section.classList.toggle('invisible');

});