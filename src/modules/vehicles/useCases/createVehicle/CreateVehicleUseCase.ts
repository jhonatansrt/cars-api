import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateVehicleDTO } from "../../dtos/ICreateVehicleDTO";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
export class CreateVehicleUseCase {
    constructor(
        @inject("VehiclesRepository")
        private vehiclesRepository: IVehiclesRepository,
    ) {}

    async execute(data: ICreateVehicleDTO): Promise<Vehicle> {
        const vehicleAlreadyExists =
            (await this.vehiclesRepository.findByPlate(data.plate)) ||
            (await this.vehiclesRepository.findByChassis(data.chassis)) ||
            (await this.vehiclesRepository.findByRenavam(data.renavam));

        if (vehicleAlreadyExists) {
            throw new AppError("Vehicle is already registered.");
        }

        return this.vehiclesRepository.create(data);
    }
}
