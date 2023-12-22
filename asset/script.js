const startBtn = document.querySelector('button');


function onStartBtnClick() {
    alert("Click OK to begin quiz.");   
}

function onSubmitBtnClick() {
    alert("You've completed your quiz! Let's see your results!")
}

startBtn.addEventListener('click', onStartBtnClick);
submitBtn.addEventListener('click',onSubmitBtnClick, showResults);

const quizContainer = document.getElementById('quiz-question-container');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');


function buildQuiz() { 
    const output =[];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
               `<div class="questions"> ${currentQuestion.question} </div>
               <div class="answers">${answers.join('')} </div>` 
            );
        }
    );
    quizContainer.innerHTML =output.join('');
}

function showResults() { 
    const answerContainers = quizContainer.querySelectorAll('answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]: checked`;
        const userAnswer = (answerContainer.querySelector(selector)||{}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        } else{
            answerContainers[questionNumber].style.color = 'red';
        }

});

resultsContainer.innerHTML = `${numCorrect} out of ${myQuestion.length}`;
}

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