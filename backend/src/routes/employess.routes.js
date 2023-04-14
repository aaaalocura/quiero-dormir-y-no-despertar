const { Router } = require("express");
const router = Router();

const eventosCTRL = require("../controllers/eventos.controller");

//eventos
router.get("/", eventosCTRL.getEventos);

router.post("/", eventosCTRL.createEventos);

router.get("/:id", eventosCTRL.getEvento);

router.put("/:id", eventosCTRL.editEventos);

router.delete("/:id", eventosCTRL.deleteEventos);


module.exports = router;
