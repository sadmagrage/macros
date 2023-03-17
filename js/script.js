// import number from "./displayComida.js";

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

DIV_STATS.style.backgroundColor = "purple";

DIV_STATS.innerHTML += ['Peso', 'Bf', 'Idade', 'Altura', 'Superavit', 'Deficit', 'Supino', 'Agacho', 'Terra', 'Stiff', 'Restante', 'Velocidade', 'Minuto', 'Adicional'].map(item => {
    return (
    <div class="stats">
        <label>${item}</label>
        <input id placeholder={typeof() === 'undefined'? "" : value } />
    </div>
    );
    // return <Item key={item} name={item} clName='stats' action={(text) => toStats(text, item.toLowerCase())} value={preSet[item.toLowerCase()]} />
});