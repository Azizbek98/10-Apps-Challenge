const quizData = [
    {
        question: 'How old is Florin ?',
        a: '10',
        b: '17', 
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019 ?',
        a: 'Java',
        b: 'C', 
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the President of Russia ?',
        a: 'Vladimir Putin',
        b: 'Florin Pop', 
        c: 'Dmitriy Medvedev',
        d: 'Sergey Shaygu',
        correct: 'a'
    },
    {
        question: 'What does HTML stands for ?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet', 
        c: 'Javascript Object Notation',
        d: 'Markdown Language',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched ?',
        a: '1996',
        b: '1995', 
        c: '2018',
        d: 'None of the above',
        correct: 'b'
    }
];

const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let answer = undefined;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

let getSelected = () => {
    const answerElement = document.querySelectorAll("answer");

    answerElement.forEach((answerElement) => {
        if(answerElement.checked){
            answer = answerElement.id;
        }
    });
}

submitBtn.addEventListener('click', () => {
    currentQuestion++;
    if(currentQuestion < quizData.length){
        loadQuiz();
    }
    else{
        alert("Congratulations. You have finished quiz ...");
    }
})