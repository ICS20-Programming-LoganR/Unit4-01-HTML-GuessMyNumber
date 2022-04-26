// Created by: Logan Rodriguez
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

const NUMBER = Math.floor((Math.random() * 6) + 1);


//function
function verdict () {
  	// initialize variables
	let answer = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)


  	// if the guess is correct, display "Correct! You get nothing!"
	if (guess == NUMBER) {
		answer = "Correct! You get nothing!"
	} 
	// If the guess is wrong, display "Incorrect. you get nothing."	
	else if (guess != NUMBER) {
		answer = "Incorrect. You get nothing."
	}
  
  // display the results
  document.getElementById('answer').innerHTML = answer
}
