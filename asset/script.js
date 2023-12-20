function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // code will go here
        var myQuestions = [
            {
                question: "What does JavaScript primarily add to a web page?",
                answers: {
                    A: 'Style',
                    B: 'Interactivity',
                    C: 'Structure',
                    D: 'Images'
                },
                correctAnswer: 'B'
            },
            {
                question: "What is the correct way to declare a variable in JavaScript?",
                answer: {
                    A: 'let myVar = 10;',
                    B: 'var myVar = 10;',
                    C: 'const myVar = 10;',
                    D: 'all of the above'
                },
                
                correctAnswer: 'D'
            },
            {
                question: "Which of the following is a falsy value in JavaScript?",
                answer: {
                    A: '0',
                    B: 'false',
                    C: 'undefined',
                    D: 'all of the above'
                },
                
                correctAnswer: 'D'
            },
            {
                question: "What is the purpose of the document.getElementById() method in JavaScript?",
                answer: {
                    A: 'To get the value of an input element',
                    B: 'To change the page title',
                    C: 'To get an element by its ID',
                    D: 'To add a new HTML element',
                },
                
                correctAnswer: 'C'
            },
            {
                question: "Which operator is used for equality without type coercion in JavaScript?",
                answer: {
                    A: '===',
                    B: '==',
                    C: '=',
                    D: '!==',
                },
                
                correctAnswer: 'A'
            },
        ];

    }

    function showResults(questions, quizContainer, resultsContainer) {
        // code will go here
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}