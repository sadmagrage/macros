import { fetchData } from "./fetchData.js";

const data = await fetchData();

let comida = "";
const data_obj = {};

data.map(item => {
    data_obj[item.nome] = item;

    comida += `
    <div class='comida'>
        <label>${item.nome}</label>
        <input class='inputComida' id='${item.nome}' />
    </div>
    `;
});

export { data_obj, comida, data };