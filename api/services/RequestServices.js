var exports = (module.exports = {});
const {
  Request,
  LogAdminRequest,
  sequelize,
} = require("../../db/models");
const { QueryTypes } = require("sequelize");

exports.getAllRequest = async () => {
  /*
   *  Read Request List from DB
   */
  try {
    const data = await Request.findAll({});
    return data;
  } catch (e) {
    throw Error(e);
  }
};

exports.getAllAdminRequest = async (id) => {
  /*
   *  Read Request List from DB
   */
  try {
    const data = await sequelize.query(`
        SELECT r.id, r.id_dorayaki, r.stok_added, r.status 
        FROM requests r 
        INNER JOIN log_admin_requests ar 
          ON r.id = ar.id_request 
        WHERE ar.id_admin = ${id}
      `,
      {
        type: QueryTypes.SELECT
      }
    )

    return data;
  } catch (e) {
    throw Error(e);
  }
};

exports.makeRequest = async (data) => {
  /*
   *  Make new Request according to the dorayaki and stock
   */

  const { id_dorayaki, stok_added, status, created_at } = data;

  try {
    const request = await Request.create({
      id_dorayaki: id_dorayaki,
      stok_added: stok_added,
      status: status,
      created_at: created_at
    });

    return request;
  } catch (e) {
    throw Error(e);
  }
};

exports.makeLogRequest = async (data) => {
  /*
   *  When an admin accept a request, it will create new LogAdminRequest
   */

  const { id_admin, id_request } = data;

  try {
    const request = await LogAdminRequest.create({
      id_admin: id_admin,
      id_request: id_request,
    });

    return request;
  } catch (e) {
    throw Error(e);
  }
};

exports.validateRequest = async (id, isValid) => {
  /*
   *  Validate request if it's going to be accepted or rejected
   */

  try {
    const toBeUpdatedRequest = await Request.findByPk(id);

    toBeUpdatedRequest.update({
      status: isValid ? "accepted" : "rejected",
    });

    return toBeUpdatedRequest;
  } catch (e) {
    throw Error(e);
  }
};