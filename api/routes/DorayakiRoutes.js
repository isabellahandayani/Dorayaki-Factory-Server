const express = require("express");
const router = express.Router();
const dorayakiController = require("../controllers/DorayakiController");

router.get("/", dorayakiController.index);
router.get("/:id", dorayakiController.detail);
router.post("/create", dorayakiController.createDorayaki);
router.post("/resep/create", dorayakiController.createRecipe);
router.get("*", dorayakiController.notFound);

module.exports = router;
