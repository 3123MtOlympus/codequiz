const questions = [
    {
        question: "Javascript is a _______ langauge.",
        answer: "Object-Oriented",
        options: [
            "Object-Oriented",
            "Object-Based",
            "Procedural",
            "None"
        ]

    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answer: "Both A and B",
        options: [
            "var",
            "let",
            "Both A and B",
            "None of the Above"
        ]

    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer: "Both A and B",
        options: [
            "getElementbyId",
            "getElementsByClassName()",
            "Both A and B",
            "None of the Above"
        ]

    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answer: "ignores the statements",
        options: [
            "Throws an error",
            "ignores the statements",
            "Giving a warning",
            "None of the Above"]

    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answer: "All of the above",
        options: [
            "document.write()",
            "console.log()",
            "window.alert()",
            "All of the above"]
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 15;
  let timer;
  
  function startQuiz() {
    showQuestion();
    timer = setInterval(updateTimer, 1000);
  }
  
  function checkAnswer(selectedAnswer) {
    clearInterval(timer);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      score++;
    } else {
      timeLeft -= 3; 
    }
  
    showFeedback(selectedAnswer); 
    
    setTimeout(() => {
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        resetTimer();
        showQuestion();
        timer = setInterval(updateTimer, 1000);
      } else {
        showResult();
      }
    }, 2000); // Delay of 2 seconds (adjust as needed)
  }
  
  function showFeedback(selectedAnswer) {
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.createElement("div");
  
    feedbackElement.classList.add("feedback");
  
    const feedbackText = selectedAnswer === questions[currentQuestion].correctAnswer
      ? "Correct!"
      : `Wrong! The correct answer is ${questions[currentQuestion].correctAnswer}.`;
  
    feedbackElement.textContent = feedbackText;
  
    optionsElement.appendChild(feedbackElement);
  }
  
  function resetTimer() {
    timeLeft = 10; // Reset timer for the next question
  }
  
  function showResult() {
    // ... (previous code)
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length) {
      resetTimer();
      showQuestion(questions);
      timer = setInterval(updateTimer, 1000);
    } else {
      showResult();
    }
  }
  