const { getDb } = require('../_db');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const db = await getDb();
    const fortuneIds = await db.collection('prizeClaims').distinct('fortuneId', {
      fortuneId: { $type: 'string', $ne: '' }
    });
    return res.status(200).json(fortuneIds);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Used fortunes API failed.' });
  }
};
