const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounterText");
const scoreText = document.getElementById("scoreText");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [
    {
        question: "Which type of ray doesn't have teeth?",
        choice1: "Manta Ray",
        choice2: "Sting Ray",
        choice3: "Bat Ray",
        choice4: "Cownose Ray",
        answer: 1
    },
    {
        question: "Which species of ray has horns?",
        choice1: "Shovelnose Rays",
        choice2: "Devil Rays",
        choice3: "Manta Rays",
        choice4: "Both B and C",
        answer: 4
    },
    {
        question: "How do Eletric Rays defend themselves?",
        choice1: "They can slap predators with their fins.",
        choice2: "They have venomus barbs and stingers.",
        choice3: "They swim away very fast.",
        choice4: "They can produce and discharge an electric shock.",
        answer: 4
    },
    {
        question: "How do Spotted Eagle Rays hunt?",
        choice1: "They shuffle around in the sand.",
        choice2: "They can locate food with their nose by following the electric signals emmited by their prey.",
        choice3: "They bury themselves in the sand to preform a sneak attack.",
        choice4: "They order Door Dash.",
        answer: 2
    },
    {
        question: "What was stingray venom used for in Ancient Greece?",
        choice1: "It was put in tea to help people fall asleep.",
        choice2: "Assasins used it as poison.",
        choice3: "Dentists used it as an anaesthetic.",
        choice4: "It was used as a beauty product.",
        answer: 3
    },
    {
        question: "Which ray species is know as 'The Gentle Giants'?",
        choice1: "Cownose Rays",
        choice2: "Manta Rays",
        choice3: "Spotted Eagle Rays",
        choice4: "Sting Rays",
        answer: 2
    },
    {
        question: "Which ray species looks the most similar to sharks?",
        choice1: "Shovelnose Rays",
        choice2: "Sawfish",
        choice3: "Eagle Rays",
        choice4: "Devil Rays",
        answer: 2
    },
    {
        question: "What are rays' skeletons made out of?",
        choice1: "Bones",
        choice2: "Tendons",
        choice3: "Muscles",
        choice4: "Cartilage",
        answer: 4
    },
    {
        question: "What is the most common type of ray species?",
        choice1: "Butterfly Rays",
        choice2: "Stingrays",
        choice3: "Thornback Rays",
        choice4: "Electric Rays",
        answer: 3
    },
    {
        question: "Which ray species are the weakest swimmers?",
        choice1: "Coffin Rays",
        choice2: "Eagle Rays",
        choice3: "Butterfly Rays",
        choice4: "Thornback Rays",
        answer: 1
    }
];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ...questions];
    getNewQuestion();
};
getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("end.html");
    };
    questionCounter++;
    questionCounterText.innerText = (questionCounter + "/" + MAX_QUESTIONS);
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}
startGame();