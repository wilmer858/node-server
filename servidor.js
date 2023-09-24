const http = require("http");

const port = 8080;
const host = "localhost";

const tareas = [
  { id: 1, descripcion: "Terminar proyecto de node", completada: true },
  { id: 2, descripcion: "Hacer tareas de React", completada: true },
  {
    id: 3,
    descripcion: "Revisar el codigo del laboratorio",
    completada: false,
  },
];

const sever = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tareas") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(tareas, null, 2));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end("Ruta no encontrada");
  }
});

sever.listen(port, () => {
  console.log(`Ruta al servidor: http://${host}:${port}/tareas`);
});
