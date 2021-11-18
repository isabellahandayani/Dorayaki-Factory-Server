const express = require("express");
const requestController = require("../controllers/RequestController");
const Authenticator = require("../middleware/Authenticator");

const router = express.Router();
router.get("/", Authenticator, requestController.index);
router.get("/log-admin", Authenticator, requestController.logAdminRequest);
router.post("/:id/validate", Authenticator, requestController.validateRequest);
router.post("/create", requestController.createRequest);
router.get("*", requestController.notFound);

module.exports = router;
