
//1. create  variables: random number + 4 crystal variables + wins, losses, and total score to compare to the random variable
//2. generate random number (0-100) and display it
//3. generate a random number for each button (0-25) and do not display it
//4. add the button number to the total score
//5. If total score === random number: YOU WIN
//6. If total score > random number: YOU LOSE

$(document).ready(function() {
    //1. global variables
    var randomNumber;
    var wins = 0;
    var losses = 0;
    var totalScore;
    

//2. how the game starts and resets

    function resetGame() {
        //you don't want to reset the other variables every time you win or lose because it will set everything to 0
        totalScore = 0;
        //gnerate a random number between 20 and 120
        randomNumber = Math.floor(Math.random() * 101) + 19;
        console.log(randomNumber);
        //display random number
        document.getElementById("random-number").innerHTML = randomNumber;
        //generate a random value for each gem
        //calling on the button from HTML and adding an attribute of data-value created as a random number
        $("#hex").attr("data-value", Math.floor(Math.random() * 26));
        $("#round").attr("data-value", Math.floor(Math.random() * 26));
        $("#square").attr("data-value", Math.floor(Math.random() * 26));
        $("#rectangle").attr("data-value", Math.floor(Math.random() * 26));
        //console.log(hex);
        
    }
    resetGame();

        //on clicking each button, its value is added to the totalScore and displayed at total-score div. call on the button and give it a function where the total score equals the old total score plus the value you assigned to the button expressed as: (this).data("value")
        $(".btn").on("click", function() {
        totalScore += $(this).data('value')
        console.log(totalScore);
        if (totalScore === randomNumber) {
            //on the HTML element you call, add this text: YOU WON!!
            $("#game-text").text("YOU WON!!");
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
        else if (totalScore > randomNumber) {
            $("#game-text").text("YOU LOSE!!");
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
        $("#total-score").text(totalScore);
    });


});
       // on("click", Math.floor(Math.random() * 26));
           // console.log(hex + round + square + rectangle);
    //}
   
   // }
  // resetGame();
//});
    //Display the random number
        //
    //calculate then display the total score
        //totalScore = hex + round + square + rectangle;
        //document.getElementById(total-score).innerHTML = totalScore;

    
//});
        
        //document.getElementById("guesses-left").innerHTML = "5"
    
        //now let the computer make a random choice from the word array when you press any key
        
        //reset the targetword as blank
       // document.getElementById("targetWord").innerHTML = " "
    
        //document.onkeyup = function(event) {
        //write dashes in the displayArray for each letter in the chosen word
        
        
        //for (var i=0; i<computerChoice.length; i++) {
            
           // displayArray.push("_ ")
           // document.getElementById("targetWord").innerHTML += "_ ";
           // }
        //alert("Guess letter using keyboard")
        //}
        //var userGuess;
       // var correctGuess = false
        
        //document.onkeyup = function(event) {
            //userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            //console.log(userGuess)
           // for (var i=0; i<computerChoice.length; i++) { 
           // if (computerChoice[i] === userGuess) {
             //   displayArray[i] = userGuess
              //  correctGuess = true
             //   document.getElementById("targetWord").innerHTML = displayArray.join(" ");
                //console.log(displayArray)
              //  if (victory(displayArray,computerChoice)) {
               //     alert("YOU WIN!!!!")
               //     resetGame();
               // }
    
            //}
       // }
    
        //if (correctGuess === false) {
          //  guessedLetters.push ("userGuess" + ", ");
           // guessesLeft = guessesLeft - 1
          //  document.getElementById("guesses-left").innerHTML = guessesLeft;
          //  document.getElementById("guessed-letters").innerHTML += userGuess + " ";
           // if (guessesLeft === 0) {
            //    alert("GAME OVER!!!");
             //   resetGame();
           // }
            
        //}
        //correctGuess = false
    //}
    
      //  function victory(array1,array2) {
        //    for (var i=0; i<array1.length; i++) {
          //      if (array1[i] !== array2[i]) {
          //          return false;
            //    } 
          //  }
          //  return true;
        //}
    
    //}
    
    //resetGame();
    
