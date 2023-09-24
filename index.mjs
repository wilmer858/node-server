import readlineSync from "readline-sync";
import chalk from "chalk";
console.clear();
import {
  mostrarTareas,
  agregarTarea,
  eliminarTarea,
  completarTarea,
} from "./tareas.mjs";

const principal = async () => {
  while (true) {
    console.log(chalk.cyanBright("==================="));
    console.log(chalk.cyanBright.bold("       MENU       "));
    console.log(chalk.cyanBright("==================="));
    console.log(
      chalk.greenBright.bold("1. ") + chalk.whiteBright.italic("Crear tarea")
    );
    console.log(
      chalk.greenBright.bold("2. ") + chalk.whiteBright.italic("Listar tareas")
    );
    console.log(
      chalk.greenBright.bold("3. ") + chalk.whiteBright.italic("Eliminar tarea")
    );
    console.log(
      chalk.greenBright.bold("4. ") +
        chalk.whiteBright.italic("Completar tarea")
    );
    console.log(
      chalk.greenBright.bold("5. ") + chalk.whiteBright.italic("Salir\n")
    );

    const opciones = readlineSync.questionInt(
      chalk.blueBright("Igrese un numero para elegir una opcion: \n")
    );

    switch (opciones) {
      case 1:
        const descripcion = readlineSync.question(
          "Ingrese una descripcion para agregar una tarea: "
        );
        try {
          await agregarTarea(descripcion);
        } catch (error) {
          console.log("Error al agregar tareas:", error);
        }
        console.clear();
        break;

      case 2:
        try {
          await mostrarTareas();
        } catch (error) {
          console.log("Error al mostrar las tareas:", error);
        }
        break;

      case 3:
        const indiceAeliminar = readlineSync.questionInt(
          "Ingrese el indice de la tarea a eliminar: "
        );
        try {
          await eliminarTarea(indiceAeliminar - 1);
        } catch (error) {
          console.log("Error al eliminar la tarea:", error);
        }
        console.clear();
        break;

      case 4:
        const indiceAcompletar = readlineSync.questionInt(
          "Ingrese el indice de la tarea a completar: "
        );
        completarTarea(indiceAcompletar - 1)
          .then(() => {
            console.log("Tarea completada exitosamente.");
          })
          .catch((error) => {
            console.error("Error al completar la tarea:", error);
          });
        console.clear();
        break;

      case 5:
        return;
      default:
        console.log("Opcion no valida");
        console.clear();
    }
  }
};

principal();
