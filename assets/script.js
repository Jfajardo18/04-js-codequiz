const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const timerContainer = document.getElementById('timer-container');
const timerDisplay = document.getElementById('timer');
const submitButton = document.getElementById('submit-btn');
const initialsInput = document.getElementById('initials');

const questions = [
    //adding questions/ answers as objects to pull from
    {
        question: "What does scope mean?",
        answers: ["A mouthwash","how accessible functions and variables are in the running environment", "to scan/look around"]
        correctIndex: 1
    },
    {
        question: "What does HTML stand for?"
        answers: ["Hyper Tag Markup Language","Hyperlinks Text Mark Language","Hyperlinking Text Marking Language","Hyper Text Markup Language"]
        correctIndex: 3
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?"
        answers: ["var","let","Both let and var","None of the above"]
        correctIndex: 2
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?"
        answers: ["document.write()","console.log()","window.alert()","all of the above"]
        correctIndex: 3
    },
];


