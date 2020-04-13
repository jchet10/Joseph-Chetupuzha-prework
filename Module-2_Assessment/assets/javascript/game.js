var underscore=document.getElementById('underscore');
var guesses=document.getElementById('guesses');
var listOfWords=['manning','mara','saquon','cruz','nicks','coughlin','strahan','tuck','umenyiora'];
var randomNumber=Math.floor(Math.random()*listOfWords.length); 
var wins=document.getElementById('wins');
var word=listOfWords[randomNumber];
var numberOfWins=0;
var giantsInfo=['Eli Manning is a two-time super bowl mvp for the New York Football Giants. He was drafted first overall in 2004 and retired in 2019','John Mara is the majority owner of the New York Football Giants.','Saquon Barkley was selected #2 overall in the 2018 nfl draft and will go on to overtake Barry Sanders as the Greatest running back of all time.','Victor Cruz was an undrafted free agent in 2010 that proved instrumental to the giants 2011 super bowl season.','Hakeem Nicks was a first round pick in 2009 that was instrumental to the giants 2011 super bowl run','Tom coughlin was a coach for the New York Football Giants and the Jacksonville Jaguars. He won two super bowls with the Giants but was fired in 2015.','Michael Strahan is a Hall of Fame defensive end formerly playing for the New York Football Giants','Justin Tuck was a defensive end for the New York Football Giants. If not for Eli Manning, he would quite possibly be the mvp of both super bowl 42 and 46.','Osi Umenyiora was an American Football defensive end for the New York Football Giants. He currently holds the record for sacks in a single game at 6.'];
var giantsImages=["assets/images/manning.jpg","assets/images/mara.jpg","assets/images/saquon.jpg","assets/images/cruz.jpg","assets/images/nicks.jpg","assets/images/coughlin.jpg","assets/images/strahan.jpeg","assets/images/tuck.jpg","assets/images/umenyiora.jpg"]
var imageSelector=document.getElementById("myImg")
var letterGuesses=document.getElementById("letterguesses")

//choosing random word

underscore.innerText='_ '.repeat(word.length);
var numberOfGuessesRemaining=13;

var lettersGuessed=new Array();
var counter=0


document.addEventListener('keypress',(event) =>{
    var character=event.key;
    var currentWord=underscore.innerText;
    var realWord=''
    if(word.indexOf(character)>-1){
    
    for(var i=0; i<word.length;i++) {
   
    if (word[i] == character && i==0) {
        underscore.innerText= character + currentWord.substring(1,currentWord.length); 
        currentWord=underscore.innerText; 
         
    }   
    else if (word[i] == character){
        underscore.innerText= currentWord.substring(0,2*i) + character + currentWord.substring(2*i+1,currentWord.length);
        currentWord=underscore.innerText;
        
    } 
}

        
    }
    else if(word.indexOf(character)==-1 && numberOfGuessesRemaining>0 && lettersGuessed.includes(character)==false){
        
    lettersGuessed[counter]=character;
    counter++;
    if(counter==1){
    letterGuesses.innerText+= ' ' + character;
    }
    else{
    letterGuesses.innerText+= ', ' + character
    }
    console.log(lettersGuessed);
    numberOfGuessesRemaining--;
    guesses.innerText='Number of Guesses Remaining: ' +numberOfGuessesRemaining;
    }
    else if(numberOfGuessesRemaining==0){
        alert("try again!")
        reset(numberOfWins);
        
    }
    
    if(listOfWords.includes(currentWord.split(" ").join(""))) {
        numberOfWins+=1;
        wins.innerText='Number of Wins: ' +numberOfWins;
        imageSelector.src=giantsImages[randomNumber];
        alert("Correct! " + giantsInfo[randomNumber]);
        reset(numberOfWins);
        
        
    }
})

const reset =function(numOfWins) {
    underscore.innerText='_ '.repeat(word.length);
    randomNumber=Math.floor(Math.random()*listOfWords.length);
    word=listOfWords[randomNumber];
    numberOfGuessesRemaining= 13;
    guesses.innerText='Number of Guesses Remaining: ' +numberOfGuessesRemaining;
    numberOfWins=numOfWins;
    underscore.innerText='_ '.repeat(word.length);
    letterGuesses.innerText='Letters Guessed: ';
}



