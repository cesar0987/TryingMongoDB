const Estudiantes = require("../modelos/modelosEstudiantes");

module.exports.todosLosEstudiantes = (req, res) => {
  Estudiantes.find().then((estudiantes) => {
    res.json(estudiantes);
  });
};

module.exports.agregarEstudiante = (req, res) => {
  const estudiante = new Estudiantes({
    name: req.body.name,
    home_state: req.body.home_state,
    lucky_number: req.body.lucky_number,
    birthday: {
      month: req.body.birthday.month,
      day: req.body.birthday.day,
      year: req.body.birthday.year,
    },
  });

  return Estudiantes.create(estudiante)
    .then((estudiantesConId) => {
      return res.status(201).json(estudiantesConId);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.removerEstudiante = (req, res) => {
  Estudiantes.findByIdAndRemove(req.params.id)
    .then((estudiante) => {
      if (!estudiante) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
      }
      return res.status(200).json({ message: "Estudiante eliminado" });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.estudiantePorCiudad = (req, res) => {
  Estudiantes.find({ home_state: req.params.ciudad })
    .then((estudiantes) => {
      if (!estudiantes) {
        return res
          .status(404)
          .json({ message: "No se encontraron estudiantes en esta ciudad" });
      }
      return res.status(200).json(estudiantes);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.numeroSuerteMayorA = (req, res) => {
  Estudiantes.find({ lucky_number: { $gt: req.params.numero } })
    .then((estudiantes) => {
      if (!estudiantes) {
        return res.status(404).json({
          message:
            "No se encontraron estudiantes con un número de la suerte mayor a este",
        });
      }
      return res.status(200).json(estudiantes);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.agregarInteresesATodos = (req, res) => {
  const nuevosIntereses = ["codificación", "brunch", "MongoDB"]; // Intereses a agregar

  Estudiantes.updateMany(
    {},
    { $push: { intereses: { $each: nuevosIntereses } } }
  )
    .then((result) => {
      return res.status(200).json({
        message: "Intereses agregados a todos los estudiantes",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.agregarImpuestos = (req, res) => {
  Estudiantes.updateMany(
    { lucky_number: { $gt: 7 } },
    { $set: { impuestos: true } }
  )

    .then((result) => {
      return res.status(200).json({
        message:
          "Impuestos agregados a los estudiantes con número de la suerte mayor a 7",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.eliminarPorCiudad = (req, res) => {
  Estudiantes.deleteMany({ home_state: req.params.ciudad })
    .then((result) => {
      return res.status(200).json({
        message: "Estudiantes eliminados",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.eliminarPorNombre = (req, res) => {
  Estudiantes.deleteMany({ name: req.params.name })
    .then((result) => {
      return res.status(200).json({
        message: "Estudiantes eliminados",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.eliminarUnoPorNumeroSuerteMayorA = (req, res) => {
  Estudiantes.deleteOne({ lucky_number: { $gt: req.params.numero } })
    .then((result) => {
      return res.status(200).json({
        message: "Estudiantes eliminados",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.eliminarLuckyNumber = (req, res) => {
  Estudiantes.deleteMany({ lucky_number: req.params.lucky_number })
    .then((result) => {
      return res.status(200).json({
        message: "Estudiantes eliminados",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

module.exports.establecerFechaActual = (req, res) => {
  const fechaActual = new Date();
  Estudiantes.updateMany(
    {},
    {
      $set: {
        birthday: {
          month: fechaActual.getMonth() + 1,
          day: fechaActual.getDate(),
          year: fechaActual.getFullYear(),
        },
      },
    }
  )
    .then((result) => {
      return res.status(200).json({
        message: "Fecha actual establecida",
        result: result,
      });
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};
