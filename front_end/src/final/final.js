import { getData } from "./data.js";
//import {results} from "./../game/game.js";

getData().then((data) => {

    let count =0;

    for(let x=0; x<data.lenght;x++){

        if(data[x].result == results[x]) count++;
    }

    console.log(count);

})