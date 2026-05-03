const { getDb, ObjectId, pickPrize } = require('../_db');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const db = await getDb();
    const { clientId = 'guest', fortuneId = null } = req.body || {};
    const prize = pickPrize(await db.collection('prizes').find({ active: true }).toArray());

    if (!prize) return res.status(409).json({ error: 'No prizes available.' });

    if (prize.stock !== null) {
      const updatedPrize = await db.collection('prizes').findOneAndUpdate(
        { _id: new ObjectId(prize._id), stock: { $gt: 0 } },
        { $inc: { stock: -1 } },
        { returnDocument: 'after' }
      );
      if (!updatedPrize) {
        return res.status(409).json({ error: 'Prize is out of stock. Please spin again.' });
      }
    }

    const saved = await db.collection('prizeClaims').insertOne({
      clientId,
      fortuneId,
      prizeId: prize._id,
      prizeLabel: prize.label,
      createdAt: new Date()
    });

    return res.status(200).json({ ...prize, claimId: saved.insertedId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Spin was not recorded. Please try again.' });
  }
};
