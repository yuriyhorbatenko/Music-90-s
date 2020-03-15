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

var MainQuestion = "<div>Who sing this song?</div>"

var WrongAnswer = "<div>Nope you're wrong</div>"

var wins = 0

var loses = 0

var Artist = {

    britneySpears: [
      { Music: britneyMusic,
        Questions: ["Christina Aguilera", "Gwen Stefani", "Mariah Carey", "Britney Spears"],
        Answer: ["Britney Spears"]
      }
    ],

    aeroSmith: [
      { Music: aeroSmithMusic,
        Questions: ["Metallica", "Red Hot Chili Peppers", "Radiohead", "Aerosmith"],
        Answer: ["Aerosmith"]
      }
    ],

    backStreetBoys: [
        { Music: backStreetBoysMusic,
          Questions: ["NSYNC", "Boyzone", "Westlife", "Backstreet Boys"],
          Answer: ["Backstreet Boys"]
        }
    ],

    corona: [
        { Music: coronaMusic,
          Questions: ["Whitney Houston", "Beyonce", "Toni Braxton", "Corona"],
          Answer: ["Corona"]
        }
    ],

    fugees: [
        { Music: fugeesMusic,
          Questions: ["Mary J. Blige", "Corona", "Janet Jackson", "Fugees"],
          Answer: ["Fugees"]
        }
    ],

    madonna: [
        { Music: madonnaMusic,
          Questions: ["Mariah Carey", "Jennifer Lopez", "Celine Dion", "Madonna"],
          Answer: ["Madonna"]
        }
    ],

    michaelJackson: [
        { Music: michaelJacksonMusic,
          Questions: ["Prince", "George Michael", "Phil Collins", "Michael Jackson"],
          Answer: ["Michael Jackson"]
        }
    ],

    nsync: [
        { Music: nsyncMusic,
          Questions: ["Backstreet Boys", "Westlife", "One Direction", "NSYNC"],
          Answer: ["NSYNC"]
        }
    ],

    offSpring: [
        { Music: offSpringMusic,
          Questions: ["Blink-182", "Sum 41", "Red Hot Chili Peppers", "The Offspring"],
          Answer: ["The Offspring"]
        }
    ],

    tlc: [
        { Music: tlcMusic,
          Questions: ["Destiny's Child", "Xscape", "Spice Girls", "TLC"],
          Answer: ["TLC"]
        }
    ],

};


/// Trivia Game Function ///


$("#StartGame").on("click", function() {
    $(".que01").append(MainQuestion)
//  Artist.britneySpears[0].Music.play();














    
    console.log(Artist.britneySpears[0].Questions[2]);
    console.log(Artist.britneySpears[0].Answer);
    console.log(Artist.aeroSmith[0].Questions[1]);
    console.log(Artist.aeroSmith[0].Answer);
    console.log(Artist.britneySpears[0].Music);
    console.log(Artist.aeroSmith[0].Music);
});
    
    
    
//    if (guessingWord.join("") === wordToMatch) {
//        wins++
//        loses++
//       pauseGame = true
//        correctSound.play()
//        updateDisplay()
//        setTimeout(resetGame,3000)
//    }
   
    
//    if (number === 0) {

        //  ...run the stop function.
//        stop();

        //  Alert the user that time is up.
//        alert("Time Up!");
//      }


// customer.phoneNumber[1].number