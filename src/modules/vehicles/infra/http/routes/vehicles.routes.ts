import { Router } from "express";
import { CreateVehicleController } from "../../../useCases/createVehicle/CreateVehicleController";
import { DeleteVehicleController } from "../../../useCases/deleteVehicle/DeleteVehicleController";
import { GetVehicleByIdController } from "../../../useCases/getVehicleById/GetVehicleByIdController";
import { ListVehiclesController } from "../../../useCases/listVehicles/ListVehiclesController";
import { UpdateVehicleController } from "../../../useCases/updateVehicle/UpdateVehicleController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const listVehiclesController = new ListVehiclesController();
const getVehicleByIdController = new GetVehicleByIdController();
const updateVehicleController = new UpdateVehicleController();
const deleteVehicleController = new DeleteVehicleController();

vehiclesRoutes.post("/", createVehicleController.handle);
vehiclesRoutes.get("/", listVehiclesController.handle);
vehiclesRoutes.get("/:id", getVehicleByIdController.handle);
vehiclesRoutes.put("/:id", updateVehicleController.handle);
vehiclesRoutes.delete("/:id", deleteVehicleController.handle);

export { vehiclesRoutes };
