// requieres
const { crearArchivo } = require(`./multiplicar/multiplicar`);
const { listarTabla } = require(`./multiplicar/multiplicar`);
const argv = require('./config/yargs').argv; //Me traigo unicamente el objeto argv
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite).
        then(lista => console.log(lista))
            .catch(err => console.log(`El valor del limite: ${argv.limite} o el de la base: ${argv.base} no son némeros`));
        break;

    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).
        then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(err => console.log(`El valor introducido ${base} no es un número`));
        break;

    default:
        console.log('Comando no reconocido');

}




// parametro = argv[2];
// let base = parametro.split("=")[1];