const db = require('../../config/db');
const ResponseObject = require('../Helpers/ResponseObject');

class Modules {
    static async getModulesList(req, res, next) {
        try {
            const modules = await db.Modules.findAll({
                attributes: ['id', 'url_path', 'title', 'desc']
            });
            res.status(200).json({data: modules});
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Modules;