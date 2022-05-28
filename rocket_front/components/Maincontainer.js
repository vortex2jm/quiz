import Footer from "./Footer";

export default function MainContainer({children}){

    return(

        <>
        <div>{children}</div>
        <Footer/>
        </>
    );
}