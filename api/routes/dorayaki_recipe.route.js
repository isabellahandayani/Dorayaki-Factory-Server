const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/dorayaki_recipe.controller");

router.get("/", recipeController.index);
router.get("/:id", recipeController.detail);
router.post("/create", recipeController.create);
router.get("*", recipeController.notFound);

module.exports = router;
