const eventosCTRL = {};

///IMPORTAMOS EL MODELO DE LOS EVENTOS/////
const Event = require("../models/Evento");

///OBTENER TODOS LOS EVENTOS/////
eventosCTRL.getEventos = async (req, res) => {
  const event = await Event.find();
  res.json(event);
};
///CREAR EVENTOS/////
eventosCTRL.createEventos = async (req, res) => {
  const newEvento = new Event(req.body);
  await newEvento.save();
  res.send({ message: "evento creado" });
};
///OBTENER UN SOLO EVENTOS/////
eventosCTRL.getEvento = async (req, res) => {
  const newEvento = await Event.findById(req.params.id);
  res.send(newEvento);
};
///EDITAR UN EVENTO/////
eventosCTRL.editEventos = async (req, res) => {
  await Event.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "evento editado" });
};
///ELIMINAR UN EVENTO/////
eventosCTRL.deleteEventos = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.send({ message: "evento eliminado" });
};
///EXPORTANDO LOS EVENTOS/////
module.exports = eventosCTRL;
