
//Questões pré-escritas (posteriormente serão adicionadas a um JSON)
const questions = [
    {
        question: "qual foi o último ano que o Brasil ganhou uma copa do mundo?",
        answer1: "2006",
        answer2: "2010",
        answer3: "1998",
        answer4: "2002",
        right: "2002",
    },
    {
        question: "Quem foi campeão do major de CSGO em 2021?",
        answer1: "Navi",
        answer2: "G2",
        answer3: "Vitality",
        answer4: "NIP",
        right: "Navi"
    },
    {
        question: "Quem descreveu a teoria da relatividade?",
        answer1: "Einstein",
        answer2: "Tesla",
        answer3: "Newton",
        answer4: "Rutherford",
        right: "Einstein"
    }
]

const preQuestions = [{

    question: "Você tem X segundos para resolver as questões seguintes, está preparado?",
    answer1: "...",
    answer2: "...",
    answer3: "...",
    answer4: "...",
}]

//perguntas e respostas
const question = document.querySelector('#question_text');
const answer1 = document.querySelector('#a');
const answer2 = document.querySelector('#b');
const answer3 = document.querySelector('#c');
const answer4 = document.querySelector('#d');
//foguete
const overbox = document.querySelector("#overbox");
//caixa de perguntas
const questionBox = document.querySelector('#question');
//seleção todos os botões
const answers = document.querySelectorAll('.alternatives');

//GAME

let timeFlag = questions.length;    //quantidade de questões
let stopFlag = 0;   //flag de parada
//console.log(timeFlag);
let qNumber = 0;    //quantidade de questões
let animationTime = timeFlag*5 + 's';   //tempo da animação concatenado com "s" para settar o CSS
//console.log(ani);


    answers.disabled = true;
    setQuestion(preQuestions,0);

    setTimeout(() => {
        setQuestion(questions,qNumber);
        answers.disabled = false;
        overbox.style.animationDuration = animationTime;
        overbox.style.animationName = 'flyGo';
    },3000); //mudar 3000 para 10000

    setTimeout(() => {
        stopFlag = 1;
    }, 5000 * timeFlag);
    
    
    //questionBox.className = 'alertQuestion';
    //questionBox.classList.remove("alertQuestion");
    //question.style.color = "black";

    
    setTimeout(() => {

        for(let i =0; i<questions.length - 1; i++){
            
            setQuestion(questions, qNumber);

            
        }


    },15000);

    





//___________________________________FUNÇÕES________________________________// 

//Função para fazer a nave retornar ao estado inicial

function flyback(){

    overbox.style.animationName = "flyBack";
    overbox.style.animationDuration = '3.33s';
    console.log('set rocket position');
}

//Função para setar uma pergunta no HTML

function setQuestion(objectQuestion, questioNumber){

    console.log(objectQuestion);


    question.textContent = objectQuestion[questioNumber].question;
    answer1.textContent = objectQuestion[questioNumber].answer1;
    answer2.textContent = objectQuestion[questioNumber].answer2;
    answer3.textContent = objectQuestion[questioNumber].answer3;
    answer4.textContent = objectQuestion[questioNumber].answer4;

    //console.log('valor de x = ' + x);
    qNumber += 1;
    console.log('valor de questioNumber = ' + questioNumber);
}
