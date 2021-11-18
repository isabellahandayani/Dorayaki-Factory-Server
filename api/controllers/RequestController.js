const env = process.env.NODE_ENV || 'development';
var exports = (module.exports = {});
const RequestServices = require("../services/RequestServices");
const UserServices = require("../services/UserServices");
const { gmailTransporter, gmailSender } = require('../../config/config')[env];
const logger = require('winston');

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

exports.logAdminRequest = async (req, res) => {
  /*
   *  Get all log request of an admin
   */

  const id_admin = req.user.id;

  try {
    const logAdminRequestData = await RequestServices.getAllLogAdminRequest(id_admin);

    return res.status(200).json({ data: logAdminRequestData });
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
    const admins = await UserServices.findAllAdmins();
    const { id_dorayaki, stok_added } = req.body;

    for (const admin of admins) {
      const mailOptions = {
        from: gmailSender,
        to: admin.email,
        subject: 'You have a new Dorayaki Stock Request!',
        text: `Someone need to add ${stok_added} of Dorayaki with ID of ${id_dorayaki}!`
      }

      gmailTransporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          logger.log('error', `Failed sending e-mail to ${admin.email}: ${err}`)
          throw err
        } else {
          logger.log('info', `Successfully sent e-mail to ${admin.email}: ${info.response}`)
        }
      })
    }

    return res.status(200).json({ message: "Success" });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.notFound = (_, res) => {
  res.status(404).end();
};