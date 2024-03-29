import { macros, statsPessoa, statsComida } from "./state.js";
import { navItem } from "./returnNavItem.js";
import { running } from "./running.js";
import { returnStats } from "./returnStats.js";
import { comida, data_obj } from "./returnComida.js";
import { res, updateResSugest } from "./returnRes.js";
import { passingByWeek } from "./passingByWeek.js";

const NAV = document.querySelector("#nav");
const DIV_STATS = document.querySelector("#divStats");
const DIV_COMIDA = document.querySelector("#divComida");
const RES = document.querySelector("#res");

const LEFT_ICON = document.querySelector("#leftIcon");
const RIGHT_ICON = document.querySelector("#rightIcon");

LEFT_ICON.addEventListener("click", () => {
    getComputedStyle(NAV).display == 'none' ? NAV.style.display = 'flex' : NAV.style.display = 'none';
});

RIGHT_ICON.addEventListener("click", () => {
    getComputedStyle(RES).display == 'none' ? RES.style.display = 'flex' : RES.style.display = 'none';  
});

DIV_STATS.innerHTML = returnStats();
DIV_COMIDA.innerHTML = comida;
RES.innerHTML = res;

const SUGEST = document.querySelector("#sugest");

const update = () => {
    Object.keys(macros).map(item => {
        document.querySelector(`#res${item}`).innerHTML = parseFloat(macros[item]).toFixed(2);
    });

    let nav_items = "<div class=\"scrollSugest\">";

    Object.keys(statsComida).map(item => {
        nav_items += navItem(statsComida[item].img, statsComida[item].nome, statsComida[item].grama);
    });

    NAV.innerHTML = nav_items + "</div>";
    SUGEST.innerHTML = updateResSugest();
};

passingByWeek();

const inputPessoa = document.querySelectorAll('.inputStats');
const comidas = document.querySelectorAll('.inputComida');

for(let i = 0; i < inputPessoa.length; i++){
    inputPessoa[i].addEventListener('input', (e) => {
        statsPessoa[e.target.id] = eval(e.target.value);
        if (statsPessoa[e.target.id] == undefined) {
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
        passsingToStatsComida['grama'] = eval(e.target.value);

        statsComida[e.target.id] = passsingToStatsComida;
        if (statsComida[e.target.id]['grama'] == undefined) {
            delete statsComida[e.target.id];
        }
        running();
        update();
    });
}

export { update }