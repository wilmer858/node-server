import chalk from "chalk";

const listaTareas = [];

const mostrarTareas = () => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      console.clear();
      console.log(chalk.greenBright.bold("__Lista de Tareas__\n"));
      listaTareas.forEach((tarea, indice) => {
        console.log(
          ` ${tarea.completada ? "✔️" : "◯"}   ${indice + 1}. ${
            tarea.descripcion
          }`
        );
      });
      console.log(chalk.greenBright.bold("___________________\n"));
      resolve();
    }, 1000);
  });
};

const agregarTarea = (descripcion) => {
  return new Promise((resolve, reject) => {
    const listaTarea = listaTareas.push({ descripcion, completada: false });
    console.log("La tarea ha sido agregada");
    resolve(listaTarea);
  });
};

const eliminarTarea = (indice) => {
  return new Promise((resolve, reject) => {
    if (indice >= 0 && indice <= listaTareas.length) {
      listaTareas.splice(indice, 1);
      console.log("La tarea ha sido eliminada ❌");
    } else {
      ("El indice que ingreso no es valido");
    }
    resolve();
  });
};

const completarTarea = (indice) => {
  return new Promise((resolve, reject) => {
    if (indice >= 0 && indice <= listaTareas.length) {
      listaTareas[indice].completada = true;
      console.log("La tarea ha sido completada");
    } else {
      ("El indice que ingreso no es valido");
    }
    resolve();
  });
};

export { mostrarTareas, agregarTarea, eliminarTarea, completarTarea };
