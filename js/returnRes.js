import { macros, sugest, sugestComida } from "./state.js";
import { passingSugestComida } from "./passingSugestComida.js";

let resMacro = "";

Object.keys(macros).map(item => {
    resMacro += `<div id="objKeysMacros"><p style="padding-right: 5px;">${item}:</p><p id='res${item}'>0</p></div>`;
});

const updateResSugest = () => {
    Object.keys(sugest).map(item => {
        const currentMacro = item.slice(5).toLowerCase();
        if (sugest[item] > 0) {
            if (currentMacro == 'carb' || currentMacro == 'proth' || currentMacro == 'fat') {
                sugestComida[currentMacro] = [];
    
                if (item == 'faltaCarb' || item == 'faltaFat') {
                    passingSugestComida(currentMacro, 0.2, 1);
                }
                else {
                    passingSugestComida(currentMacro, "", "");
                }
            }
            else {
                sugestComida[currentMacro] = `Falta ${parseFloat(sugest[item]).toFixed(2)}g de ${currentMacro}`;
            }
        }
        else {
            sugestComida[currentMacro] = `Passou ${-parseFloat(sugest[item]).toFixed(2)}g ${item.slice(5)}`;
        }
    });
    
    let resSugestComida = "";

    Object.keys(sugestComida).map(item => {
        if (typeof(sugestComida[item]) == "string") {
            resSugestComida += `
            <div class="resSugestComida">
                <div>
                    <p class="macro">${item.charAt(0).toUpperCase() + item.slice(1)}</p>
                    <p class="noSugest">${sugestComida[item]}</p>
                </div>
            </div>
            `;
        }
        else {
            resSugestComida += `
            <div class="resSugestComida">
                <div>
                    <p class="macro">${item.charAt(0).toUpperCase() + item.slice(1)}</p>
                    <p class="noSugest">${parseFloat(sugest["falta" + item.charAt(0).toUpperCase() + item.slice(1)]).toFixed(2)}g de ${item.charAt(0).toUpperCase() + item.slice(1)}</p>`
            Object.keys(sugestComida[item]).map(item2 => {
                resSugestComida += `
                    <div class="navitem">
                        <img src="${sugestComida[item][item2].img}" id="imgComida" alt="noImg"/>
                        <div id="statsComida">
                            <h2 class="textComida" id="h2Comida">${sugestComida[item][item2].nome}</h2>
                            <p class="textComida" id="textComida">${sugestComida[item][item2].grama}</p>
                        </div>
                    </div>
                `;
            });
            resSugestComida += `</div></div>`;
        }
    });
    return resSugestComida;
};

let res = `
<div id="resMacros">${resMacro}</div>
<div id="sugest"></div>`;

export { res, updateResSugest };