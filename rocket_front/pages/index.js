import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <h1>Are you ready?</h1>
      <input type="text" placeholder='Insert your name'></input>
      <Link href={"/game"}><a>Play</a></Link>
      <Link href={"/score"}><a>Score</a></Link>

    </div>
  )
}