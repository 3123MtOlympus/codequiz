const startBtn = document.querySelector('button');
const nextBtn = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
let shuffledQuestions, currentQuestion
const questionElement = document.getElementById("question")
var distance = 60;

function onStartBtnClick(){
   
}
function startGame() {
    startBtn.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainerElement.classList.remove("hide");
showQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion([currentQuestion]);
}

function showQuestion(){
    questionElement.innerText = questions[currentQuestion].question;
    questions[currentQuestion].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
          })
}



const quizContainer = document.getElementById('quiz-question-container');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

const questions = [
    {
    question: "Javascript is a _______ langauge?",
    answers: ["Object-Oriented", "Object-Based", "Procedural", "None"]
    
},
{
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var","let", "Both A and B", "None of the Above"]
        
},
{
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers:
       ["getElementbyId", "getElementsByClassName()", "Both A and B", "None of the Above"]

},
{
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: ["Throws an error", "ignores the statements", "Giving a warning", "None of the Above"]

},
{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    answers: ["document.write()", "console.log()", "window.alert()", "All of the above"]
},


];

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

//buildQuiz();


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

function resetState() {
    nextBtn.classList.add("hide");
}

function onSubmitBtnClick() {
    alert("You've completed your quiz! Let's see your results!");
    submitBtn.addEventListener('click',onSubmitBtnClick, showResults);
}


submitBtn.addEventListener('click', showResults);
var x = setInterval(function(){
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      
}
}, 1000);
var seconds = 60;

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = seconds + "s ";

  startBtn.addEventListener("click", startGame);