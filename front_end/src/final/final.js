import { results } from "./../game/game.js";
import { getData } from "./../game/fetch.js";

const final_text = document.querySelector('#final_text');

console.log(results);

getData().then((data)=>{

    let counter = 0;
    for(let x=0;x<results.lenght;x++){
        if(data[x].result == results[x]) counter ++;
        console.log(data[x].result);
        
    }

    final_text.textContent = `Parabéns!!! Você acertou ${counter} questões C:`;

})




