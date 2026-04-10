import { inject, injectable } from "tsyringe";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
export class ListVehiclesUseCase {
    constructor(
        @inject("VehiclesRepository")
        private vehiclesRepository: IVehiclesRepository,
    ) {}

    async execute(): Promise<Vehicle[]> {
        return this.vehiclesRepository.list();
    }
}
