import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

export class UpdateVehicleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { plate, chassis, renavam, model, brand, year } = request.body;

        const updateVehicleUseCase = container.resolve(UpdateVehicleUseCase);

        const vehicle = await updateVehicleUseCase.execute(id, {
            plate,
            chassis,
            renavam,
            model,
            brand,
            year,
        });

        return response.json(vehicle);
    }
}
