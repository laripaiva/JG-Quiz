const counter2 = document.getElementById("counter");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const result = document.getElementById("result");

$(document).ready(function() {
  //esconder e mostrar as divs
  $("#quiz").hide();
  $("#result").hide();
  $("#start").click(function() {
    $("#start").hide();
    $("#quiz").show();
    startQuiz();
  });
});

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

//Variáveis
let runningQuestion = 0;
let timer;
let score = 0;
let lastQuestion = questions.length - 1;
let seconds = 5;

//Renderizar questões na tela
function renderQuestion() {
  if (runningQuestion <= lastQuestion) {
    $("#quiz").show();
    seconds = 5;
    clearInterval(timer);
    let q = questions[runningQuestion];
    let realQuestion = runningQuestion + 1;
    document.getElementById("question").innerHTML =
      realQuestion + ") " + q.question;
    document.getElementById("choiceA").innerHTML = q.choiceA;
    document.getElementById("choiceB").innerHTML = q.choiceB;
    document.getElementById("choiceC").innerHTML = q.choiceC;
    timer = window.setInterval(stopWatch, 1000);
  } else {
    console.log("------SCORE------");
    console.log(score);
    $("#quiz").hide();
    if (score == 0) {
      document.getElementById("result").innerHTML =
        "Você acertou " + score + " questões :(";
    } else if (score == 1) {
      document.getElementById("result").innerHTML =
        "Você acertou " + score + " questão!";
    } else {
      document.getElementById("result").innerHTML =
        "Você acertou " + score + " questões!";
    }
    $("#result").show();
  }
}

//função que inicia o quiz
function startQuiz() {
  console.log("--------INICIOU---------");
  renderQuestion();
  stopWatch();
}

//contador regressivo das questões
function stopWatch() {
  $("#choiceA").show();
  $("#choiceB").show();
  $("#choiceC").show();
  $("#correct").hide();
  $("#wrong").hide();
  if (runningQuestion <= lastQuestion) {
    if (seconds > 0) {
      console.log(seconds);
      document.getElementById("counter").innerHTML = seconds;
      seconds--;
    } else if (seconds == 0) {
      console.log("Perdeu a chance otário");
      wrongAnswer();
      runningQuestion++;
      renderQuestion();
    }
  }
}

//Função responsável por verificar a resposta
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    correctAnswer();
    seconds = 5;
    clearInterval(timer);
    runningQuestion++;
    renderQuestion();
  } else {
    wrongAnswer();
    seconds = 5;
    clearInterval(timer);
    runningQuestion++;
    renderQuestion();
  }
}

function correctAnswer() {
  $("#choiceA").hide();
  $("#choiceB").hide();
  $("#choiceC").hide();
  $("#correct").show();
  console.log("correct");
}

function wrongAnswer() {
  $("#choiceA").hide();
  $("#choiceB").hide();
  $("#choiceC").hide();
  $("#wrong").show();
  console.log("wrong");
}
