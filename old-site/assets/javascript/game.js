// Global Variables

// Array with all possible cities to be chosen
// var cities22 = ["beijing", "london", "moscow", "orlando", "paris", "rome", "sydney", "tokyo", "amsterdam", "athens", "barcelona", "berlin", "brasilia", "chicago", "dublin", "havana", "hiroshima", "istanbul", "liverpool", "madrid", "miami", "montreal", "prague", "seoul", "windsor", "munich", "toronto", "manchester", "melbourne", "wellington", "santiago", "medellin", "lisbon", "cairo", "montevideo", "bangkok", "warsaw", "brussels", "venice", "zurich", "osaka"];

var cities = ["argentina", "brazil", "usa", "mexico", "canada", "colombia", "jamaica", "chile", "portugal", "spain", "france", "italy", "germany", "england", "ireland", "scotland", "belgium", "poland", "sweden", "norway", "greece", "russia", "india", "china", "japan", "zimbabwe", "egypt", "thailand", "vietnam", "australia", "iraq", "malaysia", "cuba", "morocco", "ukraine", "turkey", "indonesia", "hungary", "finland", "denmark", "croatia"];

// Variable to store the chosen city to be played in each round
var cityInPlay = null;

// Array with each letter that forms the chosen city
var cityLetters = [];

// letter guessed by the user by pressing the keyboard buttons
var letterGuessed = null;

// Array with all wrong letters guessed by user
var guessedLetters = [];

// Array with all correct letters guessed by user
var matchedLetters = [];

// create a variable to store the cityInPLay word in a string
var wordView = "";

// Number of wrong guesses left
var guessesLeft = 10;

// Number of games the user won
var wins = 0;

// Number of games the user lost
var losses = 0;

$('#keyboard').hide();
$('#home-score').hide();
$(".btn-restart").hide();

// Start Screen Button
$(".btn-start").click(function(){
	$('#keyboard').show();
	$('#home-score').show();
	$('#start-button').hide();	
});

//call function to setup game
setupGame();

// Set Up and start game
function setupGame() {

	// Randomly choose 1 city from the cities array 
	// and store it in the cityInPlay variable
	cityInPlay = cities[Math.floor(Math.random() * cities.length)];

	console.log(cities.length);
	
	// Split the letters from chosen city
	// and store in in the cityLetters Array
	cityLetters = cityInPlay.split('');
	
	// print the Wrong Guesses Left current no. to page
	$('#guesses').html(guessesLeft);

	// print number of wins
	$('#wins').html(wins);

	// print number of losses
	$('#losses').html(losses);


	// call the displayCity function to move the game on
	displayCity();

}

// function to register user letter keyboard clicks
function keyboardClick () {

	$('.btn-outline-primary').click(function () {

	    if (this.id == 'btn-a') {
	        letterGuessed = "a";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-b') {        
	        letterGuessed = "b";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-c') {        
	        letterGuessed = "c";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-d') {        
	        letterGuessed = "d";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-e') {        
	        letterGuessed = "e";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-f') {        
	        letterGuessed = "f";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-g') {        
	        letterGuessed = "g";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-h') {        
	        letterGuessed = "h";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-i') {        
	        letterGuessed = "i";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-j') {        
	        letterGuessed = "j";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-k') {        
	        letterGuessed = "k";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-l') {        
	        letterGuessed = "l";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-m') {        
	        letterGuessed = "m";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-n') {        
	        letterGuessed = "n";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-o') {        
	        letterGuessed = "o";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-p') {        
	        letterGuessed = "p";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-q') {        
	        letterGuessed = "q";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-r') {        
	        letterGuessed = "r";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-s') {        
	        letterGuessed = "s";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-t') {        
	        letterGuessed = "t";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-u') {        
	        letterGuessed = "u";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-v') {        
	        letterGuessed = "v";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-w') {        
	        letterGuessed = "w";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-x') {        
	        letterGuessed = "x";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-y') {        
	        letterGuessed = "y";
	        callLetter();
	        $(this).hide();
	    	} else if (this.id == 'btn-z') {        
	        letterGuessed = "z";
	        callLetter();
	        $(this).hide();
	    	}   	
	});

}

// call function to register letter keyboard clicks
keyboardClick();

// Display random city on page with dashes to be filled in
function displayCity () {

	// loop through the cityLetters array
	for (var i=0; i < cityLetters.length; i++){

			// if the cityLetter is in the matchedLetters array
			if (matchedLetters.indexOf(cityLetters[i]) != -1){
				// add the cityLetter to the wordView string
				wordView += cityLetters[i];			
			} else {
				// if not, print the dashes to be filled in
				wordView += '&nbsp;*&nbsp;';
			}
	}

	// print the vordView string variable to the page
	$('#city').html(wordView);

}

