
var userChoice;

function getname(img) {
	userChoice = img.name;
	console.log ("Your choice: " + userChoice);
}

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "Paper";
}
else if (computerChoice > 0.66) {
	computerChoice = "Scissors";
}
else {
	computerChoice = "Rock";
}
console.log ("Computer's choice: " + computerChoice);



var compare = function(user, computer) {
	
	var result;
	if (user === "Paper") {
		if (computer === "Rock") {
			result = "You win!";
		}
		else if (computer === "Scissors") {
			result = "Computer wins!";
		}
		else {
			result = "It's a tie!";
		}
	}
	else if (user === "Rock") {
		if (computer ==="Paper") {
			result = "Computer wins!";
		}
		else if (computer === "Scissors") {
			result = "You win!";
		}
		else {
			result = "It's a tie!";
		}
	}
	else {
		if (computer === "Paper") {
			result = "You win!";
		}
		else if (computer === "Rock") {
			result = "Computer wins!";
		}
		else {
			result = "It's a tie!";
		}
	}
	document.getElementById('yourChoice').style="opacity: 1";
	yourChoice.innerHTML = "<p>" +result+ "</p>";
}




function addClass(){
	if (computerChoice === "Paper") {
	 document.getElementById('blank1').style="background-image: url('images/paper.png'); transform: rotateY(180deg)"; 
	}
	else if (computerChoice === "Scissors") {
	 document.getElementById('blank1').style="background-image: url('images/scissors.png'); transform: rotateY(180deg)"; 
	}
	else if (computerChoice === "Rock") {
	 document.getElementById('blank1').style="background-image: url('images/rock.png'); transform: rotateY(180deg)"; 
	}
}




function refreshPage(){
    window.location.reload();
}