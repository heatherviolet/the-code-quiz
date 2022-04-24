var answerEl = document.getElementById("answer");
var hsEl = document.getElementById("high score");
var endDiv = document.getElementById("end");
var questionsEl = document.getElementById("questions-element");
var elementStartEl = document.getElementById("starter-element");
var startQuizButton = document.getElementById("submit");
var startQuizDiv = document.getElementById("formBtn");
var elementInitials = document.getElementById("initials-element")
var elementHighScoresEl = document.getElementById("high-score-element")
var endBtns = document.getElementById("end");

//btn
var buttonStartEl = document.querySelector("#start-quiz");
var buttonGoBackEl = document.querySelector("#go-back");
var buttonClearEl = document.querySelector("#clear-high-scores")
//q btn
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");

var answerbuttonEl = document.getElementById("answer")

// questions and answers array

var HighScores = [];

var questions = [
        {
            question: "Commonly used data types do NOT include:",
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers",
            answer: "alerts"
        },
        {
            question: "The condition in an if / else statement is enclosed within ______.",
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square backets",
            answer: "parentheses"
        },
            
        {
            question: "Arrays in Javascript can be used to store ______.",
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",
            answer: "all of the above"
        },
        {
            question: "Sting values must be enclosed within _____ when being assigned to variables.",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses",               
            answer: "quotes"
        },
        question_5 = {
            question: "A very useful tool used during development and degugging for printing content to the debugger is:",
            1: "JavaScript",
            2: "terminal / bash",
            3: "for loops",
            4: "console log",
            answer : "console log"
        }
    ]
  
// start quiz function    
var startQuiz = function() {
    elementStartEl.classList.add('hide');
    elementStartEl.classList.remove('show');
    questionsEl.classList.remove('hide');
    questionsEl.classList.add('show');
}    

// display q and a info
var displayQuestion = function(index) {
    questionsEl.innerText = index.q
    for (var i = 0; i <index.choices.length; i++) {
        var answerbutton = document.createElement('button')
            answerbutton.innerText = index.choices[i].choice
            answerbutton.classList.add('btn')
            answerbutton.classList.add('answerbtn')
            answerbutton.addEventListener("click", answerCheck)
            answerbuttonEl.appendChild(answerbutton)
            }
        };


// event listener
document.getElementbyId('start-quiz').addEventListener("click",);