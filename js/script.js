import { macros, statsPessoa, sugest, statsComida } from "./state.js";
import { navItem } from "./returnNavItem.js";
import { running } from "./running.js";
import { returnStats } from "./returnStats.js";
import { comida, data_obj } from "./returnComida.js";
import { res } from "./returnRes.js";

const NAV = document.querySelector("#nav");
const DIV_STATS = document.querySelector("#divStats");
const DIV_COMIDA = document.querySelector("#divComida");
const RES = document.querySelector("#res");
const SUGEST = document.querySelector("#sugest");

const LEFT_ICON = document.querySelector("#leftIcon");
const RIGHT_ICON = document.querySelector("#rightIcon");

LEFT_ICON.addEventListener("click", () => {
    getComputedStyle(NAV).display == 'block' ? NAV.style.display = 'none' : NAV.style.display = 'block';
});

RIGHT_ICON.addEventListener("click", () => {
    getComputedStyle(RES).display == 'none' ? RES.style.display = 'flex' : RES.style.display = 'none';  
});

DIV_STATS.innerHTML = returnStats();
DIV_COMIDA.innerHTML = comida;
RES.innerHTML = res;

const update = () => {
    Object.keys(macros).map(item => {
        document.querySelector(`#res${item}`).innerHTML = macros[item];
    });

    let nav_items = "";

    Object.keys(statsComida).map(item => {
        nav_items += navItem(statsComida[item].img, statsComida[item].nome, statsComida[item].grama);
    });

    NAV.innerHTML = nav_items;
};

const inputPessoa = document.querySelectorAll('.inputStats');
const comidas = document.querySelectorAll('.inputComida');

for(let i = 0; i < inputPessoa.length; i++){
    inputPessoa[i].addEventListener('input', (e) => {
        statsPessoa[e.target.id] = e.target.value;
        if (statsPessoa[e.target.id] == "") {
            delete statsPessoa[e.target.id];
        }
        running();
        update();
    });
}

for(let i = 0; i < comidas.length; i++){
    comidas[i].addEventListener('input', (e) => {
        const passsingToStatsComida = {};
        Object.keys(data_obj[e.target.id]).map(item => {
            passsingToStatsComida[item] = data_obj[e.target.id][item];
        });
        passsingToStatsComida['grama'] = e.target.value;

        statsComida[e.target.id] = passsingToStatsComida;
        if (statsComida[e.target.id]['grama'] == "") {
            delete statsComida[e.target.id];
        }
        running();
        update();
    });
}