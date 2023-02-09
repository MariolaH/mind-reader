let headingText = document.getElementById('headingText');
let nextButton = document.getElementById('nextButton');
let revealButton = document.getElementById('revealButton');
let subText = document.getElementById('subText');
let proceed = document.getElementById('proceed');
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
            headingText.innerHTML = "I can read your mind!";
            hide(nextButton);
            hide(revealButton);
            show(goButton);
            hide(returnButton);
            break;

        case 1:
            headingText.innerHTML = "Pick a number from 01 - 99";
            show(nextButton);
            hide(revealButton);
            subText.innerHTML = "when you have your number click next";
            hide(goButton);
            show(returnButton);
            break;

        case 2:
            headingText.innerHTML = "Add both digits together to get a new number";
            show(nextButton);
            hide(revealButton);
            subText.innerHTML = "Ex. 14 is 1 + 4 = 5";
            proceed.innerHTML = "click next to proceed";
            hide(goButton);
            show(returnButton);
            break;

        case 3:
            headingText.innerHTML = "Subtract your new number from the original number";
            show(nextButton);
            hide(revealButton);
            subText.innerHTML = "Ex. 14 - 5 = 9";
            proceed.innerHTML = "click next to proceed";
            hide(goButton);
            show(returnButton);
            break;

        case 4:
            headingText.innerHTML = "0 - & <br> 1 - @ <br> 2 - $ <br> 3 - B <br> ...";
            show(revealButton);
            hide(nextButton);
            subText.innerHTML = "Find your new number";
            proceed.innerHTML = "Note the symbol beside the number";
            hide(goButton);
            show(returnButton);
            break;

        case 5:
            headingText.innerHTML = "&";
            hide(revealButton);
            hide(nextButton);
            subText.innerHTML = "Your symbol is:";
            proceed.innerHTML = "&";
            hide(goButton);
            show(returnButton);
            break;
    }
}

