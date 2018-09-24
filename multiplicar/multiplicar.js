// requieres
const fs = require('fs'); //No straemos un paquete propio Node
const colors = require('colors');

/*Funcion para imprimir en consola l atabla con limite */
let data2 = '';

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`La base o el límite no son número`)
            return;
        }
        console.log(`==================`.green);
        console.log(`tabla de ${base}`.green);
        console.log(`==================`.green);

        for (let index = 1; index <= limite; index++) {

            data2 += `${base} * ${index} = ${base*index} \n`;
        }
        resolve(data2);
    });

}


/*Función para crear el archivo de la multi */

let data = '';


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`No es un número`);
                return;
            }
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i} \n`;
            }

            fs.writeFile(`./tablas/tabla-${base}`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${base}`);
            })
        }

    );
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}