       
       
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


var timeRemaining = 60;
var correctAnswers;
var inCorrectAnswers;
var unAnswered;
var userCorrectAnswer;
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
        image: "img/BritneySpears.jpg",
        year: "1998"

      },
   
      {
        Music: aeroSmithMusic,
        Questions: ["Metallica", "Red Hot Chili Peppers", "Aerosmith", "Radiohead"],
        Answer: 2,
        image: "img/aeroSmith.jpg",
        year: "1998"
      },
    
      {
        Music: backStreetBoysMusic,
        Questions: ["NSYNC", "Boyzone", "Westlife", "Backstreet Boys"],
        Answer: 3,
        image: "img/backStreetBoys.jpg",
        year: "1997"
      },
    
      { 
        Music: coronaMusic,
        Questions: ["Corona", "Whitney Houston", "Beyonce", "Toni Braxton"],
        Answer: 0,
        image: "img/corona.jpg",
        year: "1993"
      },
    
      {
        Music: fugeesMusic,
        Questions: ["Mary J. Blige","Fugees", "Corona", "Janet Jackson"],
        Answer: 1,
        image: "img/fugees.jpg",
        year: "1996"
      },
    
      {
        Music: madonnaMusic,
        Questions: ["Mariah Carey", "Jennifer Lopez", "Celine Dion", "Madonna"],
        Answer: 3,
        image: "img/madonna.jpg",
        year: "1998"
      },
    
      {
        Music: michaelJacksonMusic,
        Questions: ["Prince", "George Michael", "Michael Jackson", "Phil Collins"],
        Answer: 2,
        image: "img/michealJackson.jpg",
        year: "1995"
      },
    
      {
        Music: nsyncMusic,
        Questions: ["NSYNC", "Backstreet Boys", "Westlife", "One Direction"],
        Answer: 0,
        image: "img/nsync.jpg",
        year: "1999"
      },
    
      {
        Music: offSpringMusic,
        Questions: ["Blink-182","The Offspring", "Sum 41", "Red Hot Chili Peppers"],
        Answer: 1,
        image: "img/offSpring.jpg",
        year: "1998"
      },
    

      {
        Music: tlcMusic,
        Questions: ["Destiny's Child", "Xscape", "Spice Girls", "TLC"],
        Answer: 3,
        image: "img/tlc.jpg",
        year: "1999"
      }
    ]



$("#StartGame").on("click", function() {
  StartGame();
})


function StartGame() {

  correctAnswers = 0;
  inCorrectAnswers = 0;
  unAnswered = 0;
  currentQuestion = 0;
  $(".anounce").hide("fast");
  $("#StartGame").hide("fast");
  newPage();
}
  
     
function newPage(){
          
  answered = true;
  $("#a00").html("Try " + (currentQuestion+1) + " out of " + Artist.length);
  $("#q01").html(messages.MainQuestion);
  playMusic();
  
  
           
  for(var i = 0; i <= 4; i++){
    
  var QuestionList = $("<div>");
      QuestionList.text(Artist[currentQuestion].Questions[i]);
      QuestionList.attr({"data-index": i });
      QuestionList.addClass("container03");
      $(".container02").append(QuestionList);
    }
      startTimer();
      $(".container03").on("click",function(){
      $(".container03").remove();
      userSelect = $(this).data("index");
      clearInterval(timeRemaining);
      stopMusic();
      answerList();
  });
}


function answerList(){

  var rightQuestion = Artist[currentQuestion].Questions[Artist[currentQuestion].Answer];
  var rightAnswer = Artist[currentQuestion].Answer;
  var rightYear = Artist[currentQuestion].year;
  var rightImage = $("<img>");
      rightImage.attr("src", Artist[currentQuestion].image);
      
      console.log(rightQuestion)
      console.log(rightAnswer)
      console.log(rightYear)
      console.log(rightImage)
            
  if((userSelect == rightAnswer) && (answered === true)){
    
      correctAnswers++;
      $("#img3").html(rightImage);
      $(".text01").html("Released in " + rightYear);
      $(".answers").html(messages.correct);
      newPage()
      stopMusic()
      }

  else if((userSelect != rightAnswer) && (answered === true)){
      inCorrectAnswers++;
      $("#img3").html(rightImage);
      $(".text01").html("Released in " + rightYear);
      $(".answers").html(messages.WrongAnswer);
      $(".unanswered").html("Correct answer is: " + rightQuestion);
      stopMusic()
      }

  else{
      unAnswered++;
      $("#img3").html(rightImage);
      $(".text01").html("Released in " + rightYear);
      $(".answers").html(messages.outOfTime);
      $(".unanswered").html("Correct answer is: " + rightQuestion);
      answered = true;
      stopMusic()
      
      }
  if(currentQuestion == (Artist.length-1)){
      setTimeout(score, 2500);
      
      }
  else {
      currentQuestion++;
      setTimeout(newPage, 2500);
      
      }	
}


function startTimer(){
  answered = true;
  $(".timer").text("Time remaining: " + timeRemaining);
  setInterval(countdown, 1000);
}


function countdown(){
  timeRemaining--;
  $(".timer").text("Time remaining: " + timeRemaining);	
  if(timeRemaining < 1){
    clearInterval;
    answered = false;
    answerList();
  }
}


function score(){
  $(".text01").html("Correct Answers: " + correctAnswers);
  $(".answers").html("Incorrect Answers: " + inCorrectAnswers);
  $(".unanswered").html("Unanswered: " + unAnswered);
}


function playMusic(){
  var rightMusic = Artist[currentQuestion].Music;
  console.log(rightMusic)
  rightMusic.play();          
}


function stopMusic(){
  var rightMusic = Artist[currentQuestion].Music;
  rightMusic.pause();          
}

function reset(){
  $(".text01").remove();
  $(".answers").remove();
  $(".unanswered").remove();
  $(".img3").remove();
}
