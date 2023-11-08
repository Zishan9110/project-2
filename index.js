const questions = [
    {
      question: "Which is the largest Animal in the world",
      answers : [
        {text: "Shark", correct: false},
        {text: "Blue Whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false},

      ]
    },
    {
        question: "which is the most population country in the world",
        answers : [
          {text: "China", correct: false},
          {text: "India", correct: true},
          {text: "Pakistan", correct: false},
          {text: "USA", correct: false},
  
        ]
      },
      {
        question: "How Many Country in the world",
        answers : [
          {text: "190", correct: false},
          {text: "100", correct: false},
          {text: "200", correct: false},
          {text: "212", correct: true},
  
        ]
      },
      {
        question: "The National aniaml of india",
        answers : [
          {text: "Tiger", correct: true},
          {text: "Lion", correct: false},
          {text: "Elephant", correct: false},
          {text: "Fox", correct: false},
  
        ]
      },
      {
        question: "Who is the prime minister of india",
        answers : [
          {text: "Amit Shah", correct: false},
          {text: "Narendra Modi", correct: true},
          {text: "Kejriwal", correct: false},
          {text: "Rahul Ghandhi", correct: false},
  
        ]
      }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;

function startquiz(){
currentQuestionIndex=0;
score = 0;
nextButton.innerHTML = "Next";
showQuestions();
}

function showQuestions(){
  resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display= "none";
    while(answerButton.firstChild){
      answerButton.removeChild(answerButton.firstChild);

    }
}

function selectAnswer(e)
{
  const selectedBtn =e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
       if(button.dataset.correct=== "true"){
         button.classList.add("correct");
       }
       button.disabled = true;
   });
   nextButton.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML=`You Scored ${score} Out Of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestions();
  }
  else{
    showScore();
  }
}
nextButton.addEventListener("click", () =>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }
  else{
    startquiz();
  }
});

startquiz();