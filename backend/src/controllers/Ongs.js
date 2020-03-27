const generateId = require('../utils/generateId');
const connection = require('../database/connection');

class OngsController {
  async store(req, res) {
    const id = generateId();
    const { name, email, whatsapp, city, uf } = req.body;

    const ong = await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(201).json({ id });
  }

  async list(req, res) {
    const ongs = await connection('ongs').select('*');
    return res.status(200).json(ongs);
  }
}

module.exports = new OngsController();
