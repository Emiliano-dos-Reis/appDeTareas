
const process = require ('process')

let tareasJson= require ('./tareas.json');

let tareasNuevas = JSON.stringify(tareasJson);


const accion = process.argv[2]


switch (accion)  {
    case 'listar':
        console.log (tareasNuevas);
        break;

    case undefined  :
        console.log ('Atención - Tienes que pasar una acción');
            break;
        default:
            console.log ('No entiendo que deseas hacer');
            break; 

}

module.exports = tareasNuevas



