
// print number Array list
function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

// print HTML string
function print(html) {
  document.write(html);
}

// object example
var person = {
  name: "Sarah",
  country: "USA",
  skills : ['Javascript', "Java", 'VB.net']
}

// Arrow Function
const sayBye = () => {
  console.log("Bye " + name);
}

// Get Element DOM
const myHeading = document.getElementById('myHeading')
// Set Heading to red
myHeading.addEventListener("Click", () => {
  myHeading.style.color ='red';
})

document.GetElementsByTagName('li');
document.querySelectorAll('#rainbow li');


// Query Selector 
document.querySelector('li'); // Only first
document.querySelectorAll('li');
document.querySelector('#myHeading');
document.querySelector('.error-not-purple');
// <p title="label">Things that are purple:</p>
document.querySelector('[title=label]');

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i+=1) {
  errorNotPurple[i].style.backgroundColor = 'lightgray';
}


// Identical 
const myElement = document.getElementById('myId');
const myElement = document.querySelector('#myId');


// Adding elements to DOM
const contentDiv = document.getElementById("content");
let newParagraph = document.createElement('p');

newParagraph.className = "panel";

contentDiv.appendChild(newParagraph);

// Remove Elements from Page
const contentDiv = document.getElementById("content");
let li = document.querySelector('li:last-child');
contentDiv.removeChild(li);

// Remove Elements from Page
let myList = document.querySelector('ul');
let firstListItem = document.querySelector('li');
myList.removeChild(firstListItem);

// Pass function into function
function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

exec(say, 'Hi, there');

function exec(func, arg) {
  func(arg);
}

// Another way to do it
exec2((something) => {
  console.log(something);
}, 'Hi, there');

// Delay
// window.setTimeout(func, delay, arg)
window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings, everyone!');

// Manipulate DOM
function attachListItemsButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'up';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

// First element child parentNode.firstElementChild .lastElementChild
// nextElementSibling

const section = document.querySelector('section');
let paragraphs = section.children;
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue';
}