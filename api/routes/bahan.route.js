const express = require("express");
const router = express.Router();
const bahanController = require("../controllers/bahan.controller");

router.get("/", bahanController.index);
router.get("/:id", bahanController.detail);
router.post("/create", bahanController.create);
router.put("/update", bahanController.update);
router.get("*", bahanController.notFound);

module.exports = router;
