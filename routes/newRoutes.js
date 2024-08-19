const { Router } = require("express");
const { messages } = require("./indexRoutes");
const router = Router();

router.get("/", (req, res) => res.render("form", { title: "Add new message" }));
router.post("/", (req, res) => {
  const { message, author } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
