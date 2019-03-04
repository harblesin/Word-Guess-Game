
wordsGroup =["sand", "tomato"];


    var pick = wordsGroup[Math.floor(Math.random() * wordsGroup.length)];
    console.log(pick);
    guessLine = [];
    placeholderLine = [];
    
    for(var i = 0; i < pick.length; i++){
    var mystWord = pick.split("");
    guessLine.push(mystWord[i]);
    }
    for( var j = 0; j < guessLine.length; j ++){
                    placeholderLine.push("_ ");

    
    }
        var placeholderLineText = document.getElementsByClassName("box").appendParent += placeholderLine;

console.log(mystWord);    
console.log(placeholderLine);
console.log(guessLine);
 

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    var guess = document.getElementById("word-box").textContent = userGuess

   

};







