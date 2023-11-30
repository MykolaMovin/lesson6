// Practical task 1
document.getElementById('test').innerHTML = 'Last';
document.querySelector('[id="test"]').outerHTML = '<div id="test">Last</div>';

// Practical task 2
const imageElement = document.querySelector('.image');
imageElement.setAttribute('src', 'cat.jpg');
alert(imageElement.outerHTML);

// Practical task 3
document.querySelectorAll('#text p')
    .forEach((p, index) => console.log('Selector text ' + index + ': ' + p.innerHTML));

// Practical task 4
const list = document.getElementById('list');
const firstListItem = list.firstElementChild.innerHTML;
const lastListItem = list.lastElementChild.innerHTML;
const secondListItem = list.firstElementChild.nextElementSibling.innerHTML;
const fourthListItem = list.lastElementChild.previousElementSibling.innerHTML;
const thirdListItem = list.children[2].innerHTML;

alert(`${firstListItem}, ${lastListItem}, ${secondListItem}, ${fourthListItem}, ${thirdListItem}`);

// Practical task 5
document.querySelector('span').hidden = true;
document.querySelector('h1').style.backgroundColor = 'green';
document.getElementById('myDiv').firstElementChild.style.fontWeight = 'bold';
document.getElementById('myDiv').children[1].style.color = 'red';
document.getElementById('myDiv').children[2].style.textDecoration = 'underline';
document.getElementById('myDiv').lastElementChild.style.fontStyle = 'italic';
document.getElementById('myList').style.display = 'flex';
document.getElementById('myList').style.listStyleType = 'none';

// Practical task 6
const firstMessage = prompt('Please enter first message');
const secondMessage = prompt('Please enter second message');

document.getElementById('input1').value = firstMessage;
document.getElementById('input2').value = secondMessage;

const input1Value = document.getElementById('input1').value;
const input2Value = document.getElementById('input2').value;

document.getElementById('input1').value = input2Value;
document.getElementById('input2').value = input1Value;