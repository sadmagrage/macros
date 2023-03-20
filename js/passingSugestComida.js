import { sugest, sugestComida } from "./state.js";
import { data } from "./returnComida.js";

const passingSugestComida = (currentMacro, floor, ceilling) => {
    let obj = sugestComida[currentMacro];

    if (currentMacro == "proth") {
        data.map(item => {
            if (item.proth > 0) {
                let passarItem = {};

                Object.keys(item).map(item2 => {
                    passarItem[item2] = item[item2];
                });

                passarItem['grama'] = (parseFloat(sugest['falta' + currentMacro.charAt(0).toUpperCase() + currentMacro.slice(1)])/item.proth).toFixed(2);
                obj[item.nome] = passarItem;
            }
        });
    }
    else {
        data.map(item => {
            if ((item['carb'] >= floor && item['carb'] < ceilling) || (currentMacro === 'Carb' && item.nome === 'Suco prats') || (currentMacro === 'carb' && item.nome === 'Feijao')){
                let passarItem = {};

                Object.keys(item).map(item2 => {
                    passarItem[item2] = item[item2];
                });
                let somaSugest = parseFloat(sugest['faltaCarb']) + (parseFloat(sugest['faltaFat'])*9/4);
                let divisaoSugest = item.carb + (item.fat * 9/4);
                passarItem['grama'] = (somaSugest/divisaoSugest).toFixed(2);
                obj[item.nome] = passarItem;
            }
        });
        sugestComida[currentMacro] = obj;
    }
};

export { passingSugestComida }