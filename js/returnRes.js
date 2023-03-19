import { macros, sugest } from "./state.js";
import { data } from "./returnComida.js";

let resMacro = "";
let resSugest = "";

Object.keys(macros).map(item => {
    resMacro += `<div style="display:flex; color: white; font-size: 25px"><p style="width: 80px">${item}:</p><p id='res${item}'>0</p></div>`;
});

data.map(item => {
    if (item.proth > 0) {
        //SO FALTA TERMINA O RES E COLOCA PLACEHOLER C VALOR PRESETADO COM EVAL E JA ERA ACHO
    }
    else {

    }
});

let adding = `
    <div style="background-color: black; color: white; display: flex">
        <div>
            <p style="color: white; background-color: red;">{item}</p>
            <div class="navitem" style="display: flex">
                <img src="https://cf.shopee.com.br/file/cbf20b122e2574ab47a61d37b05e50ba" id="imgComida" alt="noImg"/>
                <div id="statsComida">
                    <h2 class="textComida" id="h2Comida" style="color: white">{obj.nome}</h2>
                    <p class="textComida" id="textComida">{obj.grama}g</p>
                </div>
            </div>
        </div>
    </div>`;

let res = `
<div id="resMacros">${resMacro}</div>
<div id="sugest" style="background-color: red;">${resSugest}</div>`;

export { res };