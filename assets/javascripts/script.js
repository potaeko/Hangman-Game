// Creating Global variables, they start at 0.
//Names to guess
var names = ['beyonce', 'drake', 'drdre', 'eminem', 'johnmayer', 'justinbieber', 'kanyewest', 'maroon5'];
//Track Win and Loss Score
var wins = 0;
var losses = 0;
//How many times user can guess
var choicesLeft = 0;
//user use to show
var lettersUsed = [];
//Pick a random name
var randomName = [];
//show _ and letters
var currentWord = [];
//Condition to cut down choicesLeft
var guessed = false;
//what user press on keyboard
var userGuess = '';

//Songs List
var song1 = new Audio("assets/songs/beyonce.mp3");
var song2 = new Audio("assets/songs/drake.mp3")
var song3 = new Audio("assets/songs/drdre.mp3");
var song4 = new Audio("assets/songs/eminem.mp3");
var song5 = new Audio("assets/songs/johnmayer.mp3");
var song6 = new Audio("assets/songs/justinbieber.mp3");
var song7 = new Audio("assets/songs/kanyewest.mp3");
var song8 = new Audio("assets/songs/maroon5.mp3");

//The Game Will Reset When Page Refresh 
window.onload = function () {
    reset();
};

//Reset Function
function reset() {
    wins = wins;
    losses = losses;
    lettersUsed = [];
    currentName = [];
    randomName = [];
    userGuess = '';
    choicesLeft = 0;
    printDocument();
};

//Pick Random Name Function
function wordChosen() {
    // Randomly chooses a choice from names array. This is the Computer's guess.
    currentName = [];
    randomName = names[Math.floor(Math.random() * names.length)];
    //How many time the user can guess equal randomName length
    choicesLeft = randomName.length;
    //Fill up currentName with '_'
    for (var i = 0; i < randomName.length; i++) {
        currentName[i] = "_";
    }
};

//Play Function
function playHangman() {
    //If guesses remain
    if (choicesLeft !== 0) {
        //check if letter is match
        for (var i = 0; i < randomName.length; i++) {
            if (userGuess === randomName[i]) {
                //Show correct letter in currentName
                currentName[i] = randomName[i];
                //choicedLeft remain when the letter matched
                guessed = true;
            }
        };
        //Wrong guess
        if (guessed === false) {
            //choicedLeft minus one when the letter not match
            choicesLeft--;
        }
        //Win-Loss Condition
        var complete = true;
        //Check if still have '_' in currentName Array
        for (var i = 0; i < randomName.length; i++) {
            if (currentName[i] === "_") {
                complete = false;
            }
        };
        //Win Condition
        if (complete) {
            //set back to 0
            choicesLeft = 0;
            //Track Wins Score
            wins++;
            //Play Song!
            if (randomName == 'beyonce') {
                song1.play();
            } else if (randomName == 'drake') {
                song2.play()
            } else if (randomName == 'drdre') {
                song3.play()
            } else if (randomName == 'eminem') {
                song4.play()
            } else if (randomName == 'johnmayer') {
                song5.play()
            } else if (randomName == 'justinbieber') {
                song6.play()
            } else if (randomName == 'kanyewest') {
                song7.play()
            } else if (randomName == 'maroon5') {
                song8.play()
            }
        };

        //When no Guess Remain Left and Complete Failed
        if ((choicesLeft === 0) && (complete === false)) {
            //Track Losses score
            losses++;
            //Show The Correct Name
            for (var i = 0; i < randomName.length; i++) {
                currentName[i] = randomName[i];
            };
        };
    };
};

//Print To HTML Page Function
function printDocument() {
    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses
    // Left Section
    var left =
        "<h2>Who? " + '<br>' + currentName.join(" ") + "</h2>";
    // Right Section
    var right =
        "<h3>Oh Yeah!: " + wins + "</h3>" +
        "<h3>Nah: " + losses + "</h3>" +
        "<h3>Remains: " + choicesLeft + "</h3>" +
        "<h3>Already Guessed!: " + lettersUsed + "</h3>";
    // Set the HTML contents to our html string
    document.querySelector("#guess-box").innerHTML = left;
    document.querySelector("#answer-box").innerHTML = right;
};

//User Click Play Button To Load Functions
document.getElementById('playbtn').onmousedown = function play() {
    reset();
    wordChosen();
    playHangman();
    printDocument();
};

//User presses a key to start function to play
document.onkeyup = function (event) {
    //Set userGuess to the keyboard pressed.
    userGuess = event.key;
    // console.log('keypress function: ' + userGuess)
    //Pushing the values from keyboard pressed to show what user already guessed
    lettersUsed.push(userGuess);
    guessed = false;
    playHangman();
    printDocument();
};