const { Router } = require("express");
const router = Router();

const noticiasCTRL = require("../controllers/noticias.controller");
//noticias

router.get("/", noticiasCTRL.getNoticias);

router.post("/", noticiasCTRL.createNoticias);

router.get("/:id", noticiasCTRL.getNoticia);

router.put("/:id", noticiasCTRL.editNoticias);

router.delete("/:id", noticiasCTRL.deleteNoticias);

router.get("/hola", (req, res) => res.send("hola"));
module.exports = router;
