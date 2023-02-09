Questions
Is page the same as state?
How do we transition pages with only Javascript? - we make a nextPage or setPage function to update our state object. 
Can I reuse the go button and change the click event on it to serve both purposes?
HTML/CSS
Atoms
Header (1, 2, 3, 4, 6)
Paragraph Text (2, 3, 4, 5, 6)

Organism
Go Button (1) - Goes to the second page 
Reset Button (2, 3, 4, 5, 6) - Returns to the first page (has icon in it)
Next/Reveal Button (2, 3, 4, 5) - Goes to next page
Scrollable Numbers panel (5)
Objectives
All multiples of 9 will get the same symbol to get the mind reader portion to work.
Only one single html element
Manage the state with JS
On a reload of the screen we should start at page 1
Variables
resetButton 
currentView - which page we’re on in the application
symbols - array [‘!’, ‘@’, ‘#’, ‘$’. ‘%’, ‘^’, ‘&’, ‘*’, ‘(‘] (length of 9)
we could write a function that randomizes them (this is a little stretch goal)
expands to 99 total (for loop)
pages
Array of objects
Use the index of the array to pick the object in the array to match the page we’re on
headerText - text content
nextButton - visibility / text
paragraphText - visibility / text

Functions
setPage()
Could be used on page 1 as GO Button
Then used on Pages 2-5 on the next/reveal button
When a button is clicked we update the currentPage in the state object to reflect the intended. 
Click on next button will increment the currentPage in state by 1
Click on the reset button will set the currentPage back to 1
reset()
create99Symbols()
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(']
let arr = []
for (let i = 0; i < 100; i++) {
    		arr.push(i + " " + symbols[i % 9]);
}



Procedures

INIT
    State is initialized
    Page renders with page 1 content



MINDER READER:

Objective: 

1. intro.... i can read your mind
2. pick a number between 01 - 99
3. add digits of picked number together
4. subtract new number from original 
5. new number = a symbol
6. reveal symbol on next page

total cards: 6

essentially each card will be the same, only things that changes:

    Atoms
        Header (1, 2, 3, 4, 6)
        Paragraph Text (2, 3, 4, 5, 6)

    Organism
        Go Button (1) - Goes to the second page 
        Reset Button (2, 3, 4, 5, 6) - Returns to the first page (has icon in it)
        Next/Reveal Button (2, 3, 4, 5) - Goes to next page
        Scrollable Numbers panel (5)

In html can create 1 card and have sections (ie,header, paragraph... change when going from card to card)

JS

let state {
   create a array for each item on the card, 
   create a 
header:[]
Paragraph:[]            insert all the values from each page
square button
round button
}

<!-- on currentPage 1 run data from each object in index 0
on currentPage 2 run data from each object in index 1
on currentPage 3 run data from each object in index 2
on currentPage 4 run data from each object in index 3
on currentPage 5 run data from each object in index 4
on currentPage 6 run data from each object in index 5 -->

symbols - needs to be in an if statement
    ... if pick number 12... this symbol appears

 buttons:

 location of buttons does not change... 
 only thing that changes is logo and writing on button and funtionality

    next button from pages 2-5 goes to next page... no next on page 1
    go button page 1 -go
                   2-6 resets game


 essentially 

click next go to next page
click rest takes ypu back to homepage

function
 for each card that has all the objects each card

card 1 {
header:[]
Paragraph:[]         
square button
round button
}

card 2 {
header:[]
Paragraph:[]         
square button
round button
}

etc

need functions to turn on/off buttons or reset - insert those in card array