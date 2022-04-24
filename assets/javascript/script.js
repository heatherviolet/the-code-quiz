var Timer = document.getElementById("timer");

// button variables
const startButtonEl = document.getElementById("start-btn");
const questionsContainerElement = document.getElementById("questions-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const startPageEl = document.getElementById("start-page");
const highScoreButtonEl = document.getElementById("high-btn");
const submitButtonEl = document.getElementById("submit-btn");
const backButtonEl = document.getElementById("back-btn");
const clearButtonEl = document.getElementById("clear-btn");
const aButton = document.getElementById("btnA");
const bButton = document.getElementById("btnB");
const cButton = document.getElementById("btnC");
const dButton = document.getElementById("btnD");

// quiz questions and answers
let currentQuestion = 0;
var score = 0;


const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        },
        correct: "c",
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "square backets",
        },
        correct: "c",
    },   
    {
        question: "Arrays in Javascript can be used to store ______.",
        answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        },
        correct: "d",
    },
    {
        question: "Sting values must be enclosed within _____ when being assigned to variables.",
        answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parentheses",
        },               
        correct: "c",
    },
    {
        question: "A very useful tool used during development and degugging for printing content to the debugger is:",
        answers: {
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
        d: "console log",
        },
        correct: "d",
    },
];

// var currentQuestion = 0; 
// var score = 0;
// var timeLeft = 0;
// var timer;
var index = 0;

window.onload = function (){
function startQuiz() {
    currentQuestion = 0;

    console.log("Starting")
    // startButtonEl.style.visibility="hidden"
    // currentQuestionIndex = 0
    questionsContainerElement.classList.remove('hide')
    
    
    setNextQuestion()
    
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
    var index = 0;
    showQuestion([index])
    var currentQuestion = questions[index];
    questionsContainerElement.innerHTML = questions[index].question;
    aButton.innerHTML = questions[index].answers[1];
    bButton.innerHTML = currentQuestion.answers[1];
    cButton.innerHTML = currentQuestion.answers[2];
    dButton.innerHTML = currentQuestion.answers[3];
    showQuestion(questions)
}

function showQuestion(question) {
    let questionElement = document.getElementById('question');
    questionElement.textContent = question.title;
    // questionElement.innerText = question.question
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
startButtonEl.addEventListener('click', startQuiz);}