//Enhance each code to make it how I want.
//This is the welcome message.
function displayWelcome() {
    document.write("<h2>Welcome Space Cowboy!</h2>");
    document.write("<h3>Come sit and play for a bit.</h3>");
}
//This function will display the instructions on how to play
function displayInstructions() {
    document.write("<br/<p>To play, just refresh the page.</p><br/><br/>");
}
//This function is what makes the game work.
function play() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
//This states the paramaters of how someone loses
//and what the page says when someone loses.
    if (sum == 7 || sum == 11) {
        document.write("You lose Space Cowboy")
        document.write("<br/>")
    }
//This sets the paramaters for how someone can win
//and what the message is when theyy win.
    else if (die1 == die2 && die1 % die2 == 0) {
        document.write("DOUBLES - YOU WIN COWBOY!")
        document.write("<br/>")
    }
//This is the middle.
//When someone doesn't win or lose.
    else {
        document.write("Roll again Cowboy")
        document.write("<br/>")
    }
}