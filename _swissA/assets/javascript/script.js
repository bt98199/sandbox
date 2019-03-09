$(document).ready(function() {

// Psychic Game

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessHistoryArray = [];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 9;
var letterToGuess = undefined;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-left");
var guessHistoryText = document.getElementById("guess-history");

// Defining Functions
//Build the array of past guessesß

function psyChoice() {
  letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(letterToGuess);
};

function reset() {
guesses = 9;
guessHistoryArray = [];
psyChoice();
}

// Sets the Psychic choice. 
psyChoice();

//******* This function is run whenever the user presses a key*******body*****//
document.onkeyup = function (event) {

// Determines which key was pressed. It is modified to convert all entries to lower case
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Build initial history array
guessHistoryArray.push(userGuess);
//  guessHistoryBuild();

// 3 possible out comes, a win, a loss of guess, or a loss
if (guesses === 0) {
        losses++;
        document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
        alert("You lost, Carnac");
        reset();
      } else if (userGuess === letterToGuess) {
        wins++;
        document.querySelector('#wins-text').innerHTML = "Wins: " + wins;
        alert("You got it, Kreskin!");
        reset();
      } else {
      guesses--;
   }

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses Left: " + guesses;
        document.getElementById('guess-history').innerHTML = "Your Guesses so far: " + (guessHistoryArray.join(", "));
        // Hide the computer choice (used for ease in debugging)
        computerChoiceText.textContent = "";
        //computerChoiceText.textContent = "The computer chose: " + letterToGuess;
}

//------- Number Guess games
$(document).ready(function() {

    console.log("DOM fully loaded and parsed");
    //computer randomly selects a number between 18-120 for player to match
    
    var targetNum = 18 + Math.floor(Math.random() * 120);
    
    //show this number under #numToGuess
    
    $("#target-num").html(targetNum);
    console.log("TargetNum is: " + targetNum);
    
    
    //computer randomly selects a number between 1-12 for each gem
    
    var hemaGem = 1 + Math.floor(Math.random() * 12);
    var redGem = 1 + Math.floor(Math.random() * 12);
    var topazGem = 1 + Math.floor(Math.random() * 12);
    var turqGem = 1 + Math.floor(Math.random() * 12);
    
    //set all variables to 0 (except "Is Active," which is set to active)
    
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var isAct = 1;
    $("#total-num").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
    
    //reset all variables once game is won/lost
    
    function reset() {
        userTotal = 0;
        targetNum = 18 + Math.floor(Math.random() * 120);
        hemaGem = 1 + Math.floor(Math.random() * 12);
        redGem = 1 + Math.floor(Math.random() * 12);
        topazGem = 1 + Math.floor(Math.random() * 12);
        turqGem = 1 + Math.floor(Math.random() * 12);
        console.log("New TargetNum is: " + targetNum);
        $("#target-num").html(targetNum);
        $("#total-num").html(userTotal);
        $("#wins").html(wins);
        $("#losses").html(losses);
        isAct = 1;
    // Make sure none of the gem numbers are identical
        if (hemaGem === redGem || hemaGem === topazGem || hemaGem === turqGem || redGem === topazGem || redGem === turqGem || topazGem === turqGem) {
            console.log("duplicate gemNums, re-rolling data");
            reset();
        }
    }
    
    //if else statement for winning or losing. 
    //if total === random win.
    //if total > random lose.
    
    $("#hide").click(function(){
        $("p").hide();
      });
      
      $("#show").click(function(){
        $("p").show();
      });
    
    function winCheck() {
        if (userTotal == targetNum) {
            wins++;
            $("#total-num").html("(You Won)"+"<br>"+"Final Score: " + userTotal); //    
            $("#wins").html(wins);
     //       reset();  I don't want to reset right after the game ends.  I want to examine the final scores
     //       $("#reset-button" ).toggle();  This is not as useful as show/hide.
            $("#reset-button").show();
            isAct = 0;
            alert("YOU WIN!");
    
        } else if (userTotal > targetNum) {
            losses++;
            $("#total-num").html("(You Lost)"+"<br>"+"Final Score: " + userTotal); //
            $("#losses").html(losses);
     //       reset();
     //       $("#reset-button" ).toggle();
            $("#reset-button").show();
            isAct = 0;
            alert("You lost.");
        }
    };
    
    //whenever user clicks (on.click) a gem, the random number is added to total score.
    //show this number under #total-num
    
    $("#hema").on("click", function() {
        if (isAct === 0) {
            alert("Hit play again button to keep playing");
        } else {
        userTotal += hemaGem;
        console.log("hemaGem is: " + hemaGem + " userTotal is: " + userTotal);
        $("#total-num").html(userTotal);
        winCheck();
    }})
    
    $("#red").on("click", function() {
        if (isAct === 0) {
            alert("Hit play again button to keep playing");
        } else {
        userTotal += redGem;
        console.log("redGem is: " + redGem + " userTotal is: " + userTotal);
        $("#total-num").html(userTotal);
        winCheck();
    }})
    
    $("#topaz").on("click", function() {
        if (isAct === 0) {
            alert("Hit play again button to keep playing");
        } else {
        userTotal += topazGem;
        console.log("topazGem is: " + topazGem + " userTotal is: " + userTotal);
        $("#total-num").html(userTotal);
        winCheck();
    }})
    
    $("#turq").on("click", function() {
        if (isAct === 0) {
            alert("Hit play again button to keep playing");
        } else {
        userTotal += turqGem;
        console.log("turqGem is: " + turqGem + " userTotal is: " + userTotal);
        $("#total-num").html(userTotal);
        winCheck();
    }})
    
    $("#reset-button").on("click", function() {
        reset();
        $("#reset-button").hide();
        isAct = 1;
        
    })


//-------drum key mapping
<audio data-key="65" src="sounds/clap.wav"></audio>
<audio data-key="83" src="sounds/hihat.wav"></audio>
<audio data-key="68" src="sounds/kick.wav"></audio>
<audio data-key="70" src="sounds/openhat.wav"></audio>
<audio data-key="71" src="sounds/boom.wav"></audio>
<audio data-key="72" src="sounds/ride.wav"></audio>
<audio data-key="74" src="sounds/snare.wav"></audio>
<audio data-key="75" src="sounds/tom.wav"></audio>
<audio data-key="76" src="sounds/tink.wav"></audio>
//-------Alert Prompts (won't use much)

alert("We definitely rock!");

// Notice that the confirm and prompt take in variables but the alert doesn't
var doYouRock = confirm("The question is, do *you* rock?");
var howMuchRock = prompt("How much do you rock?");

// Alert the results
alert(doYouRock);
alert(howMuchRock);
//-------Hangman Game
// One-word movie titles to guess
var movieTitles = ['salt', 'argo', 'thor', 'halloween', 'jumanji', 'cinderella', 'gravity', 'titanic'];

// all 26 letters in the alphabet for random input
var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// shows the number of wins
var winCount = 0;

// shows the number of losses
var lossCount = 0;

// drives the win counter
var rightGuessCounter = 0;

// shows the number of attempts left to input more letters to guess a one-word movie title
var guessesRemaining = 10;

// placeholder for the chosen one-word movie title
var randomTitle = "";

// placeholders for letters in the one-word movie title
var lettersInTitle = [];

// number of blanks in the word 
var numBlanks = 0;

// placeholder for blanks and letter with successful hits 
var blanksAndHits = [];

// placeholder for letters with no hits 
var wrongLetters = [];

// Below are functions for the one-word movie title game
function reset(){
    randomTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = randomTitle.split('');     
    numBlanks = lettersInTitle.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesRemaining: 10;
    wrongLetters = [];
    blanksAndHits = [];
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    test=false;
    startGame();
}

function startGame(){
    randomTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = randomTitle.split('');     
    numBlanks = lettersInTitle.length;

    rightGuessCounter = 0;
    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndHits = [];    
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // holds the number of underscores that match a one-word movie title
	for(var i = 0; i< numBlanks; i++){
        blanksAndHits[i] = "_";    
        document.querySelector('#titleToGuess').innerText = blanksAndHits;
    }

    document.querySelector('#titleToGuess').innerText = blanksAndHits.join(' ');
    document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
    document.querySelector('#winCounter').innerText = winCount;
    document.querySelector('#lossCounter').innerText = lossCount;
    document.querySelector('#wrongGuesses').innerText = wrongLetters;

    console.log(randomTitle);
    console.log(lettersInTitle);
    console.log(numBlanks);
    console.log(blanksAndHits);
}

// To display correct guessed letters and wrong letters in their corresponding divs and also decreases the count of remaining guesses accordingly   
function compareLetters (userKey){
    if(randomTitle.indexOf(userKey) > -1){
        for(var i = 0; i < numBlanks; i++){
            if(lettersInTitle[i] === userKey){
                rightGuessCounter++;
                blanksAndHits[i] = userKey;
                document.querySelector('#titleToGuess').innerText = blanksAndHits.join(' ');
            }
        }

        console.log(blanksAndHits);
    }
    else{
        wrongLetters.push(userKey);
        guessesRemaining--;
        
        document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
        document.querySelector('#wrongGuesses').innerText = wrongLetters;
        
        console.log('Wrong letters = ' + wrongLetters);
        console.log('Guesses remaining are ' + guessesRemaining);
    }
}

// To display the counts of wins and losses
function winLose(){
    if(rightGuessCounter === numBlanks){
        winCount++;

        document.querySelector('#winCounter').innerText = winCount;
        reset();
    }
    else if(guessesRemaining === 0){
        lossCount++;

        document.querySelector('#lossCounter').innerText = lossCount;
        reset();
    }
}

// Initiates the code
startGame();

document.onkeyup = function(event){
    test = true;
    var letterGuessed = event.key;
    for(var i = 0; i < alphabetArray.length; i++){
        if(letterGuessed === alphabetArray[i] && test === true){
            var spliceAlphabetArray = alphabetArray.splice(i,1);
            
            console.log('Double word is = ' + alphabetArray[i]);
            console.log('Splice word is = ' + spliceAlphabetArray);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}

//-------Slide show (Timer)

//  Slideshow Activity
//  ** SOLUTION **

// TODO: Put links to our images in this image array.
var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();


//-------
// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {
    $("#lap").on("click", recordLap);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 0;
  var lap = 1;
  
  function reset() {
  
    time = 0;
    lap = 1;
  
    // DONE: Change the "display" div to "00:00."
    $("#display").text("00:00");
  
    // DONE: Empty the "laps" div.
    $("#laps").text("");
  }
  function start() {
  
    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  function stop() {
  
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  }
  function recordLap() {
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
  
    // DONE: Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
  
    // DONE: Increment lap by 1. Remember, we can't use "this" here.
    lap++;
  }
  function count() {
  
    // DONE: increment time by 1, remember we cant use "this" here.
    time++;
  
    // DONE: Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  
  
  // Solution if you would like to put it in an object
  
  // window.onload = function() {
  //   $("#lap").on("click", stopwatch.recordLap);
  //   $("#stop").on("click", stopwatch.stop);
  //   $("#reset").on("click", stopwatch.reset);
  //   $("#start").on("click", stopwatch.start);
  // };
  
  // //  Variable that will hold our setInterval that runs the stopwatch
  // var intervalId;
  
  // // prevents the clock from being sped up unnecessarily
  // var clockRunning = false;
  
  // // Our stopwatch object
  // var stopwatch = {
  
  //   time: 0,
  //   lap: 1,
  
  //   reset: function() {
  
  //     stopwatch.time = 0;
  //     stopwatch.lap = 1;
  
  //     // DONE: Change the "display" div to "00:00."
  //     $("#display").text("00:00");
  
  //     // DONE: Empty the "laps" div.
  //     $("#laps").text("");
  //   },
  //   start: function() {
  
  //     // DONE: Use setInterval to start the count here and set the clock to running.
  //     if (!clockRunning) {
  //       intervalId = setInterval(stopwatch.count, 1000);
  //       clockRunning = true;
  //     }
  //   },
  //   stop: function() {
  
  //     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  //     clearInterval(intervalId);
  //     clockRunning = false;
  //   },
  //   recordLap: function() {
  
  //     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
  //     //       and save the result in a variable.
  //     var converted = stopwatch.timeConverter(stopwatch.time);
  
  //     // DONE: Add the current lap and time to the "laps" div.
  //     $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");
  
  //     // DONE: Increment lap by 1. Remember, we can't use "this" here.
  //     stopwatch.lap++;
  //   },
  //   count: function() {
  
  //     // DONE: increment time by 1, remember we cant use "this" here.
  //     stopwatch.time++;
  
  //     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
  //     //       and save the result in a variable.
  //     var converted = stopwatch.timeConverter(stopwatch.time);
  //     console.log(converted);
  
  //     // DONE: Use the variable we just created to show the converted time in the "display" div.
  //     $("#display").text(converted);
  //   },
  //   timeConverter: function(t) {
  
  //     var minutes = Math.floor(t / 60);
  //     var seconds = t - (minutes * 60);
  
  //     if (seconds < 10) {
  //       seconds = "0" + seconds;
  //     }
  
  //     if (minutes === 0) {
  //       minutes = "00";
  //     }
  //     else if (minutes < 10) {
  //       minutes = "0" + minutes;
  //     }
  
  //     return minutes + ":" + seconds;
  //   }
  // };
  
//-------

    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 100;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

//-------
// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================

// Array of Word Options (all lowercase).
var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

// Computer selected solution will be held here.
var chosenWord = "";

// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution.
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds the letters guessed
var letterGuessed = "";

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS (These are bits of code that we will call upon to run when needed).
// ==================================================================================================

// startGame()
// It's how we we will start and restart the game.
// (Note: It's not being run here. Function declarations like this are made for future use.)
function startGame() {

  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution chosen randomly from wordList.
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  // The word is broken into individual letters.
  lettersInChosenWord = chosenWord.split("");

  // We count the number of letters in the word.
  numBlanks = lettersInChosenWord.length;

  // We print the solution in console (for testing).
  console.log(chosenWord);

  // CRITICAL LINE
  // Here we *reset* the guess and success array at each round.
  blanksAndSuccesses = [];

  // CRITICAL LINE
  // Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Print the initial blanks in console.
  console.log(blanksAndSuccesses);

  // Reprints the guessesLeft to 9.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // Prints the blanks at the beginning of each round in the HTML.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // Clears the wrong guesses from the previous round.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (chosenWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    numGuesses--;

  }

}

// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win!");

    // Update the win counter in the HTML
    document.getElementById("win-counter").innerHTML = winCounter;

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("loss-counter").innerHTML = lossCounter;

    // Restart the game
    startGame();

  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};

//-------
  // Captain Planet JavaScript/jQuery
    // Students: As you observe the code below, notice how jQuery takes a lot of the pain
    // out of actions that might seem tedious with Vanilla JavaScript.
    // jQuery Ready function(encloses all other functions)

    // ==============================

    $(document).ready(function() {

        // Audio Setup
        // ===========
  
        // Create an audio element with JavaScript
        var audioElement = document.createElement("audio");
  
        // Set it's source to the location
        // of our Captain Planet theme song file.
        audioElement.setAttribute("src", "Assets/captainplanet24.mp3");
  
        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
  
        // Pause Button
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });
  
        // Size Buttons
        // ============
  
        // Normal Size
        $(".normal-button").on("click", function() {
          $(".captain-planet").animate({
            height: "300px"
          });
        });
  
        // Larger Size
        $(".grow-button").on("click", function() {
          $(".captain-planet").animate({
            height: "500px"
          });
        });
  
        // Smaller Size
        $(".shrink-button").on("click", function() {
          $(".captain-planet").animate({
            height: "100px"
          });
        });
  
        // Visibility Buttons
        // ==================
  
        // Make Visible
        $(".vis-button").on("click", function() {
          $(".captain-planet").animate({
            opacity: "1"
          });
        });
  
        // Make Invisible
        $(".invis-button").on("click", function() {
          $(".captain-planet").animate({
            opacity: "0.05"
          });
        });
  
        // Move Buttons
        // ============
  
        // Move Captain Planet Upward
        $(".up-button").on("click", function() {
          $(".captain-planet").animate({
            top: "-=200px"
          }, "normal");
        });
  
        // Move Captain Planet Downward
        $(".down-button").on("click", function() {
          $(".captain-planet").animate({
            top: "+=200px"
          }, "normal");
        });
  
        // Move Captain Planet Leftward
        $(".left-button").on("click", function() {
          $(".captain-planet").animate({
            left: "-=200px"
          }, "normal");
        });
  
        // Move Captain Planet to the Right
        $(".right-button").on("click", function() {
          $(".captain-planet").animate({
            left: "+=200px"
          }, "normal");
        });
  
        // Bring Captain Planet Back to His First Position
        $(".back-button").on("click", function() {
          $(".captain-planet").animate({
            top: "50px",
            left: "80px"
          }, "fast");
        });
  
        // Move Events for Keyboard Presses
        // ============================
  
        // Keyboard Up
        $(document).keyup(function(e) {
          switch (e.which) {
          case 38:
            $(".captain-planet").animate({
              top: "-=200px"
            }, "normal");
          }
        });
  
        // Keyboard Down
        $(document).keyup(function(e) {
          switch (e.which) {
          case 40:
            $(".captain-planet").animate({
              top: "+=200px"
            }, "normal");
          }
        });
  
        // Keyboard Left
        $(document).keyup(function(e) {
          switch (e.which) {
          case 37:
            $(".captain-planet").animate({
              left: "-=200px"
            }, "normal");
          }
        });
  
        // Keyboard Right
        $(document).keyup(function(e) {
          switch (e.which) {
          case 39:
            $(".captain-planet").animate({
              left: "+=200px"
            }, "normal");
          }
        });
      });
  
    </script>
  
  </body>
  
  </html>
  
//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------

//-------


















// document.write("<p>Table of Fibonacci Numbers</p>");
// for (i=0, j=1,k=0, fib = 0; i<10; i++, fib = j+k, j=k, k=fib) {
//    document.write("Fibonacci (" + i + ") = " + fib);
//    document.write("<br>");}
});