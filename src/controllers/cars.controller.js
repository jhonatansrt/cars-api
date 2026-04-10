const carsService = require('../services/cars.service');

function listCars(_req, res, next) {
  try {
    const cars = carsService.listCars();
    return res.status(200).json(cars);
  } catch (error) {
    return next(error);
  }
}

function getCarById(req, res, next) {
  try {
    const { id } = req.params;
    const car = carsService.getCarById(id);
    return res.status(200).json(car);
  } catch (error) {
    return next(error);
  }
}

function createCar(req, res, next) {
  try {
    const car = carsService.createCar(req.body);
    return res.status(201).json(car);
  } catch (error) {
    return next(error);
  }
}

function updateCar(req, res, next) {
  try {
    const { id } = req.params;
    const car = carsService.updateCar(id, req.body);
    return res.status(200).json(car);
  } catch (error) {
    return next(error);
  }
}

function deleteCar(req, res, next) {
  try {
    const { id } = req.params;
    carsService.deleteCar(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  listCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
