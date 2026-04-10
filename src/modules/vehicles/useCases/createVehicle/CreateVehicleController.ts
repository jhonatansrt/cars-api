import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

export class CreateVehicleController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { plate, chassis, renavam, model, brand, year } = request.body;

        const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

        const vehicle = await createVehicleUseCase.execute({
            plate,
            chassis,
            renavam,
            model,
            brand,
            year,
        });

        return response.status(201).json(vehicle);
    }
}
