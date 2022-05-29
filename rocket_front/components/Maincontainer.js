import Footer from "./Footer"
import Head from 'next/head'

export default function MainContainer({children}){

    return(
        <>
        <Head>
            <title>Rocket Quiz</title>
            <meta name="description" content="Quiz divertido para jogar com seus amigos" />
            <link rel="icon" href="/icons/rocket-icon.png" />
        </Head>

        <div>{children}</div>
            
        <Footer/>
        </>
    );
}