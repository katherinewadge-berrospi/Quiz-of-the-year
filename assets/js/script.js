// getElementById...
const question = document.getElementById("question");
const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const answerFour = document.getElementById("answerFour");
const correctScore = document.getElementById("correct");
const incorrectScore = document.getElementById("incorrect");
const again = document.getElementById("again");
const endMessage = document.getElementById("endMessage");

let questionNum = 0;
let scoreNum = 0;

// example questions, final questions still to be added
const questions = [
    {
        "question": "What is question 1?",
        "answers": ["1a", "1b", "1c", "1d"],
        "correct": 2
    },
    {
        "question": "What is question 2?",
        "answers": ["2a", "2b", "3c", "4d"],
        "correct": 0
    },
    {
        "question": "What is question 3?",
        "answers": ["3a", "3b", "3c", "3d"],
        "correct": 3
    },
    {
        "question": "What is question 4?",
        "answers": ["4a", "4b", "4c", "4d"],
        "correct": 1
    },
]

let quizLength = questions.length;

// functions to load questions and answers
function loadQuestion(questionNum){
    question.innerText = questions[questionNum].question;
}

function loadAnswers(questionNum) {
    answerOne.innerText = questions[questionNum].answers[0];
    answerTwo.innerText = questions[questionNum].answers[1];
    answerThree.innerText = questions[questionNum].answers[2];
    answerFour.innerText = questions[questionNum].answers[3];
  }

// checks the answer that was clicked
function checkCorrect(answerNum){
    console.log("answer chosen: ", answerNum);
    let correctAns = questions[questionNum].correct;
    if (answerNum === correctAns) {
        scoreNum++;
        correctScore.innerText = scoreNum;
    } else {
        let incorrectNum = parseInt(incorrectScore.innerText) + 1;
        incorrectScore.innerText = incorrectNum;
    }
    questionNum++;
    if (questionNum === quizLength){
        finish();
    } else {
        loadQuestion(questionNum);
        loadAnswers(questionNum);
    }
}

function finish() {
    again.style.visibility = "visible";
}

function finishOption(chosen){
    if (chosen === 0) {
        window.location.reload();
    } else {
        endMessage.innerHTML = "<h2>Thank you for playing!</h2>";
        document.querySelector(".quiz-area").style.display = "none";
    }
}

function start() {
    if (questions.length === 0) {
        endMessage.innerHTML = "<h2>No questions available. Please try again later!</h2>";
        return;
    }
    again.style.visibility = "hidden";
    correctScore.innerText = "0";
    incorrectScore.innerText = "0";
    loadQuestion(questionNum);
    loadAnswers(questionNum);
}

start();