var exports = module.exports = {};
const Sequelize = require('sequelize');
const models = require('../../db/models');
const Op = Sequelize.Op

exports.index = (req, res) => {
    /*
        Read Dorayaki List and its stock
    */

    models.BahanBaku.findAll({
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    });
}


exports.notFound = (req, res) => {
    console.log("notFound")
}