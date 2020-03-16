       
       
       /// Basic Trivia Game Variables ///

var britneyMusic = document.createElement("audio");
britneyMusic.setAttribute("src", "music/britneySpears.mp3");

var aeroSmithMusic = document.createElement("audio");
aeroSmithMusic.setAttribute("src", "music/aeroSmith.mp3");

var backStreetBoysMusic = document.createElement("audio");
backStreetBoysMusic.setAttribute("src", "music/backStreetBoys.mp3");

var coronaMusic = document.createElement("audio");
coronaMusic.setAttribute("src", "music/corona.mp3");

var fugeesMusic = document.createElement("audio");
fugeesMusic.setAttribute("src", "music/fugees.mp3");

var madonnaMusic = document.createElement("audio");
madonnaMusic.setAttribute("src", "music/madonna.mp3");

var michaelJacksonMusic = document.createElement("audio");
michaelJacksonMusic.setAttribute("src", "music/michaelJackson.mp3");

var nsyncMusic = document.createElement("audio");
nsyncMusic.setAttribute("src", "music/nsync.mp3");

var offSpringMusic = document.createElement("audio");
offSpringMusic.setAttribute("src", "music/offSpring.mp3");

var tlcMusic = document.createElement("audio");
tlcMusic.setAttribute("src", "music/tlc.mp3");





var correctAnswers;
var inCorrectAnswers;
var unAnswered;
var userCorrectAnswer;
var userAnswer;
var userSelect;
var answered; 
var messages = {
     
    MainQuestion:  "Who sing this song?",
    correct: "Yes, you absolutely right!",
    WrongAnswer: "Nope you're wrong :(",
    outOfTime: "Oh no you out of time :("
};


       /// Trivia Game Artist Questions and Answers Variables ///


var Artist = [

      {
        Music: britneyMusic,
        Questions: ["Christina Aguilera", "Britney Spears", "Gwen Stefani", "Mariah Carey"],
        Answer: 1,
        image: "img/BritneySpears.jpg"

      },
   
      {
        Music: aeroSmithMusic,
        Questions: ["Metallica", "Red Hot Chili Peppers", "Aerosmith", "Radiohead"],
        Answer: 2,
        image: "img/aeroSmith.jpg"
      },
    
      {
        Music: backStreetBoysMusic,
        Questions: ["NSYNC", "Boyzone", "Westlife", "Backstreet Boys"],
        Answer: 3,
        image: "img/backStreetBoys.jpg"
      },
    
      { 
        Music: coronaMusic,
        Questions: ["Corona", "Whitney Houston", "Beyonce", "Toni Braxton"],
        Answer: 0,
        image: "img/corona.jpg"
      },
    
      {
        Music: fugeesMusic,
        Questions: ["Mary J. Blige","Fugees", "Corona", "Janet Jackson"],
        Answer: 1,
        image: "img/fugees.jpg"
      },
    
      {
        Music: madonnaMusic,
        Questions: ["Mariah Carey", "Jennifer Lopez", "Celine Dion", "Madonna"],
        Answer: 3,
        image: "img/madonna.jpg"
      },
    
      {
        Music: michaelJacksonMusic,
        Questions: ["Prince", "George Michael", "Michael Jackson", "Phil Collins"],
        Answer: 2,
        image: "img/michealJackson.jpg"
      },
    
      {
        Music: nsyncMusic,
        Questions: ["NSYNC", "Backstreet Boys", "Westlife", "One Direction"],
        Answer: 0,
        image: "img/nsync.jpg"
      },
    
      {
        Music: offSpringMusic,
        Questions: ["Blink-182","The Offspring", "Sum 41", "Red Hot Chili Peppers"],
        Answer: 1,
        image: "img/offSpring.jpg"
      },
    

      {
        Music: tlcMusic,
        Questions: ["Destiny's Child", "Xscape", "Spice Girls", "TLC"],
        Answer: 3,
        image: "img/tlc.jpg"
      }
    ]



$("#StartGame").on("click", function() {
$("#StartGame").hide("fast");
startGame();
});


function startGame() {
  correctAnswers = 0;
  inCorrectAnswers = 0;
  unAnswered = 0;
  currentQuestion = 0;
  Game();
}


function Game(){
	
		var rightQuestion = Artist[currentQuestion].Questions[Artist[currentQuestion].Answer];
    var rightAnswer = Artist[currentQuestion].Answer;
    var rightMusic = Artist[currentQuestion].Music;
    var rightImage = $("<img>");
		rightImage.attr("src", Artist[currentQuestion].image);
		







    console.log(rightQuestion)
    console.log(rightAnswer)
    console.log(rightMusic)
    console.log(rightImage)

    debugger
		
		