const questions = [
  {
    question: "What is the capital of France?",
    answers:[
      {text: "New York", correct: false},
      {text: "London", correct: false},
      {text: "Paris", correct: true},
      {text: "Dublin", correct: false}
    ]
  },
  {
    question: "What is the capital of Ireland?",
    answers:[
      {text: "New York", correct: false},
      {text: "London", correct: false},
      {text: "Paris", correct: false},
      {text: "Dublin", correct: true}
    ]
  },
  {
    question: "What is the capital of England?",
    answers:[
      {text: "New York", correct: false},
      {text: "London", correct: true},
      {text: "Paris", correct: false},
      {text: "Dublin", correct: false}
    ]
  },
  {
    question: "What is the capital of the USA?",
    answers:[
      {text: "New York", correct: false},
      {text: "London", correct: false},
      {text: "Washington", correct: true},
      {text: "Dublin", correct: false}
    ]
  }
];
const questionelement= document.getElementById('question');
const answerbutton= document.getElementById('answer-buttons');
const nextbutton= document.getElementById('next-btn');

let currentquestionindex= 0;
let score= 0;

function startQuiz(){
  currentquestionindex= 0;
  score=0;
  nextbutton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion= questions[currentquestionindex];
  let questionNo= currentquestionindex+1;
  questionelement.innerHTML= questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button=ducument.createElement('button');
    button.innerHTML= answer.text;
    button.classList.add('btn');
    answerbutton.appendChild(button);
  });
}

function resetState(){
  nextbutton.style.display= 'none';
  while
}
startQuiz();
