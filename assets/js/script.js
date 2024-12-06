// getElementById...
const question = document.getElementById("question");
const answerOne = document.getElementById("answerOne");
const answerTwo = document.getElementById("answerTwo");
const answerThree = document.getElementById("answerThree");
const answerFour = document.getElementById("answerFour");

const score = document.getElementById("score");
const playAgain = document.getElementById("playAgain");

let questionNum = 0;
let scoreNum = 0;

const questions = [
    {
        "question": What is question 1?,
        "answers": ["1a", "1b", "1c", "1d"],
        "correct": 2
    },
    {
        "question": What is question 2?,
        "answers": ["2a", "2b", "3c", "4d"],
        "correct": 0
    },
    {
        "question": What is question 3?,
        "answers": ["3a", "3b", "3c", "3d"],
        "correct": 3
    },
    {
        "question": What is question 4?,
        "answers": ["4a", "4b", "4c", "4d"],
        "correct": 1
    },
]