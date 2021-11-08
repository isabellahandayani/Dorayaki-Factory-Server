var exports = (module.exports = {});
const RecipeService = require("../services/dorayaki_recipe.service");

exports.index = async (_, res) => {
  /*
   *   Return Recipe list
   */

  try {
    var recipe = await RecipeService.getAllRecipe();
    return res.status(200).json({ status: 200, data: recipe });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.detail = async (req, res) => {
  /*
   *  Get detail of a recipe
   */
  try {
    var recipe = await RecipeService.getRecipe(req.params.id);
    return res.status(200).json({ status: 200, data: recipe });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async (req, res) => {
  /*
   *  Create recipe
   */

  try {
    await RecipeService.makeRecipe(req);
    return res.status(201).end();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.notFound = (_, res) => {
  res.status(404).end();
};
