const express = require("express");
const router = express.Router();
const dorayakiController = require("../controllers/DorayakiController");
const Authenticator = require("../middleware/Authenticator");

router.get("/", Authenticator, dorayakiController.index);
router.get("/:id", Authenticator, dorayakiController.detail);
router.post("/create", Authenticator, dorayakiController.createDorayaki);
router.post("/resep/create", Authenticator, dorayakiController.createRecipe);
router.get("*", Authenticator, dorayakiController.notFound);

module.exports = router;
