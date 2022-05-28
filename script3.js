


let timer = 90;
let runningTimer;
let score = 0;
let username = "";
let qNumber;
let finalScore;
const MAX_HIGH_SCORES = 7;
var scc=0;

const startButton = document.getElementById("startButton");
const qContainer = document.getElementById("questionsContainer");
const qElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const countdown = document.getElementById("timerArea");
const scoreArea = document.getElementById("scoreArea");
const highScoresButton = document.getElementById("showScoresButton");


let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


startButton.addEventListener("click", startGame);




function startGame() {
  startButton.classList.add("hide");
  
  answerButtons.classList.remove("hide");
  qNumber = 0;
  qContainer.classList.remove("hide");
  scoreArea.innerHTML = "";
  startClock();
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  showQuestion(questions[qNumber]);
}


function showQuestion(question) {
  qElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}


function startClock() {
  countdown.innerHTML = "Timp rămas: " + timer;
  if (timer <= 0) {
    gameOver();
  } else {
    timer -= 1;
    runningTimer = setTimeout(startClock, 1000);
  }
}


function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton.dataset.correct) {
    
   
scc++;
console.log(scc);
  }
  if (qNumber == questions.length - 1) {
    gameOver();
  } else {
    clearQuestion();
    qNumber++;
    showQuestion(questions[qNumber]);
    console.log(score);
  }
}


function clearQuestion() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}


function gameOver() {
  clearInterval(runningTimer);
  countdown.innerHTML = "Sfârșit";
  clearQuestion();
  showResults();
  startButton.innerText = "Reîncepe";
  startButton.classList.remove("hide");
  timer = 90;
  score = 0;
  scc=0;
}

function showResults() {
 finalScore=scc;
  if (finalScore < 0) {
    finalScore = 0;
  }
  qElement.innerText = "";
  scoreArea.classList.remove("hide");
  answerButtons.classList.add("hide");
  scoreArea.innerHTML = `Scorul tău este: ${finalScore} , trebuie sa razpunzi la minim 7 intrebari pt a primi un premiu`;
  username = document.getElementById("initials");
  saveButton = document.getElementById("save-btn");
  username.addEventListener("keyup", function() {
    saveButton.disabled = !username.value;
  });
 if(finalScore >1)
 {
  const overlay = document.getElementById('overlay2')
  const modal2 =document.getElementById('modal2')
  modal2.classList.add('active')
  overlay.classList.add('active')}
  localStorage.setItem("scor",finalScore);
  
}


function submitScores(e) {
  const score = {
    score: finalScore,
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  displayScores();
}


function displayScores() {
  clearInterval(runningTimer);
  countdown.innerHTML = "";
  clearQuestion();
  qElement.innerText = "";
  scoreArea.classList.remove("hide");

  scoreArea.innerHTML = `<h2>Scoruri</h2><ul id="highScoresList"></ul><button id=""clearScores class="btn" onclick="clearScores()">Șterge scoruri</button>`;
  const highScoresList = document.getElementById("highScoresList");
  highScoresList.innerHTML = highScores
    .map(score => {
      return `<li class="Lista de scoruri">${score.name} - ${score.score}</li>`;
    })
    .join("");
  startButton.classList.remove("hide");
  highScoresButton.classList.add("hide");
}


function clearScores() {
  highScores = [];
  highScoresList.innerHTML = "<h3>Scorurile au fost șterse</h3>";
  document.getElementById("clearScores").classList.add("hide");
}


const questions = [
  {
    question: "Indicați o expresie C/C++ echivalentă cu cea alăturată. (x>5) && (x<20) || (x!=y)",
    answers: [
      { text: "(x>5 || x<20) && (x==y) ", correct: false },
      { text: "!(x<=5 || x>=20) || (x!=y)", correct: true },
      { text: "(x>5 || x<20) && (x!=y)", correct: false },
      { text: "!(x<5 || x>20) && (x!=y)", correct: false }
    ]
  },
  {
    question: "Un graf neorientat are 6 noduri și fiecare dintre acestea are gradul egal cu 1. Indicați numărul de componente conexe ale grafului.",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "45", correct: false },
      { text: "3", correct: true }
    ]
  },
  {
    question: "Un arbore cu 10 noduri, numerotate de la 1 la 10, este reprezentat prin vectorul de „tați” (0,1,1,1,2,3,3,7,4,6). Indicați numărul de frunze ale arborelui.",
    answers: [
      { text: "6", correct: false },
      { text: "4", correct: true }
    ]
  },
  {
    question: "Indicați o expresie C/C++ care are valoarea 1 dacă şi numai dacă numărul natural memorat în variabila întreagă n este divizibil cu 2 şi cu 5.",
    answers: [
      { text: "n%2==0 || !(n%5==0)", correct: false },
      { text: "!(n/2==1 && n/5!=0)", correct: false },
      { text: "n/2==0 && !(n/5==0)", correct: false },
      { text: "!(n%2==1 || n%5!=0)", correct: true }
    ]
  },
  {
    question: "Subprogramul f este definit alăturat.|int f (int x){ if(x>20) return 20+f(x/10); return 2020;}|Indicați valoarea f(102030).",
    answers: [
      { text: "2020", correct: true },
      { text: "2100", correct: false },
      { text: "3200", correct: false },
      { text: "1010", correct: false }
    ]
  },
  {
    question: "Tablourile unidimensionale A și B au elementele: A=(2,20,27,36,50), iar B=(3,5,8,45,63). În urma interclasării lor în ordine crescătoare se obține tabloul cu elementele:",
    answers: [
      { text: "(2,20,27,36,50,3,5,8,45,63)", correct: false },
      { text: "(2,3,5,20,8,27,36,45,50,63) ", correct: false },
      { text: "(2,3,5,8,20,27,36,45,50,63)", correct: true },
      { text: "(2,5,8,36,50)", correct: false }
    ]
  },
  {
    question: "Variabilele x și y sunt de tip întreg și memorează numere distincte. Indicați expresia C/C++ cu valoare egală cu cel mai mic dintre numerele menționate."
,
    answers: [
      { text: "(x+y-abs(x-y))/2", correct: true },
      { text: "(x+y+abs(x-y))/2", correct: false },
      { text: "(x+y-abs(x+y))/2", correct: false },
      { text: "(x+y+abs(x+y))/2", correct: false }
    ]
  },
  {
    question: "Ce înseamnă  „!=?” în javascript",
    answers: [
      { text: "Mai mic", correct: false },
      { text: "Mai mare", correct: false },
      { text: "Egal cu", correct: false },
      { text: "Diferit de", correct: true }
    ]
  },
  {
    question: "Care este diferența dintre „==” și „===” în javascript?",
    answers: [
      { text: "Niciuna", correct: false },
      { text: "„==” Compară atât valoarea, cât și tipul și „===” compară valoarea,dar nu și tipul", correct: false },
      { text: "„==” Compară valoarea,dar nu și tipul și „===” compară atât valoarea, cât și tipul", correct: true },
      { text: "Exista multe", correct: false }
    ]
  }
];
