import { update } from "./script.js";
import { running } from "./running.js";
import { statsPessoa } from "./state.js";

const passingByWeek = () => {
    const dia = new Date().getDay();
    const alreadySet = [{label: 'peso', value: '95'}, {label: 'bf', value: '0.2'}, {label: 'idade', value: '19'}, {label: 'altura', value: '172'}, {label: 'deficit', value: '734'}];

    switch (dia) {
        case 1:
            alreadySet.push({label: 'agacho', value: '16'});
            break;
        case 2:
            alreadySet.push({label: 'terra', value: '4'}, {label: 'restante', value: '16'});
            break;
        case 3:
            alreadySet.push({label: 'restante', value: '40'});
            break;
        case 4:
            alreadySet.push({label: 'stiff', value: '4'}, {label: 'restante', value: '28'});
            break;
        case 5:
            alreadySet.push({label: 'supino', value: '8'}, {label: 'restante', value: '20'});
            break;
    
        default:
            alreadySet.push({label: 'velocidade', value: '5'}, {label: 'minuto', value: '120'});
            break;
    }

    alreadySet.map(item => {
        document.querySelector(`#${item.label}`).placeholder = item.value;
        statsPessoa[`${item.label}`] = item.value;
    });

    running();
    update();
}

export { passingByWeek }