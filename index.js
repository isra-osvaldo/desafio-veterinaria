import { registrar, leer } from "./operaciones.js";

// Desestructuración de argumentos desde linea de comandos
const [operacion, nombre, edad, tipoAnimal, color, enfermedad] = process.argv.slice(2)

// Menu principal
function main() {
  switch (operacion) {
    case "registrar":
      registrar(nombre, edad, tipoAnimal, color, enfermedad);
      break;
    case "leer":
      leer();
      break;    
    default:
      console.log("Operación no valida ❌:", operacion);
  }
}

main()
