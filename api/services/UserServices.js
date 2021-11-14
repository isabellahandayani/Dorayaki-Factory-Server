const { Admin } = require('../../db/models/');

module.exports = {
  /**
   * @description: find or create admin by email
   * @param {string} email
   * @param {object} obj
   * @param {boolean} isRegister
   * @return {[Admin, boolean]} res
   */
  async findOrCreateAdminByEmail(email, obj, isRegister) {
    if (isRegister){
      return await Admin.findOrCreate({
        where: {
          email,
        },
        defaults: {
          ...obj,
        }
      });
    } else {
      return await Admin.findOne({
        where: {
          ...obj,
        }
      });
    }
  },
  /**
   * @description: find admin by id
   * @param {number} id 
   * @return {Admin} res 
   */
  async findAdminById(id) {
    const res = await Admin.findOne({
      where: {
        id
      }
    });
    return res;
  },
  /**
   * @return {Admin[]} res 
   */
   async findAllAdmins() {
    const res = await Admin.findAll();
    return res;
  },
};
