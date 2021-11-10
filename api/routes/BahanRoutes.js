const express = require("express");
const router = express.Router();
const bahanController = require("../controllers/BahanController");
const Authenticator = require("../middleware/Authenticator");

router.get("/", Authenticator, bahanController.index);
router.get("/:id", Authenticator, bahanController.detail);
router.post("/create", Authenticator, bahanController.create);
router.put("/update", Authenticator, bahanController.update);
router.get("*", Authenticator, bahanController.notFound);

module.exports = router;
