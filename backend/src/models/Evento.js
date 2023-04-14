const { Schema, model } = require("mongoose");

const EventosSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    lugar: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    Hora: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Event", EventosSchema);
