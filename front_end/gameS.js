

const preQuestions = [{

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

//QUERY
const question = document.querySelector('#question_text');
const answer1 = document.querySelector('#a');
const answer2 = document.querySelector('#b');
const answer3 = document.querySelector('#c');
const answer4 = document.querySelector('#d');
const overbox = document.querySelector("#overbox");
const questionBox = document.querySelector('#question');
const answers = document.getElementsByClassName('alternatives');

let qNumber = -1; //setado em -1 por conta da pré questão
let checkCounter = 0;   //quantidade de questões respondidas
let totalQuestions = questions.length;  //quantidade total de questões
let totalTime = totalQuestions * 5; //tempo que o usuário terá para responder as perguntas

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

//___________________________________________________________________________________//
//___________________________________________________________________________________//

    preQuestions[0].question = "Você tem "+totalTime+" segundos para resolver as seguintes questões. Preparado?";
    setQuestion(preQuestions,0);
    questionBox.className = "alertQuestion";
    
    setTimeout(() => {  
        
        answer1.style.backgroundImage = "none";
        answer2.style.backgroundImage = "none";
        answer3.style.backgroundImage = "none";
        answer4.style.backgroundImage = "none";
        //questionBox.style.backgroundImage = "none";
        questionBox.classList.remove("alertQuestion");
        overbox.style.animationName = "flyGo";
        overbox.style.animationDuration = totalTime + "s";

        setQuestion(questions,qNumber);
        let a = answer1.addEventListener("click", function(){
            setQuestion(questions,qNumber);
            checkCounter += 1;
            if(checkCounter == totalQuestions){
                
                window.location.href = "./final.html";
            }
        });
        let b = answer2.addEventListener("click", function(){
            setQuestion(questions,qNumber);
            checkCounter += 1;
            if(checkCounter == totalQuestions){
               
                window.location.href = "./final.html";
            }
        });
        let c = answer3.addEventListener("click", function(){
            setQuestion(questions,qNumber);
            checkCounter += 1;
            if(checkCounter == totalQuestions){
               
                window.location.href = "./final.html";
            }
        });
        let d = answer4.addEventListener("click", function(){
            setQuestion(questions,qNumber);
            checkCounter += 1;
            if(checkCounter == totalQuestions){
                
                window.location.href = "./final.html";
            }
        });

    }, 5000);

    




