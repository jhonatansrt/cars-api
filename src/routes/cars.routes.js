const { Router } = require('express');

const carsController = require('../controllers/cars.controller');
const { validateCarPayload } = require('../middlewares/validate-car-payload');

const carsRouter = Router();

carsRouter.get('/', carsController.listCars);
carsRouter.get('/:id', carsController.getCarById);
carsRouter.post('/', validateCarPayload, carsController.createCar);
carsRouter.put('/:id', validateCarPayload, carsController.updateCar);
carsRouter.delete('/:id', carsController.deleteCar);

module.exports = { carsRouter };
