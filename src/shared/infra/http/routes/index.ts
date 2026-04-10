import { Router } from "express";
import { vehiclesRoutes } from "../../../../modules/vehicles/infra/http/routes/vehicles.routes";

const router = Router();

router.use("/vehicles", vehiclesRoutes);

export { router };
