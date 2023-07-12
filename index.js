const archivo = require("fs");
const path = "./files/plano.txt";

async function escribir(mensaje) {
    await archivo.appendFile(path, mensaje, (error) => {
      if (error) console.log(error);
      else console.log("El archivo modificado");
    });
}

let nombre = process.argv[2];
let apellido = process.argv[3];

archivo.appendFileSync(path, `Hola ${nombre}, tu apellido es ${apellido}\n`);
//archivo.appendFileSync(path, "Chao Mundo!\n");

//escribir("Este texto es asincrónico\n")

console.log(archivo.readFileSync(path).toString())

//archivo.unlinkSync(path) //elimina el archivo