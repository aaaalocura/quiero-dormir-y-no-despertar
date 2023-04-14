const noticiasCTRL = {};

///IMPORTAMOS EL MODELO DE LAS NOTICIAS/////
const noticia = require("../models/Noticia");

///OBTENER TODOS LAS NOTICIAS/////
noticiasCTRL.getNoticias = async (req, res) => {
  const Noticia = await noticia.find();
  res.json(Noticia);
};

///CREAR NOTICIAS/////
noticiasCTRL.createNoticias = async (req, res) => {
  const newNoticia = new noticia(req.body);
  await newNoticia.save();
  res.send({ message: "Noticia creado" });
};

///OBTENER UN SOLO UNA NOTICIA/////

noticiasCTRL.getNoticia = async (req, res) => {
  const Noticia = await noticia.findById(req.params.id);
  res.send(Noticia);
};
///EDITAR UNA NOTICIA/////
noticiasCTRL.editNoticias = async (req, res) => {
  await noticia.findByIdAndUpdate(req.params.id, req.body);
  res.send({ message: "Noticia editado" });
};
///ELIMINAR UNA NOTICIA/////
noticiasCTRL.deleteNoticias = async (req, res) => {
  await noticia.findByIdAndDelete(req.params.id);
  res.send({ message: "noticia eliminado" });
};
///EXPORTANDO LAS NOTICIAS/////
module.exports = noticiasCTRL;
