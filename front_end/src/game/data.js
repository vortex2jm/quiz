async function fechData(){

    try{
        const response = await fetch("http://localhost:3003/");
        const jsonData = await response.json();
    }

    catch(error){
       
        console.log("Error");
    }

}

export {fechData};


