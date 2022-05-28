import styles from '../../styles/Admain.module.css'
import Link from 'next/link'

export default function Main(){

    return(
        
        <>
        <div className={styles.container}>

            <h1>Administrador</h1>

            <div className={styles.subcontainer}>
                <Link href={"/admin/register"}><button>Cadastrar</button></Link>
                <Link href={"/admin/delete"}><button>Deletar</button></Link>
            </div>

        </div>
        </>
    );
}