const express = require("express");
const RutasEstudiantes = require("./rutas/rutasEstudiantes");
const app = express();
const port = 3000;

require("./configuracion/baseDeDatos");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

RutasEstudiantes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
