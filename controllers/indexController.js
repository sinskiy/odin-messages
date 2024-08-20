const db = require("../db/queries");

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

async function messagesGet(req, res, next) {
  res.locals.messages = await db.getAllMessages();
  next();
}

async function messageGet(req, res, next) {
  res.locals.messages = await db.getMessage(req.params.messageId);
  next();
}

function messagesRender(req, res) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: res.locals.messages,
    links,
    showMessageLinks: true,
  });
}

module.exports = { messagesGet, messageGet, messagesRender, links };
