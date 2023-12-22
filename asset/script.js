const startBtn = document.querySelector('button');

function onStartBtnClick() {
    alert("Click OK to begin quiz.");
    
}

startBtn.addEventListener('click', onStartBtnClick);

const quizContainer = document.getElementById('quiz-question-container');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

function buildQuiz() { }

function showResults() { }

buildQuiz();

submitBtn.addEventListener('click', showResults);

const myQuestions = [{
    question: "Javascript is a _______ langauge?",
    answers: {
        A: "Object-Oriented",
        B: "Object-Based",
        C: "Procedural",
        D: "None",
    },
    correctAnswer: "A"
},
{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: {
        A: "var",
        B: "let",
        C: "Both A and B",
        D: "None of the Above",
    },
    correctAnswer: "C"
},
{
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: {
        A: "getElementbyId",
        B: "getElementsByClassName()",
        C: "Both A and B",
        D: "None of the Above",
    },
    correctAnswer: "C"
},
{
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: {
        A: "Throws an error",
        B: "ignores the statements",
        C: "Giving a warning",
        D: "None of the Above",
    },
    correctAnswer: "B"
},
{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    answers: {
        A: "document.write()",
        B: "console.log()",
        C: "window.alert()",
        D: "All of the above",
    },
    correctAnswer: "D"

}

];