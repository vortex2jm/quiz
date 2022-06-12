import NavbarAdmin from "../../components/NavbarAdmin"
import styles from "../../styles/Register.module.css"

export default function Register(){

    async function HandleSubmit(event){

        event.preventDefault();        
        const body = {

            question: event.target.question.value,
            answer1: event.target.answer1.value,
            answer2: event.target.answer2.value,
            answer3: event.target.answer3.value,
            answer4: event.target.answer4.value,
            right: event.target.right.value
        }        

        const url = "http://localhost:3003/questions/register";
        
        const registerObject = {

            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body)
        }
        try{
            console.log(body);
            const response = await fetch(url, registerObject);
            const data = await response;
            console.log(data);
        }
        catch(erro){

            console.log(erro);
        }
    }

    return(

        <>
        <div className={styles.container}>
            <NavbarAdmin/>
            <form onSubmit={HandleSubmit} method="post" className={styles.form}>
                
                <label htmlFor="question">Pergunta</label>
                <input type="text" name="question" id="question"/>

                <label htmlFor="answer1">Resposta 1</label>
                <input type="text" name="answer1" id="answer1"/>

                <label htmlFor="answer2">Resposta 2</label>
                <input type="text" name="answer2" id="answer2"/>

                <label htmlFor="answer3">Resposta 3</label>
                <input type="text" name="answer3" id="answer3"/>

                <label htmlFor="answer4">Resposta 4</label>
                <input type="text" name="answer4" id="answer4"/>

                <label htmlFor="right">Resposta correta</label>
                <select name="right" id="right">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <div className={styles.buttons}>

                    <button type="submit">Enviar</button>
                    <button type="reset">Resetar</button>

                </div>
            </form>
        </div>
        </>
    );
}