const express = require('express');

const { errorHandler } = require('../middlewares/error-handler');
const { carsRouter } = require('../routes/cars.routes');

function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.use('/cars', carsRouter);

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };
