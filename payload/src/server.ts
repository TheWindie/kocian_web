import express from 'express';
import payload from 'payload';
require('dotenv').config();

const app = express();

payload.init({
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret',
  express: app,
  onInit: async () => {
    payload.logger.info('Payload CMS started');
    // Seed default data (run only once)
    const collections = await payload.db?.collections;
    try {
      await require('./seed').seed(payload);
    } catch (e: any) {
      payload.logger.warn(`Seed already performed or error: ${e.message}`);
    }
  },
});

app.listen(3000, () => {
  console.log('Payload running on port 3000');
});
