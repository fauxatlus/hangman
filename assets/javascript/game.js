//JavaScript Document
var $ = function (id) {
    return document.getElementById(id);
}



//main variables
var game = ["pikachu", "bulbasaur", "charmander", "squritle","jigglypuff","meowth","gengar"];
var choice = Math.floor(Math.random()*7);
var answer= game[choice];
var myLength= answer.length;
var display=[myLength];
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 15;
var output="";
var userLetter="";
var guessedLetters=[];



//setup game
var setup = function(){
for (var i = 0; i < answer.length; i++)
{
    display[i] = "_ "; 
    output = output+display[i]; 
}
document.getElementById("game").innerHTML = output;
output ="";
}


//

function submit()
{

    output = "";
    userLetter=$("letter").value;
    guessedLetters.push(userLetter);
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    $("letter").value ="";

    for (var c=0; c< answer.length; c++)
    {
        
        if (userLetter === letters[c])
        {
            display[c] = userLetter;
            win --;
        }
        output = output + display[c] + " "; 
        
        
    }


    document.getElementById("game").innerHTML = output;
    output="";
    attemptsLeft--;


    
    if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = "YOU LOSE";
    } else if (win < 1) {
        document.getElementById("guesses").innerHTML = "YOU WIN";
    } else {
        document.getElementById("guesses").innerHTML ="You have " + attemptsLeft + " guesses left";
    }
}










window.onload= function()
{
    setup();
   
}







//what needs to be fixed 

//fix correct guesses

//word bank for already guessed letters 

//and if else for no letter input

