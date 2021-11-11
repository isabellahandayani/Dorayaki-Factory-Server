const express = require("express");
const router = express.Router();
const requestController = require("../controllers/RequestController");
const Authenticator = require("../middleware/Authenticator");

router.get("/", Authenticator, requestController.index);
router.get("/log", Authenticator, requestController.logRequest);
router.post("/:id/validate", Authenticator, requestController.validateRequest);
router.post("/create", requestController.createRequest);
router.get("*", requestController.notFound);

module.exports = router;
