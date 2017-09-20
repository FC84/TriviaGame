//This keeps track of the scores
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let choice;
let countStartNumber = 0;
let timeLeft = 30;


//Questions Array
var questions = [{
  q: "What is the most current Street Fighter Game?",
  answer: ['Street Fighter X', 'Street Fighter 4 Ultra Tournament Edition', 'Ryan Gosling: Fighters Edition', 'Street Fighter 5'],
  correct: "Street Fighter 5",
  images: "../images/Ryu.jpg"
}, {
  q: "Who's theme is playing in the Background?",
  answer: ['Ryu', 'Sagat', 'Guile', 'M. Bison'],
  correct: "Guile",
  images: "../images/Guilewin.jpg"
}, {
  q: "Who is the Final Boss of Street Fighter 2?",
  answer: ['Sagat', 'Balrog', 'Vega', 'M. Bison'],
  correct: "M. Bison",
  images: "../images/Dictator.jpg"
}];

//Timer Function
function timer(){
  $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
  function less(){
    if (timeLeft == 0) {
      $(".timer").html("<b>0 Seconds left</b>");
      alert("Time is up");
      unanswered++;
      $(".score").html("<div>Correct: "+ correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered +" </div>");
      clearTimeout(tid);    
    } else {
      timeLeft--;
      $(".timer").html("<b>" + timeLeft + " Seconds left</b>");
      console.log(timeLeft);
    }
  }
 let tid = setInterval(less, 1000);
}

//For each Question, reset the timer
function nextQuestion(){
  timeLeft = 30;
    timer();

  for (var i = 0; i < questions.length; i++) {

     $(".question").html('<h2>' + questions[i].q + '</h2>' );

     $(".answer").html('<form>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');


// Not finished linking Player Choice to Correct Choice
      function chosen(){
        alert('Clicked '+ questions[i].answer[i]);
        choice = document.getElementById("myRadio").value;
        console.log(choice);
      }
   }  
}

//Start function
function startGame(){
  alert(" You will have 30 seconds for each question. \n Please make sure your volume is turned up for full enjoyment. \n ROUND START, FIGHT");
  nextQuestion();
}


//Reset Game
function reset(){
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  choice = null;
  countStartNumber = 0;
  $(".timer").html("<div></div>");
  $(".score").html("<div></div>");
  $(".question").html("<div></div>");
  $(".answer").html("<div></div>");
}

//Buttons
$('.start').click(startGame);
$('.resetbtn').click(reset);
