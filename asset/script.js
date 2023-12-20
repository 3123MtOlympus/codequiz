function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
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


    function showQuestions(questions, quizContainer) {
        
    var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		
		
		answers = [];

	
		for(letter in questions[i].answers){

		
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

	
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}


	quizContainer.innerHTML = output.join('');
}

    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');
	
       
        var userAnswer = '';
        var numCorrect = 0;
        
       
        for(var i=0; i<questions.length; i++){
    
       
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
           
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
                
        
                answerContainers[i].style.color = 'lightgreen';
            }
         
            else{
              
                answerContainers[i].style.color = 'red';
            }
        }
    
 
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    }

  
    showQuestions(questions, quizContainer);

  
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
