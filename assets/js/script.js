// all the getElementById in this file.
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

// final 10 questions and their answers.
const questions = [
    {
        "question": "Which sport made its debut at the 2024 Paris Olympics this year?",
        "answers": ["Surfing", "Climbing", "Break dancing", "Lacrosse"],
        "correct": 2
    },
    {
        "question": "What fish made a surprising return to UK seas?",
        "answers": ["Bluefin tuna", "Clownfish", "Mackerel", "Haddock"],
        "correct": 0
    },
    {
        "question": "Conservative party lost the general election after how many years in power?",
        "answers": ["18", "13", "11", "14"],
        "correct": 3
    },
    {
        "question": "Which was the best selling beer this year?",
        "answers": ["Carling", "Stella Artois", "Fosters", "Moretti"],
        "correct": 1
    },
    {
        "question": "Who became all-time leading scorer in NCAA basketball?",
        "answers": ["Ryan Nembhard", "Caitlin Clark", "Lebron James", "Pete Maravich"],
        "correct": 1
    },
    {
        "question": "Which bridge collapsed after a collision with a ship?",
        "answers": ["Key Bridge", "Golden Gate Bridge", "Tower bridge", "Syndey Harbour Bridge"],
        "correct": 0
    },
    {
        "question": "Madonna broke the record for the largest stand-alone concert in which country?",
        "answers": ["USA", "France", "UK", "Brazil"],
        "correct": 3
    },
    {
        "question": "Which ex TV presenter was found guilty of 34 felony charges?",
        "answers": ["Louis Theroux", "Jimmy Kimmel", "Donald Trump", "Oprah Winfrey"],
        "correct": 2
    },
    {
        "question": "Where did the UK place on the medals table after the 2024 Paris Olympics?",
        "answers": ["3rd", "7th", "9th", "6th"],
        "correct": 1
    },
    {
        "question": "Which of these Latin American countries elected its first female president in 2024?",
        "answers": ["Peru", "Chile", "Colombia", "Mexico"],
        "correct": 3
    },
];

let quizLength = questions.length;

// functions to load questions and answers
function loadQuestion(questionNum){
    question.innerText = questions[questionNum].question;
}

/**
 * This function is responsible for loading the question's answers into the four buttons.
 * @param {int} questionNumb 
 */
function loadAnswers(questionNum) {
    answerOne.innerText = questions[questionNum].answers[0];
    answerTwo.innerText = questions[questionNum].answers[1];
    answerThree.innerText = questions[questionNum].answers[2];
    answerFour.innerText = questions[questionNum].answers[3];
  }

  /** 
 * This function is responsible for checking the correct answer has been selected.
 * It also increases the score by 1 point to either the correct or incorrect score.
 * Lastly, it also checks if there are more questions to be loaded, finishing the quiz if none.
 * @param {int} answerNum 
 */
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

/**
 * This function is responsible for making the replay question box appear after answering the last question.
 */
function finish() {
    again.style.visibility = "visible";
}

/**
 * This function is responsible for either reloading the quiz, or displaying the thank you message.
 * @param {int} chosen
 */
function finishOption(chosen){
    if (chosen === 0) {
        window.location.reload();
    } else {
        endMessage.innerHTML = "<h1>Thank you for playing!</h1>";
        document.querySelector(".quiz-area").style.display = "none";
    }
}

/**
 * This function is responsible for starting the quiz
 */
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