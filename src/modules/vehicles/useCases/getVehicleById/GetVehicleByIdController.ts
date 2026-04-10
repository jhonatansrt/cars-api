import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetVehicleByIdUseCase } from "./GetVehicleByIdUseCase";

export class GetVehicleByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getVehicleByIdUseCase = container.resolve(GetVehicleByIdUseCase);

        const vehicle = await getVehicleByIdUseCase.execute(id);

        return response.json(vehicle);
    }
}
