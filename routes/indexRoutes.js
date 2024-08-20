const { Router } = require("express");
const {
  messageGet,
  messagesRender,
  messagesGet,
} = require("../controllers/indexController");
const router = Router();

router.get("/", messagesGet, messagesRender);

router.get("/:messageId", messageGet, messagesRender);

module.exports = router;
