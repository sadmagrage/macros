import { fetchData } from "./fetchData.js";

const DATA = await fetchData();

const BODY = document.querySelector("body");
const HEADER = document.querySelector('#header');
const CONTAINER = document.querySelector("#container");
const NAV = document.querySelector("#nav");
const CONTENT = document.querySelector("#content");
const DIV_STATS = document.querySelector("#divStats");
const DIV_COMIDA = document.querySelector("#divComida");
const RES = document.querySelector("#res");
const SUGEST = document.querySelector("#sugest");

const LEFT_ICON = document.querySelector("#leftIcon");
const RIGHT_ICON = document.querySelector("#rightIcon");


LEFT_ICON.addEventListener("click", () => {
    NAV.innerHTML = 'sdjiiasj';
    getComputedStyle(NAV).display != 'flex' ? NAV.style.display = 'flex' : NAV.style.display = 'none';
});

RIGHT_ICON.addEventListener("click", () => {
    RES.innerHTML = 'sdjiiasj';
    console.log(getComputedStyle(RES).display);
    getComputedStyle(RES).display != 'flex' ? RES.style.display = 'flex' : RES.style.display = 'none';  
});

NAV.innerHTML = `
<div  class="navitem">
    <img src="https://cf.shopee.com.br/file/cbf20b122e2574ab47a61d37b05e50ba" id="imgComida" alt="noImg"/>
    <div id="statsComida">
        <h2 class="textComida" id="h2Comida" style="color: white">dasdsa</h2>
        <p class="textComida" id="textComida">{obj.grama}g</p>
    </div>
</div>`;


RES.innerHTML = `
<p style="color: white">macros</p>
<div id="sugest" style="background-color: red;">
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
    </div>
</div>`;

// DIV_STATS.style.backgroundColor = "purple";

let stats = "";
let comida = "";
let data = "";

['Peso', 'Bf', 'Idade', 'Altura', 'Superavit', 'Deficit', 'Supino', 'Agacho', 'Terra', 'Stiff', 'Restante', 'Velocidade', 'Minuto', 'Adicional'].map(item => {
    stats += `
    <div class="stats">
        <label>${item}</label>
        <input id='${item.toLowerCase()}' placeholder='' />
    </div>`;
});

DATA.map(item => {
    comida += `
    <div class='comida'>
        <label>${item.nome}</label>
        <input class='inputComida' type='number' id='${item.nome.toLowerCase()}' />
    </div>
    `;
});


DIV_STATS.innerHTML = stats;
DIV_COMIDA.innerHTML = comida;

// const comidas = document.querySelectorAll('.inputComida');
const comidas = document.querySelectorAll('input');

for(let i = 0; i < comidas.length; i++){
    comidas[i].addEventListener('input', (e) => {
        console.log('Acessado:' + e.target.id + ' Valor: ' + e.target.value);
    })
}
// console.log(document.querySelectorAll('.comida')[0].childNodes[3].value);