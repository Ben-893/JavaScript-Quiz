//creates an array of objects which include questions and answers
var questions = [
  { question: 'How many states are in the United States?', answer: 50 },
  { question :'How many continents are there?', answer : 7 },
  { question: 'How many legs does an insect have?', answer: 6 }
];

//creates a variable to store the number of correct answers, and 3 empty variables
var correctAnswers = 0;
var question;
var answer;
var response;

//creates a print method to print something to the HTML page
function print(message) {
  document.write(message);
}

//creates a loop which iterates through the number of elements in the array, stores the question and answer values into 2 new variables, prompts the user with the value of question, takes the response and parses it into an integer, then checks whether that integer is exactly equal to the value of answer, and if so increments the 'correctAnswers' variable by 1.
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

//creates a string for which to print to the HTML, including the 'correctAnswers' variable
html = "You got " + correctAnswers + " question(s) right."

//calls the print method with an argument of 'html', which refers to our above string.
print(html);
