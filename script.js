var stratButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-contanier')
var shuffledQuestions, currnetQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-buttons')


wstratButton.addEventListener('click', stratGame)
nextButton.addEventListener('click', () => {
    currnetQuestionIndex++
    setNextQuestion()
})
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function stratGame() {
    stratButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currnetQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currnetQuestionIndex])
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstElementChild) {
        answerButtonElement.removeChild(answerButtonElement.firstElementChild)
    }
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        console.log(button);
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currnetQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        stratButton.innerText = 'Restrat'
        stratButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var question_new = 'https://opentdb.com/api.php?amount=10&difficulty=easy'

const questions = [
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true },
            { text: '3', correct: false },
            { text: '5', correct: false },
            { text: '2', correct: false }
        ]
    },
    {
        question: 'what is 3 + 7',
        answers: [
            { text: '10', correct: true },
            { text: '12', correct: false },
            { text: '8', correct: false },
            { text: '14', correct: false }
        ]
    },
    {
        question: 'what is 5 + 8',
        answers: [
            { text: '13', correct: true },
            { text: '14', correct: false },
            { text: '15', correct: false },
            { text: '18', correct: false }
        ]
    }
]




