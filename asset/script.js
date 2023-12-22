const startBtn = document.querySelector('button');

function onStartBtnClick() {
    alert();
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
    question:"Which of the following keywords is used to define a variable in Javascript?",
    answers: {
        A: "var",
        B: "let",
        C: "Both A and B",
        D: "None of the Above",
    },
    correctAnswer: "C"
},


    ]
}

startBtn.addEventListener('click', onStartBtnClick);

const quizContainer = document.getElementById('quiz-question-container');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

function buildQuiz() { }

function showResults() { }

buildQuiz();

submitBtn.addEventListener('click', showResults);