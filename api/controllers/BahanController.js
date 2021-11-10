var exports = (module.exports = {});
const BahanService = require("../services/BahanServices");

exports.index = async (_, res) => {
  /*
   *   Return ingredient list
   */

  try {
    var bahan = await BahanService.getAllBahan();
    return res.status(200).json({ status: 200, data: bahan });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.detail = async (req, res) => {
  /*
   *  Get detail of an ingredient
   */
  try {
    var bahan = await BahanService.getBahan(req.params.id);
    return res.status(200).json({ status: 200, data: bahan });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async (req, res) => {
  /*
   *  Create ingredient
   */

  try {
    await BahanService.makeBahan(req);
    return res.status(201).end();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async (req, res) => {
  /*
   *  Update Ingredient Attributes
   */

  try {
    await BahanService.updateBahan(req);
    return res.status(200).end();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.notFound = (_, res) => {
  res.status(404).end();
};
