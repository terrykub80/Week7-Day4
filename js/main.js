console.log("========")

console.log("====Create an array for the colors====")

// Create an array for the colors (based on Bootstrap color scheme)
let buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']; 

console.log("====Get the color buttons====")
// Get the color buttons
let colorButtons = document.querySelectorAll('.col-2 > button')
console.log(colorButtons)
console.log(buttonColors)

console.log("====Loop through the buttons====")
// Loop through the buttons and apply button color to class name
for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].className = `btn btn-${buttonColors[i]}`
    // add an event listener to change the body background color (via Bootstrap class)
    
    colorButtons[i].addEventListener('click', () => {
        let body = document.body;
        body.className = `bg-${buttonColors[i]}`
    })
};


console.log("===Create a new header between buttons and form=====")
// Create a new header and add it under the buttons in the container, but before
// the form row

let newHeader = document.createElement('h4');
newHeader.id = 'myHeader';
newHeader.className = 'text-center mt-3';
newHeader.innerHTML = 'Created by Terry with the help of JavaScript';
newHeader.style.color = 'black'
console.log(newHeader)

// Add the header after the button row

// ****Get the row of buttons
let allRows = document.getElementsByClassName('row');
let buttonRow = allRows[0]
console.log(buttonRow);

// ****Add the new header AFTER the button row (vs appending as the last child of button row)
buttonRow.after(newHeader)


// Create a listener function - function to be executed when our event triggers
function handleHeaderEvent(event){
    console.log(event);
    let elementToChange = event.target;
    console.log(elementToChange);
    if (elementToChange.style.color === 'black'){
        elementToChange.style.color = 'red';
        document.body.className = ``
    } else {
        elementToChange.style.color= 'black';
        document.body.className = ``
    }
}


// Add thte handleHeaderEvent as an event listner on the header
newHeader.addEventListener('mouseover', handleHeaderEvent)



console.log("========")
