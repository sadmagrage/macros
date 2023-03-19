import { macros, statsPessoa, sugest, statsComida } from "./state.js";
import { fetchData } from "./fetchData.js";

export const running = () => {
    let peso, bf, idade, altura, supino, agacho, terra, stiff, restante, velocidade, minutos, superavit, deficit, adicional, stats, comida;

    stats = statsPessoa;
    comida = statsComida;

    peso = (typeof(stats.peso) !== 'undefined') ? parseFloat(stats.peso) : 0;
    bf = (typeof(stats.bf) !== 'undefined') ? parseFloat(stats.bf) : 0; 
    idade = (typeof(stats.idade) !== 'undefined') ? parseInt(stats.idade) : 0; 
    altura = (typeof(stats.altura) !== 'undefined') ? parseFloat(stats.altura) : 0;
    superavit = (typeof(stats.superavit) !== 'undefined') ? parseFloat(stats.superavit) : 0;
    deficit = (typeof(stats.deficit) !== 'undefined') ? parseInt(stats.deficit) : 0;
    supino = (typeof(stats.supino) !== 'undefined') ? parseInt(stats.supino) : 0;
    agacho = (typeof(stats.agacho) !== 'undefined') ? parseInt(stats.agacho) : 0;
    terra = (typeof(stats.terra) !== 'undefined') ? parseInt(stats.terra) : 0;
    stiff = (typeof(stats.stiff) !== 'undefined') ? parseInt(stats.stiff) : 0;
    restante = (typeof(stats.restante) !== 'undefined') ? parseInt(stats.restante) : 0;
    velocidade = (typeof(stats.velocidade) !== 'undefined') ? parseFloat(stats.velocidade) : 0;
    minutos = (typeof(stats.minuto) !== 'undefined') ? parseInt(stats.minuto) : 0;
    adicional = (typeof(stats.adicional) !== 'undefined') ? parseFloat(stats.adicional) : 0;

    let pesoGordo = peso * bf;
    let pesoMagro = peso - pesoGordo;
    let harrisBenedictMale = (peso === 0) ? 0 : (66.5 + (13.75 * pesoMagro) + (5.003 * altura) - (6.755 * idade));
    let basal = harrisBenedictMale * 1.3;
    let indice = pesoMagro * 90 * 0.1;
    let treino = (1.25 * supino * indice / 34) + (1.5 * terra * indice / 34) + (2 * agacho * indice / 34) + (1.5 * indice * stiff / 34) + (indice * restante / 34);
    let cardio = 0.0175 * pesoMagro * velocidade * minutos;
    let gasto = (typeof(stats.superavit) !== 'undefined') ? (basal + treino + cardio + adicional) * (1 + superavit) : basal + treino + cardio + adicional - deficit ;

    let carb, protl, proth, fat;
    carb = 0;
    protl = 0;
    proth = 0;
    fat = 0;
        
    Object.keys(comida).forEach(item => {
        let grama = parseInt(comida[item].grama);
  
        carb += comida[item].carb * grama;
        protl += comida[item].protl * grama;
        proth += comida[item].proth * grama;
        fat += comida[item].fat * grama;
    });
        
    let prothMeta = pesoMagro * 2 * 0.9;
    let protlMeta = pesoMagro * 2 * 0.1;
    protl = (protl > protlMeta) ? protlMeta : protl;
    proth = (proth > prothMeta) ? prothMeta : proth;
    let kcal = 4 * (carb + protl + proth) + fat * 9;
  
    macros["carb"] = carb;
    macros["protl"] = protl;
    macros["proth"] = proth;
    macros["fat"] = fat;
    macros["kcal"] = kcal;
    macros["gasto"] = gasto;

    let fatMeta = pesoMagro;
    let carbMeta = (gasto - (fatMeta * 9 + 4 * (protlMeta + prothMeta))) / 4;

    sugest["faltaCarb"] = carbMeta - carb;
    sugest["faltaProtl"] = protlMeta - protl;
    sugest["faltaProth"] = prothMeta - proth;
    sugest["faltaFat"] = fatMeta - fat;
    sugest["faltaKcal"] = gasto - kcal;
}