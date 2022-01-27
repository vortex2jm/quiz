
//Questões pré-escritas (posteriormente serão adicionadas a um JSON)
let questions = [
    {
        question: "qual foi o último ano que o Brasil ganhou uma copa do mundo?",
        answer1: "2006",
        answer2: "2010",
        answer3: "1998",
        answer4: "2002",

    },
    {
        question: "Quem foi campeão do major de CSGO em 2021?",
        answer1: "Navi",
        answer2: "G2",
        answer3: "Vitality",
        answer4: "NIP",
    },
    {
        question: "Quem descreveu a teoria da relatividade?",
        answer1: "Einstein",
        answer2: "Tesla",
        answer3: "Newton",
        answer4: "Rutherford",
    }
]
    //perguntas e respostas
    const question = document.querySelector('#question_text');
    const answer1 = document.querySelector('#a');
    const answer2 = document.querySelector('#b');
    const answer3 = document.querySelector('#c');
    const answer4 = document.querySelector('#d');
    //foguete
    const overbox = document.querySelector("#overbox"); 

/*var x = 0;

    setQuestion(questions, 0);
    const gameInterval = setInterval(setQuestion, 10000, questions, x);

    setTimeout(()=> {
        clearTimeout(gameInterval);
        console.log(x);
    }, 50000);

    console.log(x);
    
    ******Não funciona porque a função setInterval pega a função com os mesmos parâmetros sempre*****

    */


    setQuestion(questions, 0);


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

    setTimeout(flyback, 10000);

    question.textContent = objectQuestion[questioNumber].question;
    answer1.textContent = objectQuestion[questioNumber].answer1;
    answer2.textContent = objectQuestion[questioNumber].answer2;
    answer3.textContent = objectQuestion[questioNumber].answer3;
    answer4.textContent = objectQuestion[questioNumber].answer4;

    //console.log('valor de x = ' + x);
    console.log('valor de quetioNumber = ' + questioNumber);
}
