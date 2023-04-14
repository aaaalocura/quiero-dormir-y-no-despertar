const { Schema, model } = require("mongoose");

const NoticiaSchema = new Schema(
  {
    titulo: {
      type: String,
    },
    autor: {
      type: String,
    },
    informacion: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = model("Noticia", NoticiaSchema);
