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
const links = [
  {
    url: "/",
    name: "home",
  },
  {
    url: "/new",
    name: "new message",
  },
];

router.get("/", (req, res) =>
  res.render("index", {
    title: "Mini Messageboard",
    messages,
    links,
    showMessageLinks: true,
  }),
);
router.get("/:messageId", (req, res) =>
  res.render("index", {
    title: "Message",
    messages: [messages[req.params.messageId]],
    links,
    showMessageLinks: false,
  }),
);

module.exports = router;
module.exports.links = links;
module.exports.messages = messages;
