
wordsGroup = ("sand", "tomato");


    var pick = wordsGroup[Math.floor(Math.random() * wordsGroup.length)];

    
    for(var i = 0; i < 10; i++){


    console.log(pick);
    var mystWord = possible.split(" ");
    console.log(mystWord);
    }
    


document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    var guess = document.getElementById("word-box").textContent = userGuess

   

};







