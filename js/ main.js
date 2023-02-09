let headingText = document.getElementById('headingText');
let nextButton = document.getElementById('nextButton');
let revealButton = document.getElementById('revealButton');
let subText = document.getElementById('subText');
let proceed = document.getElementById('proceed');
let goButton = document.getElementById('goButton');
let returnButton = document.getElementById('returnButton');
let image = document.getElementById('image');
let page = 0;

//event listeners for Buttons

nextButton.addEventListener("click", nextPage);
goButton.addEventListener("click", nextPage);
returnButton.addEventListener("click", resetPage);
revealButton.addEventListener("click", nextPage);


// need function to go to next page

function nextPage() {
    page++;
    state();
}

// function to return to first page
function resetPage() {
    page = 0;
    state();
}

// need a function to activate the buttons

function show(object) {
    object.style.visibility = 'visible';
}

function hide(object) {
    object.style.visibility = 'hidden';
}

// create array with the symbols
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
let arr = []
for (let i = 0; i < 100; i++) {
    arr.push(i + " " + symbols[i % 9]);
}

// create state with objects with their properties and values

function state() {

    switch (page) {
        case 0:
            headingText.innerHTML = "I can read your mind!";
            hide(nextButton);
            hide(revealButton);
            show(goButton);
            hide(returnButton);
           hide(subText)
           hide(proceed)
            break;

        case 1:
            headingText.innerHTML = "Pick a number from 01 - 99";
            show(nextButton);
            hide(revealButton);
            subText.innerHTML = "when you have your number click next";
            hide(goButton);
            show(returnButton);
            hide(proceed);
            show(subText);
            break;

        case 2:
            headingText.innerHTML = "Add both digits together to get a new number";
            show(nextButton);
            hide(revealButton);
            subText.innerHTML = "Ex. 14 is 1 + 4 = 5";
            show(subText);
            proceed.innerHTML = "click next to proceed";
            show(proceed);
            hide(goButton);
            show(returnButton);
            break;

        case 3:
            headingText.innerHTML = "Subtract your new number from the original number";
            show(nextButton);
            hide(revealButton);
            subText.innerHTML = "Ex. 14 - 5 = 9";
            show(subText);
            proceed.innerHTML = "click next to proceed";
            show(proceed);
            hide(goButton);
            show(returnButton);
            break;

        case 4:
            headingText.innerHTML = arr;
            show(revealButton);
            hide(nextButton);
            subText.innerHTML = "Find your new number";
            show(subText);
            proceed.innerHTML = "Note the symbol beside the number";
            show(proceed);
            hide(goButton);
            show(returnButton);
            break;

        case 5:
            headingText.innerHTML = "&";
            hide(revealButton);
            hide(nextButton);
            subText.innerHTML = "Your symbol is:";
            show(subText);
            proceed.innerHTML = "&";
            show(proceed);
            hide(goButton);
            show(returnButton);
            break;
    }
}

function init() {
    resetPage();
    state();

}

