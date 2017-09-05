	//Rock - Paper - Scissors game
			//Game setup											
function rpsGame() {
	var player = prompt("Choose: Rock, Paper or Scissors ?");					//player choses his choise

	if (player == "Rock" || player == "Paper" || player == "Scissors") {
		alert("Your choice: " + player);									//alert the player
		var computer = Math.random();										//computer's random number
		console.log(computer);												//console log of random number

		if (computer < 0.34) {
			computer = "Rock";
		}
		else if (computer > 0.67) {
			computer = "Paper";																			
		}
		else {
			computer = "Scissors";											
		}																//making random number into one of the choices

		console.log("Computer randomed: " + computer);
		alert("Computer randomed: " + computer);						//alert of computer's random choice
	}
	else {
		alert("No such choice! Choose again! \nChoices are case sensitive!");		//alert for incorrect prompt
	}

				//declaring a winner
	if (player == computer ) {										//draw case
		console.log("Draw!");
		alert("It's a draw!");										//display result in case of draw
	}
	else if (player === "Rock") { 									//other cases and display of winner
		if (computer === "Paper") {
			console.log("Computer wins!");
			alert("Computer wins!");
		}
		else {
			console.log("You win!");
			alert("You win!");
		}
	}

	else if (player === "Paper") {
		if (computer === "Scissors") {
			console.log("computer wins!");
			alert("Computer wins!");
		}
		else {
			console.log("You win!");
			alert("You win!");
		}
	}

	else if (player === "Scissors") {
		if (computer === "Rock") {
			console.log("Computer wins!");
			alert("Computer wins!");
		}
		else {
			console.log("You win!");
			alert("You win!");
		}
	}
}
	//end of rock-paper-scissors game script
