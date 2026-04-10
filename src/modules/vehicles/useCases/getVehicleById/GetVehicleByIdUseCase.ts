import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
export class GetVehicleByIdUseCase {
    constructor(
        @inject("VehiclesRepository")
        private vehiclesRepository: IVehiclesRepository,
    ) {}

    async execute(id: string): Promise<Vehicle> {
        const vehicle = await this.vehiclesRepository.findById(id);

        if (!vehicle) {
            throw new AppError("Vehicle not found.", 404);
        }

        return vehicle;
    }
}
