const startButton = document.querySelector('#start-btn');
const questList = document.querySelector('.questions-container')
let timer;
let countdown = document.getElementById('timer')
let timeLeft = 75;
let rightAnswer1 = document.getElementById('correct-1')
let rightAnswer2 = document.getElementById('correct-2')
let rightAnswer3 = document.getElementById('correct-3')
let rightAnswer4 = document.getElementById('correct-4')
let rightAnswer5 = document.getElementById('correct-5')

let responseRight1 = document.getElementById('right-answer')
let textRight = 'Good job!'
let responseWrong1 = document.getElementById('wrong-answer')
let textWrong = 'Sorry, wrong choice'

let ques2 = document.querySelector("question-text-2")
let ques1Box = document.getElementsByClassName('option1')

let wrongAnswer = document.querySelectorAll('#incorrect')


function showQuestion(index){
    if(index > 1){
        var lastQuestion = document.getElementById(`question-text-${index - 1}`)
        lastQuestion.classList.add("hidden")
    }

    var currentQuestion = document.getElementById(`question-text-${index}`)
    currentQuestion.classList.remove("hidden")

}

startButton.addEventListener('click', function(){
showQuestion(1)
})

startButton.addEventListener('click', myFunction)


function myFunction () {

    timeLeft--;
    document.getElementById('timer').innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(myFunction, 1000);
    }
    if (timeLeft < 0) {
        return countdown.innerHTML
         = 75
    }
    if (rightAnswer1.checked) {
        timeLeft -= 15;
    } 
    console.log(timeLeft)
    
    }

    function subtractSec() {
     
        if (wrongAnswer.checked) {
            timeLeft - 15;
        }
        
    }

function addRightText1() {
    document.getElementById('answer1').innerHTML = textRight
}
function addWrongText1() {
    document.getElementById('answer1').innerHTML = textWrong

}
function addRightText2() {
    document.getElementById('answer2').innerHTML = textRight
}
function addWrongText2() {
    document.getElementById('answer2').innerHTML = textWrong
    
}
function addRightText3() {
    document.getElementById('answer3').innerHTML = textRight
}
function addWrongText3() {
    document.getElementById('answer3').innerHTML = textWrong

}
function addRightText4() {
    document.getElementById('answer4').innerHTML = textRight
}
function addWrongText4() {
    document.getElementById('answer4').innerHTML = textWrong

}
function addRightText5() {
    document.getElementById('answer5').innerHTML = textRight
}
function addWrongText5() {
    document.getElementById('answer5').innerHTML = textWrong
}
