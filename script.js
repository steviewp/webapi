var startBtn = document.querySelector("#start-btn");
var introSection = document.querySelector("#intro-section")
var quizSection = document.querySelector("#quiz-section")
var textH2 = document.querySelector("#text")
var choiceBtn1 = document.querySelector("#choice-1")
var choiceBtn2 = document.querySelector("#choice-2")
var choiceBtn3 = document.querySelector("#choice-3")
var choiceBtn4 = document.querySelector("#choice-4")

var currentIndex = 0;

function displayQuestion () {
    textH2.textContent = questions[currentIndex].text

    choiceBtn1.textContent = questions[currentIndex].choices[0]
    choiceBtn2.textContent = questions[currentIndex].choices[1]
    choiceBtn3.textContent = questions[currentIndex].choices[2]
    choiceBtn4.textContent = questions[currentIndex].choices[3]
}

function nextQuestion() {
    currentIndex++
    displayQuestion()
}


function startQuiz() {
    introSection.classList.add("hide");
    quizSection.classList.remove("hide");

    displayQuestion();

}

choiceBtn1.addEventListener("click", nextQuestion)
choiceBtn2.addEventListener("click", nextQuestion)
choiceBtn3.addEventListener("click", nextQuestion)
choiceBtn4.addEventListener("click", nextQuestion)

startBtn.addEventListener("click", startQuiz)