function callLetter () { 
	// if the letter guessed by user is right
	// and NOT already in the matched letters array
	if ((cityLetters.indexOf(letterGuessed) != -1) && (matchedLetters.indexOf(letterGuessed) == -1)){ 

		// call the function to update right guesses
		correctUpdate();

	} else {
		// if not, call the function to update wrong guesses
		wrongUpdate();

	}

}

// Update the city display on page
function displayUpdate () {

			// set the wordView to display the updates
			var wordView = "";

			// loop through the cityLetters array
			for (var i=0; i < cityLetters.length; i++){

			// if the cityLetter is in the matchedLetters array
			if (matchedLetters.indexOf(cityLetters[i]) != -1){
				// add the cityLetter to the wordView string
				wordView += cityLetters[i];			
			} else {
				// if not, print the dashes to be filled in
				wordView += '&nbsp;*&nbsp;';
			}
		}

		// print the updated wordView string to the page
		$('#city').html(wordView);

}

// Update correct guesses
function correctUpdate () {

	// loop through the array of letters of the City in play
	for (var i = 0; i < cityLetters.length; i++) {

			// if the letter guessed by the user
			// is equal to any of the city Letters
			// and is NOT already in the matched letters array
			if ((letterGuessed === cityLetters[i]) && (matchedLetters.indexOf(letterGuessed) == -1)){

				// insert the letter into the matched letters array
				matchedLetters.push(letterGuessed);}

				// checking if there are duplicate letters in word
			else if ((letterGuessed === cityLetters[i + 1])) {

				matchedLetters.push(letterGuessed);
			};
	}

	// call the function to update the city display on page
	displayUpdate();

	// End game if user gets the word right (win) or runs out of guesses (loss)
	if (guessesLeft == 0) {
			youLose();
	 } 	else if (matchedLetters.length == cityLetters.length) {
			youWin();
	}

}

// Update Wrong Guesses
function wrongUpdate () {

	// if the letter guessed by the user
	// is NOT in the already guessed letters array
	// and is a wrong guess - not part of the city word
	if ((guessedLetters.indexOf(letterGuessed) == -1) && (cityLetters.indexOf(letterGuessed) == -1)){

		// decrease the numer of guesses left by one
		guessesLeft--;

		// put the letter in the already guessed array
		guessedLetters.push(letterGuessed);

		// print the updated no. of guesses left to page
		$('#guesses').html(guessesLeft);

		// print the already guessed letter to page
		$('#letters-guessed').html(guessedLetters.join(' - ').toUpperCase());
	}


	// End game if user gets the word right (win) or runs out of guesses (loss)
	if (guessesLeft == 0) {
			youLose();
	 } 	else if (matchedLetters.length == cityLetters.length) {
			youWin();
	}

}


// Function to end game when user wins
function youWin () {

	// increase the Wins score by one
	wins++;

	// Update the Wins score on the page
	$('#wins').html(wins);

	// Hide Keyboard
	$('#keyboard').hide();
	$('#guesses-home').hide();

	// print the "YOU WIN" phrase to the page
	$('#news').html("<h3><font color='blue'>CONGRATS, YOU WIN!</font></h3>");

	// print the city image to the page
	$('#picture').html('<img src="assets/images/' + cityInPlay + '.jpg" width="95%" height="95%">');

	// Show the Restart button and call Restart function on click
	$(".btn-restart").show();

	$(".btn-restart").click(function(){
		restartGame();
	});	

}

// Function to end the game when user loses 
function youLose() {

	// increase the Loss score by one
	losses++;

	// Update the Loss score on the page
	$('#losses').html(losses);

	// Hide Keyboard
	$('#keyboard').hide();
	$('#guesses-home').hide();

	// print the "YOU LOSE" phrase to the page
	$('#news').html("<h3><font color='red'>YOU LOSE, TRY AGAIN!</font></h3>");
	
	// Show the Restart button and call Restart function on click
	$(".btn-restart").show();

	$(".btn-restart").click(function(){
		restartGame();
	});	
}

// restart the game so users can keep playing
function restartGame() {

	// reset game variables
	wordView = "";
	cityInPlay = null;
	cityLetters.length = 0;
	matchedLetters.length = 0;
	guessedLetters.length = 0;
	guessesLeft = 10;
	letterGuessed = null;
	wins = wins;
	losses = losses;

	$(".btn-restart").hide();
	$('#keyboard').show();
	$(".btn-outline-primary").show();
	$('#guesses-home').show();

	// reset the already guessed letters sectio
	$('#letters-guessed').html(guessedLetters.join(' - ').toUpperCase());

	// reset the Wrong Guesses Left section
	$('#guesses').html(guessesLeft);

	// print the current number of wins
	$('#wins').html(wins);

	// // print current number of losses
	$('#losses').html(losses);

	// reset the News div
	$('#news').html("");

	// reset the Picture div
	$('#picture').html("");

	// call function to start game again
	setupGame();

}