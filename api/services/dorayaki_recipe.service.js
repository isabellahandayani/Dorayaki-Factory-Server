var exports = (module.exports = {});
const models = require("../../db/models");

exports.getAllRecipe = async () => {
  /*
   *  Read Recipe List from DB
   */
  const recipe = await models.DorayakiRecipe.findAll({})
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw Error(err);
    });

  return recipe;
};

exports.getRecipe = async (id) => {
  /*
   *  Read A Recipe with id:ID
   */
  const recipe = await models.DorayakiRecipe.findByPk(id);
  return recipe;
};

exports.makeRecipe = async (req) => {
  /*
   *  Insert new Recipe to DB
   */
  const recipe = await models.DorayakiRecipe.create({
    id_bahan: req.body.id_bahan,
    id_dorayaki: req.body.id_dorayaki,
    qty: req.body.qty,
  });
  return recipe;
};
