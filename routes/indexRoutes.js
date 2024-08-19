const { Router } = require("express");
const router = Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages }),
);
router.get("/:messageId", (req, res) =>
  res.render("index", {
    title: "message",
    messages: [messages[req.params.messageId]],
  }),
);

module.exports = router;
module.exports.messages = messages;
