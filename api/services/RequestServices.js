var exports = (module.exports = {});
const {
  Request,
  LogRequest,
} = require("../../db/models");

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

exports.getAllLogRequest = async (id) => {
  /*
   *  Read Request List from DB
   */
  try {
    const data = await LogRequest.findAll({
      where: { id_admin: id },
    });
    return data;
  } catch (e) {
    throw Error(e);
  }
};

exports.makeRequest = async (data) => {
  /*
   *  Make new Request according to the dorayaki and stock
   */

  const { id_dorayaki, stok_added } = data;

  try {
    const request = await Request.create({
      id_dorayaki: id_dorayaki,
      stok_added: stok_added,
    });

    return request;
  } catch (e) {
    throw Error(e);
  }
};

exports.makeLogRequest = async (data) => {
  /*
   *  When an admin accept a request, it will create new LogRequest
   */

  const { id_admin, id_request } = data;

  try {
    const request = await LogRequest.create({
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