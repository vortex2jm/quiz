//import {fechData as questions} from "./data.js";
//const q = questions();
//console.log(q);

//import {questions} from "./fetch.js";
//console.log("Estes são os dados" + data); 

var questions = {};

fetch("http://localhost:3003/")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    getQuestions(data);   
})
.catch((erro)=>{
    console.log("Error: " + erro);
});

console.log("Esse é o tamanho do array: " + questions.length);


//ESTOU COM PROBLEMA PARA PEGAR OS DADOS DA PROMISE


//========================================================================================//
const warmUp = [{

    question: "Você tem X segundos para resolver as questões seguintes, está preparado?",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    },
    {
        question: "Parabéns, você terminou o quiz!!!",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "", 
    }
]

//=================================================================================//
//SET UP
//=================================================================================//

//QUERY
const question = document.querySelector('#question_text');
const answer1 = document.querySelector('#a');
const answer2 = document.querySelector('#b');
const answer3 = document.querySelector('#c');
const answer4 = document.querySelector('#d');
const overbox = document.querySelector("#overbox");
const questionBox = document.querySelector('#question');

let qNumber = -1; //setado em -1 por conta da pré questão -> VARIÁVEL GLOBAL
let checkCounter = 0;   //quantidade de questões respondidas
let totalQuestions = questions.length;  //quantidade total de questões
let totalTime = totalQuestions * 5; //tempo que o usuário terá para responder as perguntas

//================================================================================//
//FUNCTIONS
//================================================================================//

function setQuestion(objectQuestion, questioNumber){

    console.log(objectQuestion);

    question.textContent = objectQuestion[questioNumber].question;
    answer1.textContent = objectQuestion[questioNumber].answer1;
    answer2.textContent = objectQuestion[questioNumber].answer2;
    answer3.textContent = objectQuestion[questioNumber].answer3;
    answer4.textContent = objectQuestion[questioNumber].answer4;

    //console.log('valor de x = ' + x);
    if(qNumber < questions.length - 1){qNumber += 1;};
    console.log('valor de questioNumber = ' + questioNumber);
}

function getQuestions (data){
    questions = data;
}

//===================================================================================//
//MAIN
//===================================================================================//

let results = new Array(questions.length); //respostas

warmUp[0].question = "Você tem "+totalTime+" segundos para resolver as seguintes questões. Preparado?";

setQuestion(warmUp,0);

questionBox.className = "alertQuestion";


setTimeout(() => {  
    
    //MUDANÇAS NO DESIGN
    answer1.style.backgroundImage = "none";
    answer2.style.backgroundImage = "none";
    answer3.style.backgroundImage = "none";
    answer4.style.backgroundImage = "none";
    //questionBox.style.backgroundImage = "none";
   
    questionBox.classList.remove("alertQuestion");
   
    overbox.style.animationName = "flyGo";
    overbox.style.animationDuration = totalTime + "s";
    
    //MUDANÇAS NO TEXTO E VARIÁVEIS (EVENTOS)
    
    setQuestion(questions,qNumber); //setting first question
    
    
    let a = answer1.addEventListener("click", function(){
        results[qNumber] = "a";
        setQuestion(questions,qNumber);
        checkCounter += 1;
        if(checkCounter == totalQuestions){
            
            window.location.href = "./final.html";
        }
    });
    let b = answer2.addEventListener("click", function(){
        results[qNumber] = "b";
        setQuestion(questions,qNumber);
        checkCounter += 1;
        if(checkCounter == totalQuestions){
           
            window.location.href = "./final.html";
        }
    });
    let c = answer3.addEventListener("click", function(){
        results[qNumber] = "c";
        setQuestion(questions,qNumber);
        checkCounter += 1;
        if(checkCounter == totalQuestions){
           
            window.location.href = "./final.html";
        }
    });
    let d = answer4.addEventListener("click", function(){
        results[qNumber] = "d";
        setQuestion(questions,qNumber);
        checkCounter += 1;
        if(checkCounter == totalQuestions){
            
            window.location.href = "./final.html";
        }
    });


    setTimeout(()=>{
        window.location.href = "./final.html";
    }, totalTime);


}, 5000);

    
export {results};



