const express = require("express");
const router = express.Router();
const dorayakiController = require("../controllers/DorayakiController");

router.get("/", dorayakiController.index);
router.get("/:id", dorayakiController.detail);
router.post("/resep/create", dorayakiController.create);
router.get("*", dorayakiController.notFound);

module.exports = router;
