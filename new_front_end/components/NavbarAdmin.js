import Link from 'next/link'
import styles from '../styles/NavbarAdmin.module.css'

export default function NavbarAdmin(){

    return(

        <header className={styles.navbar}>

            <Link href={"/admin/admain"}><span>Back</span></Link>
            <Link href={"/"}><span>Play</span></Link>

        </header>
    );
}