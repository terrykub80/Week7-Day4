console.log("Let's get to know the document")
console.log(document);
console.log(document.body);

let body = document.body;
console.dir(body);

let children = body.children;
console.log(children);

let navBar = children[0];
console.log(navBar);
console.dir(navBar);

navBar.className = 'navbar bg-primary-subtle';

// Popular Methods with the Document object

console.log("====Document get methods======");
// Document get methods

console.log("====document.getElementById('id')======");

// document.getElementById('id')
// return the first element with an id that matches the strting id
let myHeader = document.getElementById('top-header');
console.log(myHeader);

console.log("====document.getElementsByTagName('tagName')======");
// document.getElementsByTagName('tagName')
// return an HTMLCollection (Array-like) of all eleemnts that match by tag name
let myButtons = document.getElementsByTagName('button');
console.log(myButtons);

console.log("=====document.getElementsByClassName('className')=====");
// document.getElementsByClassName('className')
// return an HTMLCollection (Array-like) of all eleemnts that match by class name
let myRows = document.getElementsByClassName('row');
console.log(myRows);


console.log("====document.querySelector('selector')======")
// document.querySelector('selector');
// return the FIRST element that matches the specified selector
let firstCol = document.querySelector('.col-2'); // Simple Selector
console.log(firstCol);

let divInNav = document.querySelector('nav > div'); // Combinator Selector
console.log(divInNav);

console.log("====document.querySelectorAll('selector')======");
// document.querySelectorAll('selector')
// return a NodeList (Array-like) of elements that match the specified selector
let allTwoCols = document.querySelectorAll('.col-2');
console.log(allTwoCols);

let allDivsInNav = document.querySelectorAll('nav > div');
console.log(allDivsInNav);

let firstGroupButtons = document.querySelectorAll('.row button'); // general descendant
console.log(firstGroupButtons);


console.log("====Create Elements with document method======");
// Create Elements with document method

console.log("====// document.createElement('tagName')======");
// document.createElement('tagName')
// Create an element with the given tag name
let newHeader = document.createElement('h4');
newHeader.innerHTML = 'Header created by JavaScript';
newHeader.className = 'text-center text-primary';
newHeader.style.backgroundColor = 'red';
console.log(newHeader);
console.dir(newHeader);

console.log("=====Add our new header to the end of the body=====")
// body.append(newHeader);

console.log("====Add to container instead======")
let myContainer = document.querySelector('.container');
console.log(myContainer)
myContainer.append(newHeader);


console.log("=====Create a new button=====")
// Create a new button
let newButton = document.createElement('button');
newButton.innerHTML = 'New Button';
myRows[0].append(newButton)


// HTMLCollection is live and recognized new button
console.log(myButtons)
// Nodelist is static and does not recognize
console.log(firstGroupButtons)




console.log("==========")