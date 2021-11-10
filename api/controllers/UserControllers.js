const JWT_SECRET = require('../../utils/Constant');
const jwt = require('jsonwebtoken');
const UserServices = require('../services/UserServices');

module.exports = {
  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  async createUser(req, res) {
    const { username, email, password } = req.body;

    if (!(username && email && password)) {
      return res.status(400).json({
        message: 'All input required!',
      });
    }

    const [admin, created] = await UserServices.findOrCreateAdminByEmail(
      email,
      req.body,
      true
    );

    if (created) {
      const token = jwt.sign(
        {
          user: admin,
        },
        JWT_SECRET
      );

      res.status(200).json({
        message: 'Admin created successfully',
        jwt: token,
      });
    } else {
      res.status(403).json({
        message: 'Admin already exists',
      });
    }
  },
  /**
   * 
   * @param {Request} req 
   * @param {Response} res 
   */
  async findUser(req, res) {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({
        message: 'All input required!',
      });
    }

    const admin = await UserServices.findOrCreateAdminByEmail(email, req.body, false);

    if (admin) {
      const token = jwt.sign(
        {
          user: admin,
        },
        JWT_SECRET
      );

      res.status(200).json({
        message: 'Admin found successfully',
        jwt: token,
      });
    } else {
      res.status(404).json({
        message: 'Admin not found',
      });
    }
  }
};
