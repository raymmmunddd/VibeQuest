const { MongoClient, ObjectId } = require('mongodb');

const defaultPrizes = [
  { label: 'Softcopy Photo', icon: 'fa-image', color: '#FF4FD8', weight: 3, stock: null },
  { label: 'Premium Accounts', icon: 'fa-crown', color: '#FFD93D', weight: 2, stock: 20 },
  { label: 'Tarot Keychain', icon: 'fa-key', color: '#8A5CFF', weight: 2, stock: 30 },
  { label: 'Spin Again (Dare)', icon: 'fa-rotate', color: '#00E5FF', weight: 1, stock: null },
  { label: 'Spin Again!', icon: 'fa-dice', color: '#4ADE80', weight: 1, stock: null }
];

async function getDb() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is missing.');

  if (!global.mongoClientPromise) {
    global.mongoClientPromise = new MongoClient(process.env.MONGODB_URI).connect();
  }

  const client = await global.mongoClientPromise;
  const db = client.db(process.env.MONGODB_DB || 'fortunepop');

  if (!global.mongoSeedPromise) {
    global.mongoSeedPromise = seedPrizes(db);
  }
  await global.mongoSeedPromise;

  return db;
}

async function seedPrizes(db) {
  await db.collection('prizes').createIndex({ active: 1 });
  await db.collection('prizeClaims').createIndex({ clientId: 1, createdAt: -1 });

  if (await db.collection('prizes').estimatedDocumentCount()) return;
  await db.collection('prizes').insertMany(defaultPrizes.map((prize) => ({
    ...prize,
    active: true,
    createdAt: new Date()
  })));
}

function pickPrize(prizes) {
  const pool = prizes.filter((p) => p.active && (p.stock === null || p.stock > 0));
  const total = pool.reduce((sum, p) => sum + (p.weight || 1), 0);
  let roll = Math.random() * total;
  return pool.find((p) => (roll -= p.weight || 1) <= 0) || pool[0];
}

module.exports = { getDb, ObjectId, pickPrize };
