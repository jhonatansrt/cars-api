const carsStore = [];

function listCars() {
  return carsStore;
}

function getCarById(id) {
  return carsStore.find((car) => car.id === id) || null;
}

function createCar(car) {
  carsStore.push(car);
  return car;
}

function updateCar(id, payload) {
  const carIndex = carsStore.findIndex((car) => car.id === id);

  if (carIndex === -1) {
    return null;
  }

  carsStore[carIndex] = {
    ...carsStore[carIndex],
    ...payload,
  };

  return carsStore[carIndex];
}

function deleteCar(id) {
  const carIndex = carsStore.findIndex((car) => car.id === id);

  if (carIndex === -1) {
    return false;
  }

  carsStore.splice(carIndex, 1);
  return true;
}

module.exports = {
  listCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
