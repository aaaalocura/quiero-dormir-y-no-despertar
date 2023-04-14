const { Router } = require("express");
const router = Router();

const MensajesCTRL = require("../controllers/mensajes.controller");
//noticias

router.get("/", MensajesCTRL.getMensajes);

router.post("/", MensajesCTRL.createMensaje);

router.get("/:id", MensajesCTRL.getMensaje);

router.put("/:id", MensajesCTRL.editMensaje);

router.delete("/:id", MensajesCTRL.deleteMensaje);

router.get("/hola", (req, res) => res.send("hola"));
module.exports = router;