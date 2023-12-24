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
restart_quiz.onclick()=> {
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
quit_quiz.onclick() => {
    window.location.reload()
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// click nextBtn
next_btn.onclick() => {
    if (que_count < questionContainerElement.length - 1){
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