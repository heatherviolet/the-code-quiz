var Timer = document.getElementById("timer");

// button variables
const startButtonEl = document.getElementById("start-btn");
const questionsContainerElement = document.getElementById("questions-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const startPageEl = document.getElementById("start-page");
var highScoreButtonEl = document.getElementById("high-btn");
var submitButtonEl = document.getElementById("submit-btn");
var backButtonEl = document.getElementById("back-btn");
var clearButtonEl = document.getElementById("clear-btn");
var aButton = document.getElementById("a");
var bButton = document.getElementById("b");
var cButton = document.getElementById("c");
var dButton = document.getElementById("d");

// quiz questions and answers
const questions = [{
        question: "Commonly used data types do NOT include:",
        options:
        [1, "strings",
        2, "booleans",
        3, "alerts",
        4, "numbers"],
        answer: "alerts"},
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        1: "quotes",
        2: "curly brackets",
        3: "parentheses",
        4: "square backets",
        answer: "parentheses"},   
    {
        question: "Arrays in Javascript can be used to store ______.",
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above",
        answer: "all of the above"},
    {
        question: "Sting values must be enclosed within _____ when being assigned to variables.",
        2: "curly brackets",
        3: "quotes",
        4: "parentheses",               
        answer: "quotes"},
    {
        question: "A very useful tool used during development and degugging for printing content to the debugger is:",
        1: "JavaScript",
        2: "terminal / bash",
        3: "for loops",
        4: "console log",
        answer : "console log"},
];

var currentQuestion = -1;
var score = 0;
var timeLeft = 0;
var timer;


function startQuiz() {
    console.log("Starting")
    // startButtonEl.style.visibility="hidden"
    questionsContainerElement.classList.remove('hide')
    // currentQuestionIndex = 0
    displayQuestion()
    
 // starts timer when start quiz is clicked
    //document.getElementById("timeLeft").innerHTML = timeLeft;
    //timeLeft = 75;
    //timer = setInterval(function() {
       // timeLeft--;
        //document.getElementById("timeLeft").innerHTML = timeLeft;
        // ends quiz when timer reaches 0
       // if (timeLeft <= 0) {
        //    clearInterval(timer);
          //  endQuiz();
       // }
   // }, 1000);
    
   // next();
}

function setNextQuestion() {
    displayQuestion([currentQuestionIndex])
}

// function showQuestion() {
//     questionElement.innerText = questions.question
// }
function displayQuestion(question) {
    questionElement.innerText = question.question
    // question.answers.forEach(answer => {
    //     const button = document.createElement("button")
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener("click",selectAnswer)
    //     answerButtonsElement.appendChild(button)
    // })
}
    // for (var i = 0; i <index.choices.length; i++) {
    //     var answerbutton = document.createElement('button')
    //         answerbutton.innerText = index.choices[i].choice
    //         answerbutton.classList.add('btn')
    //         answerbutton.classList.add('answerbtn')
    //         answerbutton.addEventListener("click", answerCheck)
    //         answerbuttonsEl.appendChild(answerbutton)
    //         }
    //     };


function endQuiz() {
   // clearInterval(timer);
}


// loops quiz
function nextQuestion() {
   
}

function selectAnswer() {
    
}

// saves to local storage
function saveQuiz () {
    localStorage.setItem("selectAnswer", JSON.stringify(selectAnswer));
}
// when start quiz is clicked starts quiz
startButtonEl.addEventListener('click', startQuiz);