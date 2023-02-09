let headingText = document.getElementById('headingText');
let nextButton = document.getElementById('nextButton');
let subText = document.getElementById('subText');
let goButton = document.getElementById('goButton');
let returnButton = document.getElementById('returnButton');



// need function to go to next page.. increment from 0   i++



//event listeners for Buttons

nextButton.addEventListener("click", myFunction);
goButton.addEventListener("click", myFunction);
returnButton.addEventListener("click", myFunction);

// need to create event listeners for goButton to go to next page on page 1.... but return to page 1 on page 2,3,4,5,6,

// need a function when to activate what button

function show(object) {
object.style.visibility = 'visible';
}

function hide(object) {
    object.style.visibility = 'hidden';
    }

// create array with symbols and when to display what symbol based on number

// create state with objects with their properties and values-- below

// create cards with objects (atoms and molecules) and when to print what value ie. card 1 list 3 buttons and what buttons are active... 
// what text is written on the card

function state() {

    switch (page) {
    case 0:
    show(goButton)
    headingText.innerHTML = "I can read your mind"
    break;

    case 1:
    // atoms and molecules


    break;
    case 2:
    // atoms and molecules


    break;
    case 3:
    // atoms and molecules


    break;
    case 4:
    // atoms and molecules


    break;
    case 5:
    // atoms and molecules


    break;
} 
}

