import styles from '../../styles/Delete.module.css'
import NavbarAdmin from '../../components/NavbarAdmin';
import Router from 'next/router' //to force a refresh

//Getting questions from API
export async function getStaticProps(){

    const data = await fetch("http://localhost:3003/questions/list");
    const questions =await data.json();

    console.log(questions);

    return{
        props: {questions},
    }
}

//Deleting questions from API
export default function Delete({questions}){

    async function Trash(qst){

        console.log("ola")
        console.log(qst)

        const url = `http://localhost:3003/questions/delete/${qst}`
        const deleteObject ={
    
            method: 'delete',
            headers: new Headers(),
        }
    
        const data = fetch(url, deleteObject);
        const res = await data;
        
        Router.reload(window.location.pathname);

        console.log(res);
    }  

    return(
        
        <>
        <div className={styles.container}>

            <NavbarAdmin/>
            <div className={styles.subcontainer}>
                <h1>Questões</h1>

                <ul className={styles.list}>

                    {questions.map((qst)=> (
                        <li key={qst.id}>

                            {qst.question}

                            <img onClick={()=>Trash(qst.id)} src={"/img/trash.png"} alt="trash" className={styles.trash}></img>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </ >
    );
}