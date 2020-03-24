const connection = require('../database/connection');

class OngProfileController {
  async list(req, res) {
    const { authorization: ong_id } = req.headers;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

module.exports = new OngProfileController();
