const ControladorEstudiantes = require("../controladores/controladoresEstudiantes");

module.exports = (app) => {
  app.get("/api/estudiantes", ControladorEstudiantes.todosLosEstudiantes);
  app.post("/api/estudiantes/nuevo", ControladorEstudiantes.agregarEstudiante);
  app.delete("/api/estudiantes/:id", ControladorEstudiantes.removerEstudiante);
  app.get(
    "/api/estudiantes/:ciudad",
    ControladorEstudiantes.estudiantePorCiudad
  );
  app.get(
    "/api/estudiantes/numeroSuerteMayorA/:numero",
    ControladorEstudiantes.numeroSuerteMayorA
  );
  //Agregar array de intereses a los estudiantes
  app.patch(
    "/api/estudiantes/:id/intereses",
    ControladorEstudiantes.agregarInteresesATodos
  );
  //Agregar impuesto a los estudiantes
  app.patch(
    "/api/estudiantes/:id/impuesto",
    ControladorEstudiantes.agregarImpuestos
  );
  //Eliminar por ciudad
  app.delete(
    "/api/estudiantes/ciudad/:ciudad",
    ControladorEstudiantes.eliminarPorCiudad
  );
  //Eliminar por Nombre
  app.delete(
    "/api/estudiantes/nombre/:nombre",
    ControladorEstudiantes.eliminarPorNombre
  );
  //Eliminar por numero de suerte mayor a
  app.delete(
    "/api/estudiantes/numeroSuerte/:numero",
    ControladorEstudiantes.eliminarUnoPorNumeroSuerteMayorA
  );
  //Eliminar lucky_number de todos los estudiantes
  app.patch(
    "/api/estudiantes/eliminarLuckyNumber",
    ControladorEstudiantes.eliminarLuckyNumber
  );
  //Establecer el valor de la fecha actual
  app.patch(
    "/api/estudiantes/fechaActual",
    ControladorEstudiantes.establecerFechaActual
  );
};
