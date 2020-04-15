       
       
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
var intervalId;
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
    outOfTime: "Oh no you out of time :(",
    GameOver: "Game Over"
};




var Artist = [

      {
        Music: britneyMusic,
        Questions: ["Christina Aguilera", "Britney Spears", "Gwen Stefani", "Mariah Carey"],
        Answer: 1,
        image: "img/BritneySpears.jpg",
        song: "Baby One More Time",
        year: "1998"

      },
   
      {
        Music: aeroSmithMusic,
        Questions: ["Metallica", "Red Hot Chili Peppers", "Aerosmith", "Radiohead"],
        Answer: 2,
        image: "img/aeroSmith.jpg",
        song: "I Don't Want to Miss a Thing",
        year: "1998"
      },
    
      {
        Music: backStreetBoysMusic,
        Questions: ["NSYNC", "Boyzone", "Westlife", "Backstreet Boys"],
        Answer: 3,
        image: "img/backStreetBoys.jpg",
        song: "Everybody (Backstreet's Back)",
        year: "1997"
      },
    
      { 
        Music: coronaMusic,
        Questions: ["Corona", "Whitney Houston", "Beyonce", "Toni Braxton"],
        Answer: 0,
        image: "img/corona.jpg",
        song: "Rhythm of the Night",
        year: "1993"
      },
    
      {
        Music: fugeesMusic,
        Questions: ["Mary J. Blige","Fugees", "Corona", "Janet Jackson"],
        Answer: 1,
        image: "img/fugees.jpg",
        song: "Ready or Not",
        year: "1996"
      },
    
      {
        Music: madonnaMusic,
        Questions: ["Mariah Carey", "Jennifer Lopez", "Celine Dion", "Madonna"],
        Answer: 3,
        image: "img/madonna.jpg",
        song: "Frozen",
        year: "1998"
      },
    
      {
        Music: michaelJacksonMusic,
        Questions: ["Prince", "George Michael", "Michael Jackson", "Phil Collins"],
        Answer: 2,
        image: "img/michealJackson.jpg",
        song: "You Are Not Alone",
        year: "1995"
      },
    
      {
        Music: nsyncMusic,
        Questions: ["NSYNC", "Backstreet Boys", "Westlife", "One Direction"],
        Answer: 0,
        image: "img/nsync.jpg",
        song: "Bye Bye Bye",
        year: "1999"
      },
    
      {
        Music: offSpringMusic,
        Questions: ["Blink-182","The Offspring", "Sum 41", "Red Hot Chili Peppers"],
        Answer: 1,
        image: "img/offSpring.jpg",
        song: "Pretty Fly (For A White Guy)",
        year: "1998"
      },
    

      {
        Music: tlcMusic,
        Questions: ["Destiny's Child", "Xscape", "Spice Girls", "TLC"],
        Answer: 3,
        image: "img/tlc.jpg",
        song: "No Scrubs",
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

  $(".tip").empty();
  $("#StartGame").empty();
  $(".startButton").empty();
  $(".anounce").empty();
  newPage();
  
}
  
     
function newPage() {
  
  answered = true;

  reset();
  $(".anounce").html(messages.MainQuestion);
  $(".tip").html("Try " + (currentQuestion+1) + " out of " + Artist.length);
  $(".questionList").empty();
  $(".questions").empty();
  
  playMusic();
    
  for (var i = 0; i <= 3; i++) {
    
    var QuestionList = $("<div>");
        QuestionList.text(Artist[currentQuestion].Questions[i]);
        QuestionList.attr({"data-index": i });
        QuestionList.addClass("questions");
        $(".questionList").append(QuestionList);
      }

    timer();

    $(".questions").on("click",function() {
    userSelect = $(this).data("index");
    
    stopMusic();
    answerList();
    
  });

}


function answerList() {

  var rightQuestion = Artist[currentQuestion].Questions[Artist[currentQuestion].Answer];
  var rightAnswer = Artist[currentQuestion].Answer;
  var rightSong = Artist[currentQuestion].song;
  var rightYear = Artist[currentQuestion].year;

  var rightImage = $("<img>");
      rightImage.attr("src", Artist[currentQuestion].image);
      rightImage.addClass("currentImage")
      
  var AnswerList = $("<div>");
      AnswerList.addClass("answerList");
      $(".answers").append(AnswerList);

      console.log(rightQuestion)
      console.log(rightSong)
      console.log(rightYear)
      
            
  if ((userSelect == rightAnswer) && (answered === true)) {
    
    correctAnswers++;
    AnswerList.append(messages.correct + "<br>");
    AnswerList.append(rightQuestion + "<br>");
    AnswerList.append(rightSong + "<br>");
    AnswerList.append("Released In " + rightYear);
    $("#img3").html(rightImage);
    stopMusic()

  }

  else if ((userSelect != rightAnswer) && (answered === true)){

    inCorrectAnswers++;
    AnswerList.append(messages.WrongAnswer + "<br>");
    AnswerList.append(rightQuestion + "<br>");
    AnswerList.append(rightSong + "<br>");
    AnswerList.append("Released In " + rightYear);

    $("#img3").html(rightImage);

    stopMusic()

  }

  else {

    unAnswered++;
    answered = true;
    AnswerList.append(messages.outOfTime + "<br>");
    AnswerList.append(rightQuestion + "<br>");
    AnswerList.append(rightSong + "<br>");
    AnswerList.append("Released In " + rightYear);
    
    $("#img3").html(rightImage);
    
    stopMusic()

  }

  if (currentQuestion == (Artist.length-1)) {
    clearInterval(intervalId);
    $(".questionList").empty();
    $(".questions").empty();
    $(".timer").empty();
    setTimeout(score, 6000);
  }
    
  else {
    currentQuestion++;
    clearInterval(intervalId);
    $(".questionList").empty();
    $(".questions").empty();
    $(".timer").empty();
    setTimeout(newPage, 6000);

  }

}


function timer () {
  timeRemaining = 60;
  startTimer();
}

function startTimer () {
  answered = true;
  clearInterval(intervalId);
  intervalId = setInterval(countdown, 1000);
}

function countdown () {
  timeRemaining--;
  $(".timer").text("Time remaining: " + timeRemaining);

  if (timeRemaining < 1) {
    answered = false;
    clearInterval(intervalId);
    answerList();
  }
}


function score() {

  clearInterval(intervalId);

  $(".tip").empty();
  $(".timer").empty();
  $(".answers").empty();
  $(".answerList").empty();
  $("#img3").empty();

  var AnswerList = $("<div>");
      AnswerList.addClass("answerList");
      $(".answers").append(AnswerList);
  
  $(".anounce").html(messages.GameOver);
  AnswerList.append("Correct Answers: " + correctAnswers + "<br>");
  AnswerList.append("Incorrect Answers: " + inCorrectAnswers + "<br>");
  AnswerList.append("Unanswered: " + unAnswered + "<br>");
  
}


function playMusic() {
  var rightMusic = Artist[currentQuestion].Music;
  console.log(rightMusic)
  rightMusic.play();          
}


function stopMusic() {
  var rightMusic = Artist[currentQuestion].Music;
  rightMusic.pause();          
}

function reset() {
  $(".answers").empty();
  $(".answerList").empty();
  $("#img3").empty();
}
