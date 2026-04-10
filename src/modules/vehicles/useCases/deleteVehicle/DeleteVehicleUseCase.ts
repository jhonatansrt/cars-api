import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
export class DeleteVehicleUseCase {
    constructor(
        @inject("VehiclesRepository")
        private vehiclesRepository: IVehiclesRepository,
    ) {}

    async execute(id: string): Promise<void> {
        const vehicle = await this.vehiclesRepository.findById(id);

        if (!vehicle) {
            throw new AppError("Vehicle not found.", 404);
        }

        await this.vehiclesRepository.delete(id);
    }
}
