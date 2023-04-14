const { Schema, model } = require("mongoose");

const MensajesSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
    correo: {
      type: String,
    },
    asunto: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = model("Mensajes", MensajesSchema);
