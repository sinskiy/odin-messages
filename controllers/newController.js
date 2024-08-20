const db = require("../db/queries");
const { links } = require("../controllers/indexController.js");

async function createMessagePost(req, res) {
  const { username, text } = req.body;
  await db.insertMessage(username, text);
  res.redirect("/");
}

async function createMessageGet(req, res) {
  res.render("form", { title: "Add new message", links });
}

module.exports = { createMessagePost, createMessageGet };
