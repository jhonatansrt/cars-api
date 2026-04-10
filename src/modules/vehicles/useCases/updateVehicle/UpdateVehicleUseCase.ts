import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateVehicleDTO } from "../../dtos/IUpdateVehicleDTO";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
export class UpdateVehicleUseCase {
    constructor(
        @inject("VehiclesRepository")
        private vehiclesRepository: IVehiclesRepository,
    ) {}

    async execute(id: string, data: IUpdateVehicleDTO): Promise<Vehicle> {
        const vehicle = await this.vehiclesRepository.findById(id);

        if (!vehicle) {
            throw new AppError("Vehicle not found.", 404);
        }

        return this.vehiclesRepository.update(id, data);
    }
}
