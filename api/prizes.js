const { getDb } = require('./_db');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const db = await getDb();
    const prizes = await db.collection('prizes')
      .find({ active: true }, { projection: { label: 1, icon: 1, color: 1, stock: 1 } })
      .toArray();
    return res.status(200).json(prizes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Prize API failed.' });
  }
};
