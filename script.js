let answer
let playButton = document.getElementById("playbutton")
let score = 10
let highscore = 0
let answerCheck = document.getElementById("answercheck")
let scoreText = document.getElementById("score")
let won = false
let body = document.getElementById("body")
let answerBox = document.getElementById("answerbox")

function intializerFunction() {
  answer = Math.floor((Math.random() * 100) + 1)
  scoreText.textContent = 10
  answerCheck.textContent = "Start Guessing..."
  score = 10
  body.classList.remove("won")
  answerBox.classList.remove("wonBox")
  answerBox.textContent = "?"
  won = false
};

playButton.addEventListener('click', intializerFunction, false)

//while game is going on

let checkButton = document.getElementById("checkbutton")

function checkAnswer(){
  let guess = document.getElementById("numberinput").value
  let highscoreText = document.getElementById("highscore")
  if(isNaN(answer)){
    answerCheck.textContent = "You have not pressed play to start!"
  }
  else if(won){
    answerCheck.textContent = "You have to press play to play again!"
  }
  else if (guess < 0 || guess > 100){
    answerCheck.textContent = "Number too high or too low!"
  }
  else{ //pass the fail checks
    if(guess == answer){
      answerCheck.textContent = "You won!"
      won = true
      body.className += " won"
      answerBox.className += " wonBox"
      answerBox.textContent = answer
      if(score > highscore) highscoreText.textContent = score
    }

    else{
      score--
      scoreText.textContent = score
      if(guess < answer) answerCheck.textContent = "Higher"
      else answerCheck.textContent = "Lower"
    }
  }
};

checkButton.addEventListener('click', checkAnswer, false)
