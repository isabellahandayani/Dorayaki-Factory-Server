var exports = (module.exports = {});
const models = require("../../db/models");
const Op = require("sequelize").Op;

exports.getAllBahan = async () => {
  /*
   *  Read Ingridients List from DB
   */
  const bahan = await models.BahanBaku.findAll({})
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw Error(err);
    });

  return bahan;
};

exports.getBahan = async (id) => {
  /*
   *  Read A Ingredient with id:ID
   */
  const bahan = await models.BahanBaku.findByPk(id);
  return bahan;
};

exports.makeBahan = async (req) => {
  /*
   *  Insert new Ingredients to DB
   */
  const bahan = await models.BahanBaku.create({
    nama_bahan: req.body.nama_bahan,
    satuan: req.body.satuan,
    stok: req.body.stok,
  });
  return bahan;
};

exports.updateBahan = async (req) => {
  /*
   *  Update Ingredients in DB
   */
  const id = req.body.id;
  models.BahanBaku.findOne({ where: { id: { [Op.eq]: id } } })
    .then((bahan) => {
      return bahan.update(req.body);
    })
    .catch((err) => {
      return err.message;
    });
};
