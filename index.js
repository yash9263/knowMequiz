var readlinesync = require("readline-sync");

var name = readlinesync.question("What's your name: ");
console.log("Welcome " + name + " Let's play do you know Yashwant!");
var score = 0;

var questions = [
  {
    question: "What's my nickname?",
    answer: "sonu"
  },
  {
    question: "Where do I live currently?",
    answer: "nagpur"
  },
  {
    question: "What's name of my pet?",
    answer: "gattu"
  }
]

for(var i = 0; i < questions.length; i++) {
  var question = questions[i];
  play(question.question, question.answer);
}

function play(question, answer) {
  console.log(question);
  var ans = readlinesync.question("Answer: ");
  if(ans === answer) {
    console.log("Right Congratulations!");
    score++;
  } else {
    console.log("Wrong");
  }
  console.log("Score: " + score);
  console.log("------------");
}