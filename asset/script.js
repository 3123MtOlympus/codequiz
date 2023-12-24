const startBtn = document.querySelector('button');
const nextBtn = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
let shuffledQuestions, currentQuestion
const questionElement = document.getElementById("question")
var distance = 30;

//function onStartBtnClick();

function startGame() {
    //startBtn.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    //questionContainerElement.classList.remove("hide");
    showQuestion();
}

//function setNextQuestion() {
//resetState();
//showQuestion([currentQuestion]);
//}

function showQuestion() {
    questionElement.innerText = questions[currentQuestion].question;
    questions[currentQuestion].answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    })
}

var el_up = document.getElementById("High_Score_Up");
var el_down = document.getElementById("High_Score_DOWN");

//el_up.innerHTML = "Click on the button to generate "
    //+ "a link using JavaScript.";

function GFG_Fun() {
    var a = document.createElement('a');
    var link = document.createTextNode("This is link");

    a.appendChild(link);

    a.title = "This is Link";

    a.href = "https://www.geeksforgeeks.org";

    document.body.prepend(a);
}

var highscore = localStorage.getItem("myhighscore") || 0
var time = 20
var speed = 5

var scoretext = new Text({
    text: "Score: " + score,
    size: 18,
    x: minX + 20,
    y: maxY - 20,
    color: "yellow",
    fontFamily: "arial",
    textAlign: "left"
})

// This text displays the high score
var highscoretext = new Text({
    text: "High score: " + highscore,
    size: 18,
    x: minX + 20,
    y: maxY - 40,
    color: "lightyellow",
    fontFamily: "arial",
    textAlign: "left"
})

// This text displays the time remaining in the game
var timetext = new Text({
    text: "Time remaining: 20",
    size: 18,
    x: maxX - 200,
    y: maxY - 20,
    color: "red",
    fontFamily: "arial",
    textAlign: "left"
})

// This text displays a message when the game ends
var gameovertext = new Text({
    text: "GAME OVER!",
    size: 40,
    x: 0,
    y: -50,
    color: "blue",
    fontFamily: "Comic Sans ms",
})
gameovertext.hide()

// Update the timer text every second
every(1, 'second', () => {
    if (time !== 0) {
        time -= 1
        timetext.text = "Time remaining: " + time
    }
})

forever(() => {
    if (player.x > maxX) {
        player.x = maxX
    }
    if (player.x < minX) {
        player.x = minX
    }

    if (player.y > maxY) {
        player.y = maxY
    }
    if (player.y < minY) {
        player.y = minY
    }

    if (keysDown.includes('UP')) {
        player.y += speed
    }

    if (keysDown.includes('DOWN')) {
        player.y -= speed
    }

    if (keysDown.includes('LEFT')) {
        player.x -= speed
    }

    if (keysDown.includes('RIGHT')) {
        player.x += speed
    }

    if (player.touching(enemy)) {
        enemy.x = random(minX, maxX)
        enemy.y = random(minY, maxY)
        score += 1
        scoretext.text = "Score: " + score
    }

    // Check if player has beaten high score
    if (score > highscore) {
        // Set in-game high score variable to current score
        highscore = score
        // Update text to display new high score
        highscoretext.text = "High score:" + highscore
        // Store high score permanently on player's computer
        localStorage.setItem("myhighscore", highscore)
    }

    if (time === 0) {
        gameovertext.show()
        freeze()
    }
})

// When the mouse is clicked...
onMouseDown(() => {
    if (time === 0) {
        score = 0
        time = 20
        scoretext.text = "Score: 0"
        gameovertext.hide()
        defrost()
    }
})

const quizContainer = document.getElementById('quiz-question-container');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');

const questions = [
    {
        question: "Javascript is a _______ langauge.",
        answers: ["Object-Oriented", "Object-Based", "Procedural", "None"]

    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: ["var", "let", "Both A and B", "None of the Above"]

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
    const output = [];

    myQuestions.forEach(
        (currentQuestion, showQuestion) => {

            const answers = [];

            for (letter in currentQuestion.answers) {

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
    quizContainer.innerHTML = output.join('');
}

//buildQuiz();


function showResults() {
    const answerContainers = quizContainer.getElementById('answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]: checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }

    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestion.length}`;
}

//function resetState() {
// nextBtn.classList.add("hide");
//}

//function onSubmitBtnClick() {
// alert("You've completed your quiz! Let's see your results!");
//submitBtn.addEventListener('click',onSubmitBtnClick, showResults);
//}


startBtn.addEventListener('click', showResults);
var x = setInterval(function () {
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";

    }
}, 1000);

var seconds = 30;

document.getElementById("timer").innerHTML = seconds + " seconds";

startBtn.addEventListener("click", startGame, x);

// Create the score variable
var score = 0

// Create high score variable. Retrieve existing high score but if
// it doesn't exist, then create high score and set it to zero.




// This text displays the score
