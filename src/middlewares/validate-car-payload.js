const { HttpError } = require('../utils/http-error');

function validateCarPayload(req, _res, next) {
  const { brand, model, year, color } = req.body;

  if (!brand || !model || !year) {
    return next(new HttpError(400, 'brand, model e year são obrigatórios'));
  }

  if (!Number.isInteger(year) || year < 1886) {
    return next(new HttpError(400, 'year deve ser um inteiro válido'));
  }

  if (color && typeof color !== 'string') {
    return next(new HttpError(400, 'color deve ser uma string'));
  }

  return next();
}

module.exports = { validateCarPayload };
