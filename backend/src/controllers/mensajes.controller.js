const MensajesCTRL = {};

///IMPORTAMOS EL MODELO DE LOS MENSAJES/////
const Mensajes = require("../models/Mensajes");

///OBTENER TODOS LOS MENSAJES/////
MensajesCTRL.getMensajes = async (req, res) => {
  const mensaje = await Mensajes.find();
  res.json(mensaje);
};
///CREAR MENSAJES/////
MensajesCTRL.createMensaje = async (req, res) => {
  const mensaje = new Mensajes(req.body);
  await mensaje.save();
  res.send({ message: "mensaje creado" });
};
///OBTENER UN SOLO UN MENSAJE/////
MensajesCTRL.getMensaje = async (req, res) => {
  const mensaje = await Mensajes.findById(req.params.id);
  res.send(mensaje);
};
///EDITAR UN MENSAJE/////
MensajesCTRL.editMensaje= async (req, res) => {
  await Mensajes.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "mensaje editado" });
};
///ELIMINAR UN MENSAJE/////
MensajesCTRL.deleteMensaje = async (req, res) => {
  await Mensajes.findByIdAndDelete(req.params.id);
  res.send({ message: "mensaje eliminado" });
};

///EXPORTANDO LOS MENSAJES/////
module.exports = MensajesCTRL;