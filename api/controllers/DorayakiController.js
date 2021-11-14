var exports = (module.exports = {});
const DorayakiService = require("../services/DorayakiServices");

exports.index = async (_, res) => {
  /*
   *   Return Recipe list
   */
  try {
    var dorayaki = await DorayakiService.getAllDorayaki();
    return res.status(200).json({data: dorayaki });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.detail = async (req, res) => {
  /*
   *  Get detail of a recipe
   */
  try {
    var recipe = await DorayakiService.getRecipe(req.params.id);

    return res.status(200).json({data: recipe });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.createDorayaki = async (req, res) => {
  /*
   *  Create Dorayaki
   */
  try {
    await DorayakiService.makeDorayaki(req);
    return res.status(201).json({  message: "Success" });
  } catch (e) {
    return res.status(400).json({  message: e.message });
  }
};

exports.createRecipe = async (req, res) => {
  /*
   *  Create recipe
   */
  try {
    await DorayakiService.makeRecipe(req);
    return res.status(201).json({  message: "Success" });
  } catch (e) {
    return res.status(400).json({  message: e.message });
  }
};

exports.notFound = (_, res) => {
  res.status(404).end();
};
