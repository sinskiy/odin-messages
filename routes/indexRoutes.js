const { Router } = require("express");
const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages })
);

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

module.exports = router;
