import { warmUpJs } from './objects.js';
import { getData } from './fetch.js';


const actualizeState = (data, qNumber, counter, totalQuestions, letter, results) => {

    results.push(letter);
    setQuestion(data,qNumber);
    if(counter == totalQuestions){

        window.location.href = "./../final/final.html"; 
    } 
}

const setQuestion = (objectQuestion, questioNumber) => {

    console.log(objectQuestion);

    question.textContent = objectQuestion[questioNumber].question;
    answer1.textContent = objectQuestion[questioNumber].answer1;
    answer2.textContent = objectQuestion[questioNumber].answer2;
    answer3.textContent = objectQuestion[questioNumber].answer3;
    answer4.textContent = objectQuestion[questioNumber].answer4;

}

const setWarmup = (warmup, value) =>{

    warmup[0].question = "Você tem "+value+" segundos para resolver as seguintes questões. Preparado?";
}

/*const setFinal = (text, qtd) => {

    text.textContent = `Você acertou ${qtd} questões C:`;
}*/

//QUERY
const question = document.querySelector('#question_text');
const answer1 = document.querySelector('#a');
const answer2 = document.querySelector('#b');
const answer3 = document.querySelector('#c');
const answer4 = document.querySelector('#d');
const rocket= document.querySelector("#overbox");
const questionBox = document.querySelector('#question');
//========================================================

export let results = [];

//PROMISE
getData().then((data) => {
    console.log(data); 

    //=================================SETUP=========================================//
    
    let qNumber = -1; //setado em -1 por conta da pré questão -> VARIÁVEL GLOBAL
    let checkCounter = 0;   //quantidade de questões respondidas
    let totalQuestions = data.length;  //quantidade total de questões
    let totalTime = totalQuestions * 5; //tempo que o usuário terá para responder as perguntas

    const warmUp = warmUpJs;

    

    const setQNum = () => {
        if(qNumber < data.length - 1){qNumber += 1;};
    }

    const setCounter = () => {
        checkCounter += 1;
    }

    //====================================EXECUTING==================================//
    setWarmup(warmUp,totalTime);
    setQuestion(warmUp,0);
    setQNum();

    questionBox.className = "alertQuestion";

    setTimeout(() => {  

        //RETIRANDO FUNDO DAS CAIXAS DE RESPOSTAS
        answer1.style.backgroundImage = "none";
        answer2.style.backgroundImage = "none";
        answer3.style.backgroundImage = "none";
        answer4.style.backgroundImage = "none";
        

        questionBox.classList.remove("alertQuestion");
    
        rocket.style.animationName = "flyGo";
        rocket.style.animationDuration = totalTime + "s";

        //EVENTOS

        setQuestion(data,qNumber); //setting first question
        setQNum();

        answer1.addEventListener("click", () => {

            setCounter();
            actualizeState(data,qNumber,checkCounter, totalQuestions,"a",results);
            setQNum();
        });
        answer2.addEventListener("click", () => {

            setCounter();
            actualizeState(data,qNumber,checkCounter, totalQuestions,"b",results);
            setQNum();
        });
        answer3.addEventListener("click", () => {

            setCounter();
            actualizeState(data,qNumber,checkCounter, totalQuestions,"c",results);
            setQNum();
        });
        answer4.addEventListener("click", () => {

            setCounter();
            actualizeState(data,qNumber,checkCounter, totalQuestions,"d",results);
            setQNum();
        });

        setTimeout(() => {

            window.location.href = "./../final/final.html";

        }, totalTime * 1000);

    }, 5000);

})
.catch((erro)=>{
    console.log("Error: " + erro);
});
