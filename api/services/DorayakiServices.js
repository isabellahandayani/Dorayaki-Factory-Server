var exports = (module.exports = {});
var { QueryTypes } = require("sequelize");
const {
  Dorayaki,
  DorayakiRecipe,
  BahanBaku,
  sequelize,
} = require("../../db/models");

exports.getAllDorayaki = async () => {
  /*
   *  Read Dorayaki List from DB
   */
  const dorayaki = await Dorayaki.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt']
    }
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw Error(err);
    });

  return dorayaki;
};

exports.getRecipe = async (id_dorayaki) => {
  /*
   *  Read A Recipe with id_dorayaki:id_dorayaki
   */

  const users = await sequelize.query(
    "SELECT dorayaki_name, nama_bahan, satuan, qty FROM \
    (`dorayakis` INNER JOIN `dorayaki_recipe` ON `dorayakis`.`id` = `dorayaki_recipe`.`id_dorayaki`) \
    INNER JOIN bahan_baku ON `dorayaki_recipe`.`id_bahan` = `bahan_baku`.`id`\
    WHERE id_dorayaki=" +
      id_dorayaki,
    { type: QueryTypes.SELECT }
  );
  return users;
};

exports.makeRecipe = async (req) => {
  /*
   *  Insert new Recipe to DB
   */
  const recipe = await DorayakiRecipe.create({
    id_bahan: req.body.id_bahan,
    id_dorayaki: req.body.id_dorayaki,
    qty: req.body.qty,
  });
  return recipe;
};

exports.makeDorayaki = async (req) => {
  /*
   *  Make new Dorayaki Based on Recipe
   */

  const dorayaki = await Dorayaki.create({
    dorayaki_name: req.body.dorayaki_name,
  });

  return dorayaki;
};
