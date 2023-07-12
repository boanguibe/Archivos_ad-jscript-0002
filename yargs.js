const yargs = require("yargs");
const colores = require("colors");
const archivo = require("fs");

const path = "./files/plano.txt";
 async function escribir(mensaje) {
    await archivo.appendFile(path, mensaje, (error) => {
      if (error) console.log(error);
      else console.log("El archivo modificado");
    });
  }

yargs.option({
  u: { demandOption: true, alias: "usuario" },
  a: { demandOption: true, alias: "apellido" },
});
const parametros = yargs.argv;

console.log(parametros.usuario.red)
console.log(parametros.apellido.bgGreen)

escribir(`${parametros.usuario} ${parametros.apellido} \n`);

