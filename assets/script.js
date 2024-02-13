window.addEventListener('load', (event) => {
const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const timerContainer = document.getElementById('timer-container');
const timerDisplay = document.getElementById('timer');
const submitButton = document.getElementById('submit-btn');
const initialsInput = document.getElementById('initials');
const highScoresContainer = document.getElementById('high-scores');

let currentQuestionIndex;
let timer;
let timeLeft;

const questions = [
    //adding questions/ answers as objects to pull from
    {
        question: "What does scope mean?",
        answers: ["A mouthwash","how accessible functions and variables are in the running environment", "to scan/look around"],
        correctIndex: 1
    },
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Tag Markup Language","Hyperlinks Text Mark Language","Hyperlinking Text Marking Language","Hyper Text Markup Language"],
        correctIndex: 3
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answers: ["var","let","Both let and var","None of the above"],
        correctIndex: 2
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: ["document.write()","console.log()","window.alert()","all of the above"],
        correctIndex: 3
    },
];

startButton.addEventListener('click',startQuiz);

function startQuiz (){
    currentQuestionIndex = 0;
    timeLeft = 60;
    showQuestion();
    startTimer();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    clearAnswerButtons();

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const button = document.createElement('button');
        button.textContent = currentQuestion.answers[i];
        // button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(i));
        answerButtons.appendChild(button);
    }
}

function clearAnswerButtons(){
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctIndex) {
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Wrong...";
        // remove time on wrong answer
        timeLeft -= 10;
    }
console.log(currentQuestionIndex)
    resultContainer.style.display = "block";
    setTimeout(() => {
     resultContainer.style.display = "none";
     currentQuestionIndex++;
        console.log(currentQuestionIndex)
  if (currentQuestionIndex < questions.length) {
    console.log(currentQuestionIndex)
    showQuestion();
  } else {
    endQuiz();
  }
}, 1000); // Display result for 1 second

}
// used xpert learning assistant to help me write this next area
function startTimer() {
    timer = setInterval(() => {
      timerDisplay.textContent = `Time: ${timeLeft}`;
      timeLeft--;
  
      if (timeLeft < 0) {
        endQuiz();
      }
    }, 1000); 
  }
  
  function endQuiz() {
    clearInterval(timer);
    timerContainer.style.display = "none";
    questionContainer.style.display = "none";
    resultText.textContent = `Your score: ${timeLeft > 0 ? timeLeft : 0}`;
    initialsInput.value = ""; // Clear input field
    submitButton.addEventListener('click', saveHighScore);
    resultContainer.style.display = "block";
  }

  function saveHighScore() {
    const initials = initialsInput.value.trim();
    if (initials !== '') {
        const scores = JSON.parse(localStorage.getItem('scores')) || [] ;
        scores.push({ initials, score: timeLeft > 0 ? timeLeft : 0 });
        localStorage.setItem('scores', JSON.stringify(scores));
        resultText.textContent = 'Score saved!';
    } else {
        resultText.textContent = 'Please enter your initials!';
    }
    submitButton.disabled = true;
  }

  

});