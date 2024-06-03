const mongoose = require("mongoose");

const ColeccionEstudiantes = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  home_state: {
    type: String,
    required: true,
  },
  lucky_number: {
    type: Number,
    required: true,
  },
  birthday: {
    month: {
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  intereses: {
    type: [String], // Define que es un array de strings
    default: ["codificación", "brunch", "MongoDB"], // Asigna los valores por defecto
  },
  belts_earned: {
    type: Number,
    required: true,
    default: !(this.home_state === "Washington") ? 0 : 1,
  },
});

const Estudiantes = mongoose.model("Estudiantes", ColeccionEstudiantes);

module.exports = Estudiantes;
