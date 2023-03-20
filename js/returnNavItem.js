export const navItem = (img, nome, grama) => {
    return `
        <div class="navitem">
            <img src="${img}" id="imgComida" alt="noImg"/>
            <div id="statsComida">
                <p class="textComida" id="h2Comida">${nome}</>
                <p class="textComida" id="textComida">${grama}g</p>
            </div>
        </div>`;
};