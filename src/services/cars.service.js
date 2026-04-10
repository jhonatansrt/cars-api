const { v4: uuidV4 } = require('uuid');

const carsRepository = require('../repositories/cars.repository');
const { HttpError } = require('../utils/http-error');

function listCars() {
  return carsRepository.listCars();
}

function getCarById(id) {
  const car = carsRepository.getCarById(id);

  if (!car) {
    throw new HttpError(404, 'Carro não encontrado');
  }

  return car;
}

function createCar(payload) {
  return carsRepository.createCar({
    id: uuidV4(),
    ...payload,
  });
}

function updateCar(id, payload) {
  const updatedCar = carsRepository.updateCar(id, payload);

  if (!updatedCar) {
    throw new HttpError(404, 'Carro não encontrado');
  }

  return updatedCar;
}

function deleteCar(id) {
  const removed = carsRepository.deleteCar(id);

  if (!removed) {
    throw new HttpError(404, 'Carro não encontrado');
  }
}

module.exports = {
  listCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
