const exports = (module.exports = {});
const RequestServices = require("../services/RequestServices");

exports.index = async (_, res) => {
  /*
   *  Get all incoming request
   */

  try {
    const requestData = await RequestServices.getAllRequest();

    return res.status(200).json({ data: requestData });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.logRequest = async (req, res) => {
  /*
   *  Get all log request of an admin
   */

  const id_admin = req.user.id;

  try {
    const logRequestData = await RequestServices.getAllLogRequest(id_admin);

    return res.status(200).json({ data: logRequestData });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.validateRequest = async (req, res) => {
  /*
   * Validate a request by admin
   */

  const id_admin = req.user.id;
  const { isValid } = req.body;
  const id_request = req.params.id

  try {
    await RequestServices.validateRequest(id_request, isValid);
    if (isValid) {
      const newLogRequest = {
        id_admin,
        id_request,
      };

      await RequestServices.makeLogRequest(newLogRequest);
    }

    return res.status(200).json({ message: "Success" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.createRequest = async (req, res) => {
  /**
   * Create new request from store
   * @param {Request} req
   * @param {Response} res
   * @param {Request.body} id_dorayaki
   * @param {Request.body} stok_added
   * @returns
   */

  try {
    await RequestServices.makeRequest(req.body);

    return res.status(200).json({ message: "Success" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
