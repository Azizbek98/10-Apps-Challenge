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

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){


    currentQuestion++;
}