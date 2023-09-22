import chalk from "chalk";

const listaTareas = [];

const mostrarTareas = () => {
  console.clear();
  console.log(chalk.greenBright.bold("__Lista de Tareas__\n"));
  listaTareas.forEach((tarea, indice) => {
    console.log(
      ` ${tarea.completada ? "✔️" : "◯"}   ${indice + 1}. ${tarea.descripcion}`
    );
  });
  console.log(chalk.greenBright.bold("___________________\n"));
};
const agregarTarea = (descripcion) => {
  listaTareas.push({ descripcion, completada: false });
  console.log("La tarea ha sido agregada");
};

const eliminarTarea = (indice) => {
  if (indice >= 0 && indice <= listaTareas.length) {
    listaTareas.splice(indice, 1);
    console.log("La tarea ha sido eliminada ❌");
  } else {
    ("El indice que ingreso no es valido");
  }
};
const completarTarea = (indice) => {
  if (indice >= 0 && indice <= listaTareas.length) {
    listaTareas[indice].completada = true;
    console.log("La tarea ha sido completada");
  } else {
    ("El indice que ingreso no es valido");
  }
};

export { mostrarTareas, agregarTarea, eliminarTarea, completarTarea };
