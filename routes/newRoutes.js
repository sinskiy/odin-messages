const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.render("form", { title: "Add new message" }));

module.exports = router;
