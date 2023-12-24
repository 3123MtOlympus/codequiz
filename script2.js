const start_btn = document.querySelector(".start-btn button");
const quiz_box = document.querySelector(".quizbox");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .timer_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// click startQuiz
start_btn.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    showQuestion(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let timeValue = 15;
let que_count = 0;
let que_num = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector("buttons .quit");

// click restartBtn
restart_quiz.onclick() {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.add.remove("activeResult");
    timeValue = 15;
    que_count = 0;
    que_num = 1;
    userScore = 0;
    widthValue = 0;
    showQuestion(que_count);
    queCounter(que_num);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
}

// click quitQuiz
quit_quiz.onclick()
{
    window.location.reload()
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// click nextBtn
next_btn.onclick()
{
    if (que_count < questionContainerElement.length - 1) {
        que_count++;
        que_num++;
        showQuestion(que_count);
        queCounter(que_num);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResults();
    }
}

// get questions

let que_tag = '<span>' + questions[index].numb + ", " + questions[index].question + "</span>";
let option_tag = '<div class"options"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
que_text.innerHTML = que_tag;
option_list.innerHTML = option_tag;

const option = option_list.querySelectorAll(".option");

// set onclick attr

for (i - 0; i < option_length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
}

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    if (userAns == correcAns) {
        userScore += 1;
        answer.classList.add("correct");
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }
    else {
        answer.classList.add("incorrect");
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list_children[i].textContent == correcAns) {
                option_list_children[i].setAttribute("class", "option correct");
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list_children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResults(){
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("{activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span> Look at you!, you got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = '<span> Sorry you scored <p>' + userScore + '</p> out of <p>' + questions.length  + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span> Oh No! You scored <p>' + userScore + '</p> out of <p>' + questions.length  + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter= setInterval(timer, interval);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent= "0" + addZero;
        }
        if(time < 0)
        clearInterval(counter);
    timeText.textContent= "Time Off";
    const allOptions = options_list.children. length;
    let correcAns = questions[que_count].answer;
    for(i=0; i <allOptions; i++){
        if(option_list_children[i].textContent == correcAns){
            option_list_children[i].setAttribute("class", "option correct");
           console.log("Time Off: Auto selected correct answer.");
        }
        for(i=0; i < allOptions; i++){
            option_list_children[i].classlist.add("disabled");
        }
        next_btn.classList.add("show");
    }
    }
}

