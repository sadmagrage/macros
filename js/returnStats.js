const returnStats = () => {
    let stats = "";

    ['Peso', 'Bf', 'Idade', 'Altura', 'Superavit', 'Deficit', 'Supino', 'Agacho', 'Terra', 'Stiff', 'Restante', 'Velocidade', 'Minuto', 'Adicional'].map(item => {
        stats += `
        <div class="stats">
            <label>${item}</label>
            <input class='inputStats' id='${item.toLowerCase()}' placeholder='' />
        </div>`;
    });

    return stats;
}

export { returnStats };