var exports = (module.exports = {});
const DorayakiService = require("../services/DorayakiServices");

exports.index = async (_, res) => {
  /*
   *   Return Recipe list
   */
  try {
    var dorayaki = await DorayakiService.getAllDorayaki();
    return res.status(200).json({ status: 200, data: dorayaki });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.detail = async (req, res) => {
  /*
   *  Get detail of a recipe
   */
  try {
    var recipe = await DorayakiService.getRecipe(req.params.id);

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
    await DorayakiService.makeDorayaki(req);
    await DorayakiService.makeRecipe(req);
    return res.status(201).json({ status: 200, message: "Success"});
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.notFound = (_, res) => {
  res.status(404).end();
};
