$(document).ready(function() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("text-result").style.display = "none";
  document.getElementById("return").style.display = "none";
  $("#start").click(function() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    startQuiz();
  });
  $("#return").click(function() {
    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    console.log("comeback");
    startQuiz();
  });
});

// function comeBack() {
//   document.getElementById("result").style.display = "none";
//   document.getElementById("quiz").style.display = "block";
//   startQuiz();

// }

//array de questões
let questions = [
  {
    question: "Quanto é 10/2?",
    choiceA: "2",
    choiceB: "5",
    choiceC: "10",
    correct: "B"
  },
  {
    question: "Quanto é 15/5?",
    choiceA: "2",
    choiceB: "5",
    choiceC: "3",
    correct: "C"
  },
  {
    question: "Quanto é 20/5?",
    choiceA: "5",
    choiceB: "4",
    choiceC: "10",
    correct: "B"
  }
];

// //Variáveis
let runningQuestion = 0;
let timer;
let scoreCounter = 0;
let lastQuestion = questions.length - 1;
let seconds = 5;
let counter;

//Renderizar questões na tela
function renderQuestion() {
  if (runningQuestion <= lastQuestion) {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("choiceA").style.display = "block";
    document.getElementById("choiceB").style.display = "block";
    document.getElementById("choiceC").style.display = "block";
    document.getElementById("correct").style.display = "none";
    document.getElementById("wrong").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("text-result").style.display = "none";
    document.getElementById("return").style.display = "none";
    setTimeout(shows(), 1200);
  } else {
    console.log("------SCORE------");
    console.log(scoreCounter);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("return").style.display = "block";
    document.getElementById("text-result").style.display = "block";
    if (scoreCounter == 0) {
      document.getElementById("text-result").innerHTML =
        "Você acertou " + scoreCounter + " questões :(";
    } else if (score == 1) {
      document.getElementById("text-result").innerHTML =
        "Você acertou " + scoreCounter + " questão!";
    } else {
      document.getElementById("text-result").innerHTML =
        "Você acertou " + scoreCounter + " questões!";
    }
  }
}

function shows() {
  realQuestion = runningQuestion + 1;
  let q = questions[runningQuestion];
  document.getElementById("score").innerHTML =
    "Score: " + scoreCounter + "/" + questions.length;
  document.getElementById("question").innerHTML =
    realQuestion + ") " + q.question;
  document.getElementById("choiceA").innerHTML = q.choiceA;
  document.getElementById("choiceB").innerHTML = q.choiceB;
  document.getElementById("choiceC").innerHTML = q.choiceC;
  clearInterval(timer);
  clearTimeout(counter);
  timer = window.setInterval(stopWatch, 1000);
}
//função que inicia o quiz
function startQuiz() {
  console.log("--------INICIOU---------");
  setTimeout(timer);
  runningQuestion = 0;
  scoreCounter = 0;
  lastQuestion = questions.length - 1;
  seconds = 5;
  counter = 0;
  renderQuestion();
  stopWatch();
}

//contador regressivo das questões
function stopWatch() {
  if (runningQuestion <= lastQuestion) {
    if (seconds > 0) {
      console.log(seconds);
      document.getElementById("counter").innerHTML = seconds;
      seconds--;
    } else if (seconds == 0) {
      document.getElementById("counter").innerHTML = seconds;
      hidden();
      wrongAnswer();
    }
  }
}

//Função responsável por verificar a resposta
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    hidden();
    correctAnswer();
    scoreCounter++;
  } else {
    hidden();
    wrongAnswer();
  }
}

function hidden() {
  document.getElementById("question").style.display = "none";
  document.getElementById("choiceA").style.display = "none";
  document.getElementById("choiceB").style.display = "none";
  document.getElementById("choiceC").style.display = "none";
}

function correctAnswer() {
  document.getElementById("correct").style.display = "block";
  console.log("correct");
  runningQuestion++;
  seconds = 5;
  setTimeout(() => renderQuestion(), 1200);
}

function wrongAnswer() {
  document.getElementById("wrong").style.display = "block";
  console.log("wrong");
  runningQuestion++;
  seconds = 5;
  setTimeout(() => renderQuestion(), 1200);
}
